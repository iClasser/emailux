# @emailux/head

Head wrapper for your email documents.
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
pnpm add  @emailux/head

# npm
npm install  @emailux/head

# yarn
yarn add  @emailux/head
```

## Quick start

```tsx
import { Head } from " @emailux/head";

export default function EmailTemplate() {
  return <Head>
    <title>Some title</title>
  </Head>;
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | React.ReactNode        | Yes      | —       | Content of the email document       |
| title | React.ReactNode        | No      | —       | Title       |
| defaultCss | string        | No      | Pre-written CSS for email       | You can replace this with your own css       |


All other standard Head attributes for the `<head>` element are supported.

## License

MIT © iClasser
