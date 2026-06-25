# @emailux/components

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

- Updated dependencies [1a2ada2]
- Updated dependencies
  - @emailux/body-contents@1.2.0
  - @emailux/api-client@2.1.0
  - @emailux/get-html@1.2.0
  - @emailux/get-text@1.2.0
  - @emailux/button@1.2.0
  - @emailux/badge@1.2.0
  - @emailux/table@1.2.0
  - @emailux/body@1.2.0
  - @emailux/card@1.2.0
  - @emailux/font@1.2.0
  - @emailux/head@1.2.0
  - @emailux/html@1.2.0
  - @emailux/text@1.2.0
  - @emailux/box@1.2.0
  - @emailux/css@1.2.0
  - @emailux/img@1.2.0
  - @emailux/hr@1.2.0
  - @emailux/li@1.2.0
  - @emailux/ol@1.2.0
  - @emailux/ul@1.2.0
  - @emailux/a@1.2.0

## 1.1.0

### Minor Changes

- 6263b4a: Fixed API paths for api-client
- Support React 16.8 through 19. Widen the `react` peer range to `^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`, move `react-dom` from `dependencies` to `peerDependencies` in `get-html`/`get-text` (it was a hard dependency pinned to 19, which broke consumers on other React versions or without react-dom), and replace `Object.hasOwn` with `Object.prototype.hasOwnProperty.call` for older-runtime safety.

### Patch Changes

- 58c39c0: Email UX api-client released
- Updated dependencies [69dea3e]
- Updated dependencies [6263b4a]
- Updated dependencies
- Updated dependencies [58c39c0]
- Updated dependencies [69dea3e]
  - @emailux/api-client@2.0.0
  - @emailux/a@1.1.0
  - @emailux/badge@1.1.0
  - @emailux/body@1.1.0
  - @emailux/body-contents@1.1.0
  - @emailux/box@1.1.0
  - @emailux/button@1.1.0
  - @emailux/card@1.1.0
  - @emailux/css@1.1.0
  - @emailux/font@1.1.0
  - @emailux/get-html@1.1.0
  - @emailux/get-text@1.1.0
  - @emailux/head@1.1.0
  - @emailux/hr@1.1.0
  - @emailux/html@1.1.0
  - @emailux/img@1.1.0
  - @emailux/li@1.1.0
  - @emailux/ol@1.1.0
  - @emailux/table@1.1.0
  - @emailux/text@1.1.0
  - @emailux/ul@1.1.0

## 1.0.1

### Patch Changes

- Patch release: publish all EmailUX component packages.
- Updated dependencies
  - @emailux/a@1.0.1
  - @emailux/badge@1.0.1
  - @emailux/body@1.0.1
  - @emailux/body-contents@1.0.1
  - @emailux/box@1.0.1
  - @emailux/button@1.0.1
  - @emailux/card@1.0.1
  - @emailux/css@1.0.1
  - @emailux/font@1.0.1
  - @emailux/get-html@1.0.1
  - @emailux/get-text@1.0.1
  - @emailux/head@1.0.1
  - @emailux/hr@1.0.1
  - @emailux/html@1.0.1
  - @emailux/img@1.0.1
  - @emailux/li@1.0.1
  - @emailux/ol@1.0.1
  - @emailux/table@1.0.1
  - @emailux/text@1.0.1
  - @emailux/ul@1.0.1

## 1.0.0

- Initialized email comp
