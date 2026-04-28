### @emailux/get-html

Helper function to convert Email components to text only.
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
pnpm add @emailux/get-html

# npm
npm install @emailux/get-html

# yarn
yarn add @emailux/get-html
```

- Signature: `(EmailTemplate: any) => {html: string | null, error: Error | null}`
- Description: Renders a valid React element to a static HTML string using `renderToStaticMarkup`. Returns `{ html, error: null }` on success or `{ html: null, error }` on failure. Validates input with `React.isValidElement`.
- Example:

```tsx
import { getHtml } from "@emailux/get-html";
import { Html, Head, Body, Text, Button } from "@emailuxcomponents";

function EmailTemplate() {
  return (<Html>
    <Body>
        <Text>Hello</Text>
        <Button text='Button' url='#' />
    </Body>
  </Html>)
}

const { html, error } = getHtml(<EmailTemplate />);
if (error) {
  // handle error
} else if (html) {
  // use html
}
```

- Requirements:
  - Node >= 18
  - React 18 or 19
