# @emailux/card

Card component for email.
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
pnpm add @emailux/card

# npm
npm install @emailux/card

# yarn
yarn add @emailux/card
```

## Quick start

```tsx
import { Text } from "@emailux/components";
import { Card } from "@emailux/card";

export default function EmailTemplate() {
  return <>
      <Card 
        header={<Text>Some header</Text>}
        content={<Text>Some content</Text>}
        footer={<Text>Some footer</Text>}
        headerBackgroundColor='#fff'
        contentBackgroundColor='#fff'
        footerBackgroundColor='#fff'
        borderRadius='24px' 
        padding='12px 15px'
        width='100%'
        spacing='20px' 
     />
  </>
}
```

## Props

| Name     | Type            | Required | Default | Description |
| -------- | --------------- | -------- | ------- | ----------- |
| header | React.ReactNode | No      | —       |  |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction                |
| spacing | string               | No       | Comes from wrapping `Html` component's `defaultSpacing` context prop which is `20px`       | Spacing bottom, by default comes from `Html` defaultSpacing prop |
| content | React.ReactNode | No      | —       |  |
| footer | React.ReactNode | No      | —       |  |
| headerBackgroundColor | string | No | #fff | — |
| contentBackgroundColor | string | No | #fff | — |
| footerBackgroundColor | string | No | #fff | — |
| borderRadius | string | No | `24px` | — |
| padding | string | No | `` | inner padding |
| width | string | No | `100%` |  |
| headerCenter | boolean | No | undefined |  |
| contentCenter | boolean | No | undefined |  |
| footerCenter | boolean | No | undefined |  |


## License

MIT © iClasser
