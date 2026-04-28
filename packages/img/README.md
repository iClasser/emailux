# @emailux/img
Image component for email.
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
pnpm add @emailux/img

# npm
npm install @emailux/img

# yarn
yarn add @emailux/img
```

## Quick start

```tsx
import { Img } from "@emailux/img";

export default function Email() {
  return <Img src="cat.jpg" alt="Cat" width={300} height={300} />;
}
```

## Alignment & styling

```tsx
<Img
  src="banner.png"
  alt="Banner"
  width={600}
  center
  direction="ltr"
  borderRadius="8px"
  spacing="20px"
/>
```

## Props

| Name         | Type                 | Required | Default | Description                                        |
| ------------ | -------------------- | -------- | ------- | -------------------------------------------------- |
| src          | string               | Yes      | ""      | Path or URL to the image                           |
| alt          | string               | No       | "image"      | Alternate description for the image                |
| width        | number \| string     | No       | —       | Image width. Numbers are treated as px in style    |
| height       | number \| string     | No       | —       | Image height. Numbers are treated as px in style   |
| center       | boolean              | No       | false   | Centers the image within the table cell            |
| borderRadius | string               | No       | —       | Applied as CSS border-radius on the image          |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Direction                |
| spacing | string               | No       | Comes from wrapping `Html` component's `defaultSpacing` context prop which is `20px`       | Spacing bottom, by default comes from `Html` defaultSpacing prop |
| padding | string               | No       | —       | Custom padding for container cell; overrides default bottom spacing. In plain mode, applied to the image style. |
| style | React.CSSProperties               | No       | —       |  |
| plain       | boolean              | No       | false   | Returns plain image without container and spacing            |
| href | string | No | - | If you want to convert the image to be clickable |
| maxHeight       | number \| string     | No       | —       |   |
| maxWidth       | number \| string     | No       | —       |   |

## License

MIT © iClasser


