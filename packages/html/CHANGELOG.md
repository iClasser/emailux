# @emailux/html

## 1.2.0

### Minor Changes

- 1a2ada2: Support for React 16 up to 19.

### Patch Changes

- Fix package entry points so CommonJS, bundlers, and TypeScript resolve correctly.

  The `main`, `types`, and `exports["."].require` fields pointed at `dist/index.js`
  and `dist/index.d.ts`, which the build never emits. The CJS entry now points at the
  real `dist/index.cjs` / `dist/index.d.cts` (and `api-client` gets condition-correct
  per-branch types). This fixes `MODULE_NOT_FOUND` under Node CommonJS, `require.resolve`,
  and webpack's `require` condition (e.g. `next build`), with no public API or runtime changes.

## 1.1.0

### Minor Changes

- Support React 16.8 through 19. Widen the `react` peer range to `^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`, move `react-dom` from `dependencies` to `peerDependencies` in `get-html`/`get-text` (it was a hard dependency pinned to 19, which broke consumers on other React versions or without react-dom), and replace `Object.hasOwn` with `Object.prototype.hasOwnProperty.call` for older-runtime safety.

## 1.0.1

### Patch Changes

- Patch release: publish all EmailUX component packages.

## 1.0.0

- Initialized email comp
