# @emailux/button
Button component for email.
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
pnpm add @emailux/button

# npm
npm install @emailux/button

# yarn
yarn add @emailux/button
```

## Quick start

```tsx
import { Button } from "@emailux/button";

<Button
 text='Submit'
 href='https://example.com'
 backgroundColor='#000'
 textColor='#ffff'
 borderRadius='20px'
 style={{
  paddingBottom: '20px'
 }}
/>
```

## Props

| Name         | Type                 | Required | Default | Description                                        |
| ------------ | -------------------- | -------- | ------- | -------------------------------------------------- |
| src          | string               | Yes      | ""      | Path or URL to the image                           |
| text          | string               | Yes       | ""      |                |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction                |
| spacing | string               | No       | Comes from wrapping `Html` component's `defaultSpacing` context prop which is `20px`       | Spacing bottom, by default comes from `Html` defaultSpacing prop |
| href          | string               | Yes       | ""      |                |
| icon          | object               | No       |       |   { url, alt, width, height }             |
| backgroundColor          | string               | Yes       | ""      |                |
| align          | string               | No       | "center"      |                |
| direction          | string               | No       | "ltr"      |                |
| textColor          | string               | No       |       |   css color hex             |
| borderRadius          | string               | No       |       |              |
| style          | string               | No       |       |  CSS style            |
| borderWidth          | string               | No       |       |  CSS border width            |
| borderColor          | string               | No       |       |  CSS border color            |


## License

MIT © iClasser


