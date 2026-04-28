# @emailux/css

Css component used inside <Head> tag.
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
pnpm add @emailux/css

# npm
npm install @emailux/css

# yarn
yarn add @emailux/css
```

## Quick start

```tsx
import { Html, Head } from "@emailux/components";
import { Css } from "@emailux/css";
// Can also be imported from "@emailux/components"
// import { Css } from "@emailux/components";

export default function EmailTemplate() {
  return <Html>
  <Head>
    <Css 
      selector={['body', '.inkdes-table']} 
      style={{ fontSize: '12px', lineHeight: '24px', color: '#000' }}
      />
  <Head>
</Html>
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | React.ReactNode        | Yes      | —       | Content of the email document       |
| style | React.CSSProperties        | Yes      | —       | -       |
| selector | Array of strings of css selectors        | No      | —       |        |

All other standard Head attributes for the `<css>` element are supported.

## License

MIT © iClasser
