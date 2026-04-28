# @emailux/badge

Badge component for email.
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
pnpm add @emailux/badge

# npm
npm install @emailux/badge

# yarn
yarn add @emailux/badge
```

## Quick start

```tsx
import { Badge } from "@emailux/badge";

export default function EmailTemplate() {
  return <>
      <Badge varient='default'>
        <span>Text</span>
     </Badge>
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | string | Yes      | —       | - |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction for the wrapper cell                |
| spacing | string               | No       | Comes from wrapping `Html` component's `defaultSpacing` context prop which is `20px`       | Spacing bottom, by default comes from `Html` defaultSpacing prop |
| varient | string | No | `default` | — |
| padding | string | No | `6px 8px` | inside padding |
| noPadding | boolean | No | false | — |


## License

MIT © iClasser
