#!/usr/bin/env node
// Verifies the packaging of every publishable @emailux/* package:
//   1. Every path referenced by main/module/types and every leaf of `exports`
//      actually exists on disk in dist/.
//   2. `publint` and `@arethetypeswrong/cli --pack` report zero errors
//      (node10 / node16 / nodenext / bundler).
//   3. A scratch consumer can both `require.resolve(...)` + `require(...)` and
//      dynamically `import(...)` the entry of @emailux/get-html and
//      @emailux/components (the CJS path that previously broke `next build`).
//
// Usage: node tools/verify-exports.mjs
// Exit code is non-zero if any check fails.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PACKAGES_DIR = path.join(ROOT, 'packages');

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const BOLD = '\x1b[1m';

const failures = [];
function fail(pkg, msg) {
  failures.push(`${pkg}: ${msg}`);
  console.log(`  ${RED}FAIL${RESET} ${msg}`);
}
function ok(msg) {
  console.log(`  ${GREEN}ok${RESET}   ${msg}`);
}

function listPublishablePackages() {
  const out = [];
  for (const entry of readdirSync(PACKAGES_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dir = path.join(PACKAGES_DIR, entry.name);
    const pjPath = path.join(dir, 'package.json');
    if (!existsSync(pjPath)) continue;
    const pkg = JSON.parse(readFileSync(pjPath, 'utf8'));
    if (pkg.private === true) continue;
    if (!pkg.name) continue;
    out.push({ dir, name: pkg.name, pkg });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

function collectReferencedPaths(pkg) {
  const refs = new Set();
  for (const field of ['main', 'module', 'types']) {
    if (typeof pkg[field] === 'string') refs.add(pkg[field]);
  }
  const walk = (node) => {
    if (typeof node === 'string') {
      if (node.startsWith('./')) refs.add(node);
      return;
    }
    if (node && typeof node === 'object') {
      for (const v of Object.values(node)) walk(v);
    }
  };
  walk(pkg.exports);
  return [...refs];
}

function checkPathsExist({ dir, name, pkg }) {
  let allExist = true;
  for (const rel of collectReferencedPaths(pkg)) {
    const abs = path.join(dir, rel);
    if (!existsSync(abs)) {
      fail(name, `referenced path does not exist: ${rel}`);
      allExist = false;
    }
  }
  if (allExist) ok('all main/module/types/exports paths exist on disk');
  return allExist;
}

function runTool(label, cmd, args, cwd) {
  try {
    const stdout = execFileSync(cmd, args, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, FORCE_COLOR: '0' },
    });
    ok(`${label} passed`);
    return { passed: true, output: stdout };
  } catch (err) {
    const output = `${err.stdout ?? ''}${err.stderr ?? ''}`.trim();
    return { passed: false, output };
  }
}

function checkPublint({ dir, name }) {
  const res = runTool('publint', 'pnpm', ['--silent', 'dlx', 'publint', '--strict'], dir);
  if (!res.passed) {
    fail(name, `publint reported problems:\n${indent(res.output)}`);
  }
  return res;
}

function checkAttw({ dir, name }) {
  const res = runTool(
    'attw',
    'pnpm',
    ['--silent', 'dlx', '@arethetypeswrong/cli', '--pack', '--format', 'table', dir],
    dir,
  );
  if (!res.passed) {
    fail(name, `attw reported problems:\n${indent(res.output)}`);
  }
  return res;
}

function indent(text, pad = '       ') {
  return text
    .split('\n')
    .map((l) => pad + l)
    .join('\n');
}

function childOutput(err) {
  return `${err.stdout ?? ''}${err.stderr ?? ''}`.trim();
}

function setupScratch(packages) {
  const scratch = mkdtempSync(path.join(tmpdir(), 'emailux-verify-'));
  // Pack every publishable package into real tarballs (this rewrites the
  // workspace: protocol to concrete version ranges, exactly like publishing).
  const tarballs = [];
  for (const { dir } of packages) {
    execFileSync('pnpm', ['pack', '--pack-destination', scratch], { cwd: dir, stdio: ['ignore', 'ignore', 'pipe'] });
  }
  for (const f of readdirSync(scratch)) {
    if (f.endsWith('.tgz')) tarballs.push(path.join(scratch, f));
  }

  writeFileSync(
    path.join(scratch, 'package.json'),
    JSON.stringify({ name: 'emailux-verify-scratch', version: '0.0.0', private: true }, null, 2),
  );

  // Install all local tarballs together (so @emailux interdeps resolve to the
  // local builds, not the published registry versions) plus React from the
  // registry, which pulls in every transitive dependency normally.
  execFileSync(
    'npm',
    ['install', '--no-audit', '--no-fund', '--save=false', ...tarballs, 'react@19', 'react-dom@19'],
    { cwd: scratch, stdio: ['ignore', 'ignore', 'pipe'] },
  );
  return scratch;
}

function runScratchResolution(packages) {
  const targets = ['@emailux/get-html', '@emailux/components'];
  console.log(`\n${BOLD}Scratch resolution (require + import) for ${targets.join(', ')}${RESET}`);
  console.log('  (packing tarballs + npm install, this can take a minute)');
  let scratch;
  try {
    scratch = setupScratch(packages);
  } catch (err) {
    const detail = `${err.message}\n${childOutput(err)}`.trim();
    fail('scratch', `could not set up scratch dir: ${detail}`);
    return;
  }

  const cjs = `
const targets = ${JSON.stringify(targets)};
for (const t of targets) {
  const resolved = require.resolve(t);
  const mod = require(t);
  if (!mod) throw new Error('empty module for ' + t);
  console.log('require ok: ' + t + ' -> ' + resolved);
}
`;
  const esm = `
const targets = ${JSON.stringify(targets)};
for (const t of targets) {
  const mod = await import(t);
  if (!mod) throw new Error('empty module for ' + t);
  console.log('import ok: ' + t);
}
`;
  writeFileSync(path.join(scratch, 'test-cjs.cjs'), cjs);
  writeFileSync(path.join(scratch, 'test-esm.mjs'), esm);

  for (const [label, file] of [['require()', 'test-cjs.cjs'], ['import()', 'test-esm.mjs']]) {
    try {
      const out = execFileSync('node', [path.join(scratch, file)], { cwd: scratch, encoding: 'utf8' });
      for (const l of out.trim().split('\n')) ok(`${label}: ${l}`);
    } catch (err) {
      fail('scratch', `${label} failed:\n${indent(childOutput(err))}`);
    }
  }

  rmSync(scratch, { recursive: true, force: true });
}

function main() {
  const packages = listPublishablePackages();
  console.log(`${BOLD}Verifying ${packages.length} publishable packages${RESET}\n`);

  for (const p of packages) {
    console.log(`${BOLD}${p.name}${RESET}`);
    checkPathsExist(p);
    checkPublint(p);
    checkAttw(p);
  }

  runScratchResolution(packages);

  console.log('');
  if (failures.length > 0) {
    console.log(`${RED}${BOLD}${failures.length} check(s) failed:${RESET}`);
    for (const f of failures) console.log(`${RED}- ${f}${RESET}`);
    process.exit(1);
  }
  console.log(`${GREEN}${BOLD}All checks passed.${RESET}`);
}

main();
