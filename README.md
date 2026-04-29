# Email UX
EmailUX react email components library. You can create emails with these components well tested for email compatibility.
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
pnpm add @emailux/components

# npm
npm install @emailux/components

# yarn
yarn add @emailux/components
```

## Quick start

```tsx
import { Html, Head, Font, Body, Img, Text, Card, Table, Button, getHtml } from "@emailux/components";

export default function EmailTemplate() {
  return <Html>
  <Head>
    <Font
      family="Inter"
      url="https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhiJ-Ek-_EeAmM.woff2"
      format="woff2"
      fallback="Arial"
      style="normal"
      weight="400"
      targetSelectors={['html', 'body', '.emailux-table']}
    />
    <title>Platform name</title>
  </Head>
  <Body
    previewText="Some preview pre-header text."
    width={376}
    padding="20px 20px"
    outerBgColor="#fff"
    backgroundColor="#f2f6f7"
  >
    <Img
      src="https://github.com/user-attachments/assets/8e885609-d2bb-46ab-a760-ae896757ff60"
      alt="Cat"
      width={48}
      height={48}
    />
    <Text fontSize="14px" fontWeight="400" color="#000">
      Hello from EmailUX!
    </Text>

    <Card
      header={
        <Fragment>
          <Img
            src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/chromium/chromium_48x48.png"
            alt="Cat"
            width={48}
            height={48}
            borderRadius="100%"
          />
          <Text textColor="white" fontSize="20px">
            EmailUX
          </Text>
        </Fragment>
      }
      headerBackgroundColor="#000"
      content={<Text>Welcome to EmailUX!</Text>}
      borderRadius="24px"
      padding="12px 15px"
      width="100%"
    />

    <Table border padding='10px'>
      <Table.Row align="left" valign="middle">
        <Table.Col>Cell 1</Table.Col>
        <Table.Col>Cell 2</Table.Col>
      </Table.Row>
      <Table.Row >
        <Table.Col>Cell 1</Table.Col>
        <Table.Col>Cell 2</Table.Col>
      </Table.Row>
    </Table>

    <Button
      align="center"
      href="https://emailux.com"
      text="Confirm"
      backgroundColor="#000"
      textColor="#fff"
    />
  </Body>
</Html>
}


const { html, error } = getHtml(<EmailTemplate />);
if (error) {
  // handle error
} else if (html) {
  // use html
}
```

## Components

 - <a href='https://github.com/iClasser/emailux/tree/release/packages/html'>Html</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/head'>Head</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/css'>Css</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/font'>Font</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/body'>Body</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/body-contents'>BodyContents</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/button'>Button</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/img'>Img</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/text'>Text</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/card'>Card</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/badge'>Badge</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/hr'>Hr</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/table'>Table</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/a'>A</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/ul'>Ul</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/ol'>Ol</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/li'>Li</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/box'>Box</a>

 # Helper
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/get-html'>getHtml</a>
 - <a href='https://github.com/iClasser/emailux/tree/release/packages/get-text'>getText</a>

## Support

This component was tested using the most popular email clients.

## License

MIT © iClasser


