# @emailux/ol

Ordered list component for emails.
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
pnpm add @emailux/ol

# npm
npm install @emailux/ol

# yarn
yarn add @emailux/ol
```

## Quick start

```tsx
import { Ol } from "@emailux/ol";

export default function EmailTemplate() {
  return <>
      <Ol spacing='20px' fontSize='14px' >
          ....
      </Ol>
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes      | —       | Content of the email document |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction for the wrapper cell                |
| spacing | string               | No       | Comes from wrapping `Html` component's `defaultSpacing` context prop which is `20px`       | Spacing bottom, by default comes from `Html` defaultSpacing prop |
| color | string | No      | —       | `#000` |
| fontSize | string | No      | —       |  |
| lineHeight | string | No      | —       |  |
| fontWeight | string | No      | —       |  |
| className | string | No      | —       |  |
| plain | boolean | No      | false | Used when you don't want to use table or margin bottom just a paragraph without spacing |
| letterSpacing | string | No      | —       |  |
| paddingLeft | string | No      | `20px`       |  |


All other standard attributes for the `<ul>` element are supported.

## License

MIT © iClasser
