# @emailux/html

HTML root wrapper for your email documents.
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
pnpm add @emailux/html

# npm
npm install @emailux/html

# yarn
yarn add @emailux/html
```

## Quick start

```tsx
import { Html } from "@emailux/html";

export default function Email() {
  return <Html>Hello</Html>;
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | any        | Yes      | —       | Content of the email document       |
| dir      | "ltr" \| "rtl"          | No       | "ltr"   | Text direction for the document, it will affect all components     |
| lang     | string                 | No       | "en"    | Language of the document            |
| defaultSpacing     | string one value in css    | No       | "20px"    | This will set the whole email default spacing (padding bottom defaults)            |

All other standard HTML attributes for the `<html>` element are supported.

## License

MIT © iClasser
