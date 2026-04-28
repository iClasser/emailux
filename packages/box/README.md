# @emailux/box

Wrapper Box component for your email layout.
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
pnpm add @emailux/box

# npm
npm install @emailux/box

# yarn
yarn add @emailux/box
```

## Quick start

```tsx
import { Box } from "@emailux/box";

export default function EmailTemplate() {
  return <>
      <Box 
        width='120px' 
        padding='10px 16px'
        center 
        borderRadius='10px'
        backgroundColor='#fff' 
        spacing='20px'
        backgroundImageUrl='https://example.com/image.png'
        >
          <Text>
      </Box>
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes      | —       | Content of the email document |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction                |
| backgroundColor | string | Yes | — | — |
| style | React.CSSProperties | No | - | - |
| width | number or "100%" | No | — | width of container |
| padding | string | No | `10px 16px` | inner padding |
| className | string | no | — | — |
| borderRadius | string | No |  |  |
| backgroundImageUrl | string | no | | Box background image |
| backgroundPosition | string | no | "bottom" |  when there is background image url this is css property for position |
| backgroundRepeat | string | no | "no-repeat, no-repeat" | when there is background image url this is css property for repeat |
| itemCenter | boolean | no | true | Inner items will be aligned center |
| center | boolean | no |  true | The box will be positioned center of email |
| borderWidth | number | No | — | border width |
| borderColor | string | No | — | Border will work if border width is greater than 0 |


## License

MIT © iClasser
