# @emailux/font

Font component used inside <Head> tag.
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
pnpm add @emailux/font

# npm
npm install @emailux/font

# yarn
yarn add @emailux/font
```

## Quick start

```tsx
import { Font } from "@emailux/font";

export default function EmailTemplate() {
  return <Font 
            family='Inter'
            url='https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhiJ-Ek-_EeAmM.woff2'
            type='woff2'
            fallback='Arial'
            style='normal'
            weight='400'
            targetSelectors={['body', '.class1']}
          />
}
```

## Props

| Name     | Type                   | Required | Default | Description                         |
| -------- | ---------------------- | -------- | ------- | ----------------------------------- |
| children | React.ReactNode        | Yes      | —       | Content of the email document       |
| family | String        | Yes      | —       | -       |
| url | String        | Yes      | —       | -       |
| type | String        | Yes      | —       | "woff2" or "woff"       |
| style | String        | Yes      | —       | -       |
| weight | String        | Yes      | —       | 400       |
| targetSelectors | Array of css selector strings        | No      | —       |        |

All other standard Head attributes for the `<head>` element are supported.

## License

MIT © iClasser
