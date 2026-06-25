# @emailux/body

## 1.1.0

### Minor Changes

- Support React 16.8 through 19. Widen the `react` peer range to `^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`, move `react-dom` from `dependencies` to `peerDependencies` in `get-html`/`get-text` (it was a hard dependency pinned to 19, which broke consumers on other React versions or without react-dom), and replace `Object.hasOwn` with `Object.prototype.hasOwnProperty.call` for older-runtime safety.

### Patch Changes

- Updated dependencies
  - @emailux/body-contents@1.1.0
  - @emailux/html@1.1.0

## 1.0.1

### Patch Changes

- Patch release: publish all EmailUX component packages.
- Updated dependencies
  - @emailux/body-contents@1.0.1
  - @emailux/html@1.0.1

## 0.2.2

### Patch Changes

- 2fd9bc2: Ensure build artifacts are included via prepack.

## 0.2.1

### Patch Changes

- Updated dependencies [f351f65]
  - @emailux/body-content@0.2.1

## 0.2.0

### Minor Changes

- fec2272: Fixed un-necessary required props

### Patch Changes

- Updated dependencies [fec2272]
  - @emailux/body-content@0.2.0

## 1.0.0

- Initialized email comp
