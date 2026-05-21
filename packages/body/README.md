# @emailux/body

Body wrapper for your email layout.
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
pnpm add @emailux/body

# npm
npm install @emailux/body

# yarn
yarn add @emailux/body
```

## Quick start

```tsx
import { Body } from "@emailux/body";

export default function EmailTemplate() {
  return <Body>
    <title>Some title</title>
  </Body>;
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes      | —       | Content of the email document |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction                |
| background | string | Yes | — | — |
| backgroundColor | string | Yes | — | — |
| backgroundImageUrl | string | No | - | - |
| style | React.CSSProperties | No | - | - |
| width | number or "100%" | No | — | width of container |
| padding | string | No | `12px 20px` | inner padding |
| outerBgColor | string | No | — | When whidth is not `100%` and a number, you can set this value as Hex color value to set the left and right side of the section background color, not the inside |
| borderRadius | string | No |  |  |
| footer | React.ReactNode | No |  |  |
| footerWidth | number or "100%" | No | — | width of footer |
| footerPadding | string | No | `0px 20p` | footer padding |
| footerOuterBgColor | string | No | — | |
| footerBackgroundColor | string | No | — | |
| footerStyle | React.CSSProperties | No | - | - |
| backgroundPosition | string | no | "bottom" |  when there is background image url this is css property for position |
| backgroundRepeat | string | no | "no-repeat, no-repeat" | when there is background image url this is css property for repeat |
| bgImageTakesAllWrappers | string | no | false | when there is background image url takes all if width is not 100%, but with 100% it already takes all  |
| borderWidth | number | No | — | border width |
| borderColor | string | No | — | Border will work if border width is greater than 0 |
| openCounter | boolean | No | `true` | When enabled, appends `<custom type="tracking"/>` at the end of the body content. This tag has no visual effect on the rendered email. |

All other standard attributes for the `<body>` element are supported.

## Open counter tracking

By default, `Body` appends a `<custom type="tracking"/>` tag as the last element inside `<body>`. This tag does not affect how the email looks in inboxes and is intended for open-counter tracking in downstream email pipelines.

```tsx
// Tracking tag is included by default
<Body>...</Body>

// Disable the tracking tag
<Body openCounter={false}>...</Body>
```

## License

MIT © iClasser
