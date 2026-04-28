# @emailux/body-contents

Wrapper for your email layout.
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
pnpm add @emailux/body-contents

# npm
npm install @emailux/body-contents

# yarn
yarn add @emailux/body-contents
```

## Quick start

```tsx
import { BodyContent } from "@emailux/body-contents";

export default function EmailTemplate() {
  return <>
      <BodyContent>
          <title>Header</title>
      </BodyContent>

      <BodyContent>
          <title>Body</title>
      </BodyContent>

      <BodyContent>
          <title>Footer</title>
      </BodyContent>
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes      | —       | Content of the email document |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction                |
| background | string | Yes | — | — |
| backgroundColor | string | Yes | — | — |
| style | React.CSSProperties | No | - | - |
| width | number or "100%" | No | — | width of container |
| padding | string | No | `12px 20px` | inner padding |
| outerBgColor | string | No | — | When whidth is not `100%` and a number, you can set this value as Hex color value to set the left and right side of the section background color, not the inside |
| borderRadius | string | No |  |  |
| className | string | no | — | — |
| backgroundPosition | string | no | "bottom" |  when there is background image url this is css property for position |
| backgroundRepeat | string | no | "no-repeat, no-repeat" | when there is background image url this is css property for repeat |
| bgImageTakesAllWrappers | string | no | false | when there is background image url takes all if width is not 100%, but with 100% it already takes all  |
| borderWidth | number | No | — | border width |
| borderColor | string | No | — | Border will work if border width is greater than 0 |


## License

MIT © iClasser
