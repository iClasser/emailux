# @emailux/api-client

## 2.0.0

### Major Changes

- 58c39c0: Email UX api-client released

### Minor Changes

- 69dea3e: client api
- 6263b4a: Fixed API paths for api-client
- Support React 16.8 through 19. Widen the `react` peer range to `^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`, move `react-dom` from `dependencies` to `peerDependencies` in `get-html`/`get-text` (it was a hard dependency pinned to 19, which broke consumers on other React versions or without react-dom), and replace `Object.hasOwn` with `Object.prototype.hasOwnProperty.call` for older-runtime safety.
- 69dea3e: api client added
