import * as React from "react";
import SignatureCorporateEmail from "./jsx/SignatureCorporateEmail";
import { getHtml, getText } from "@emailux/components";

const component = React.createElement(SignatureCorporateEmail);
const htmlContent = getHtml(component).html || "";
const textContent = getText(component).text || "";

const jsxCode = `import {
  Html,
  Head,
  Css,
  Body,
  Text,
  A,
  Table,
} from "@emailux/components";

const { Row, Col } = Table;

const SignatureCorporateEmail = () => (
  <Html>
    <Head>
      <Css
        selector={["body"]}
        style={{
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontSize: "16px",
          lineHeight: "24px",
          color: "#334155",
        }}
      />
      <Css
        selector={["a"]}
        style={{ color: "#00AAAB", fontWeight: "bold", textDecoration: "none" }}
      />
    </Head>
    <Body
      width={600}
      padding="40px 40px"
      borderRadius="12px"
      outerBgColor="#f1f5f9"
      spacingTop="40px"
      spacingBottom="40px"
      backgroundColor="#ffffff"
      previewText="Corporate email signature example"
      footer={
        <Text color="#94a3b8" fontSize="12px" center>
          Example email signatures built with @emailux/components.
        </Text>
      }
      footerStyle={{ paddingTop: "24px" }}
    >
      <Text color="#00AAAB" fontSize="22px" fontWeight="700" spacing="24px">
        EmailUX
      </Text>
      <Text spacing="16px">Thanks for the update. I'll review the draft today.</Text>
      <Table padding="0px">
        <Row>
          <Col width="4px" backgroundColor="#00AAAB"><Text plain>&nbsp;</Text></Col>
          <Col valign="top">
            <Text spacing="0px" fontWeight="700" fontSize="16px" color="#0f172a">Alex Morgan</Text>
            <Text spacing="0px" fontSize="13px" color="#64748b">Head of Partnerships · Acme Corp</Text>
            <Text spacing="0px" fontSize="13px" color="#334155">T +1 415 555 0142 · <A href="mailto:alex@acme.example">alex@acme.example</A></Text>
            <Text spacing="0px" fontSize="13px" color="#334155"><A href="https://example.com">acme.example</A> · 500 Market Street, San Francisco, CA</Text>
          </Col>
        </Row>
      </Table>
    </Body>
  </Html>
);

export default SignatureCorporateEmail;
`;

const signatureCorporate = {
  id: "signature-corporate",
  name: "Corporate Signature",
  type: "signature",
  brand: "EmailUX",
  htmlContent,
  jsxCode,
  textContent,
};

export default signatureCorporate;
