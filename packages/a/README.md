# @emailux/a

Anchor for email components
<br />
<br />
<img width="512" height="85" alt="email_ux_black (1)" src="https://github.com/user-attachments/assets/150c5f76-4a7b-4dbe-83cb-86d91e7d177e" />
<br />

<div style='text-align:center'>
  <a href='https://github.com/iClasser/emailux'>GitHub<a>
  </hr>
</div>


<div style='text-align:center'>
  <a href='https://www.npmjs.com/package/@emailux/components'>NPM package<a>
  </hr>
</div>


<div style='text-align:center'>
  <a href='https://emailux.com'>Website<a>
  </hr>
</div>

<div style='text-align:center'>
  <a href='https://docs.emailux.com'>Docs<a>
  </hr>
</div>



<div style='text-align:center'>
  <a href='https://demo.emailux.com'>Demos<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @emailux/a

# npm
npm install @emailux/a

# yarn
yarn add @emailux/a
```

## Quick start

```tsx
import { A } from "@emailux/a";

export default function EmailTemplate() {
  return <>
      <A href='#' color='blue'>Docs</A>
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | any | No |  |  |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction for the wrapper cell                |
| color | string | No |  | Hex color |
| noDecoration | boolean | No | false |  |
| style | React.CSSProperties | No | |  |
| rel | string | No |'noopener noreferrer' |  |
| spacing | string               | No       | - | Spacing bottom, and the anchor tag will be a block component if set |


## License

MIT © iClasser
