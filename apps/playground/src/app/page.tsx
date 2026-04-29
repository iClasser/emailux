"use client";
import { Fragment, useState, useEffect } from "react";
import {
  Html,
  Head,
  Font,
  Body,
  Img,
  Text,
  Card,
  Button,
  getHtml,
  getText,
  Hr,
  Table,
} from "@emailux/components";
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/plugins/html';
import StripeWelcomeEmail from "../templates/Stripe";

const pretifyHtml = async (str: string) => {
  if (!str) return '';
  console.log('str', str);
  return prettier.format(str, { parser: 'html', plugins: [parserHtml] }).then(res => res.trim());
}
const EmailTemplate = () => {
  return (<Html>
    <Head>
      <Font
        family="Inter"
        url="https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhiJ-Ek-_EeAmM.woff2"
        format="woff2"
        fallback="Arial"
        style="normal"
        weight="400"
        targetClasses={[]}
        targetTags={["html", "body", "button"]}
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
        src="https://d2b7lfzqawhc0u.cloudfront.net/emailux/logo/email_ux_black.png"
        alt="EmailUX Logo"
        width={170}
        height={30}
      />
      <Text fontSize="14px" fontWeight="400" fontFamily="Inter, Arial, sans-serif" textColor="#000" style={{}} center={false}>
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
            <Text textColor="white" fontSize="20px" fontWeight="600" fontFamily="Inter, Arial, sans-serif" style={{}} center={false}>
              EmailUX
            </Text>
          </Fragment>
        }
        headerBackgroundColor="#000"
        content={<Text style={{}} center={false} fontSize="14px" fontWeight="400" fontFamily="Inter, Arial, sans-serif">Welcome to EmailUX!</Text>}
        borderRadius="24px"
        padding="12px 15px"
        width="100%"
      />

      <Table border padding="10px">
        <Table.Row align="left" valign="middle">
          <Table.Col>Cell 1</Table.Col>
          <Table.Col>Cell 2</Table.Col>
        </Table.Row>
        <Table.Row>
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
  </Html>);
}


export default function Page() {
  const [htmlString, setHtmlString] = useState<string | null>('');
  const Component = <StripeWelcomeEmail />;
  const downloadHtml = () => {
    const html = htmlString ?? '';
    if (html) {
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'email.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  useEffect(() => {
    const { html } = getHtml(
      Component
    );
    if (html) {
      pretifyHtml(html).then(res => setHtmlString(res));
    }
  }, [Component]);

  

  return (
    <main style={{ padding: 24 }}>
      <h1>EmailUX Email Playground</h1>
      <p>Preview your email components:</p>
      <div>
        <button onClick={downloadHtml}>Downlaod</button>
      </div>
      <iframe
        style={{ width: "100%", height: "500px" }}
          srcDoc={htmlString ?? ''}
          title="email-preview"
      />

      <textarea
        style={{ width: "100%", height: "100px", marginTop: 24, fontSize: 12, fontFamily: 'monospace', padding: 12 }}
        value={htmlString || ''}
      />

      {/* write jsx from jsx code */}

      <pre>
        <code>{getText(Component).text ?? ''}</code>
      </pre>
    </main>
  );
}
