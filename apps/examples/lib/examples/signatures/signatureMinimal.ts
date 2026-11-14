import * as React from "react";
import SignatureMinimalEmail from "./jsx/SignatureMinimalEmail";
import { getHtml, getText } from "@emailux/components";

const component = React.createElement(SignatureMinimalEmail);
const htmlContent = getHtml(component).html || "";
const textContent = getText(component).text || "";

const jsxCode = `import {
  Html,
  Head,
  Css,
  Body,
  Text,
  A,
} from "@emailux/components";

const SignatureMinimalEmail = () => (
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
      previewText="Minimal email signature example"
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
      <Text spacing="16px">Sounds good. Talk Monday.</Text>
      <Text spacing="0px" fontWeight="700" color="#0f172a">Jordan Lee</Text>
      <Text spacing="0px" fontSize="13px" color="#64748b">Product Designer, Acme Corp</Text>
      <Text spacing="0px" fontSize="13px"><A href="https://example.com">acme.example</A> · <A href="https://example.com">LinkedIn</A></Text>
    </Body>
  </Html>
);

export default SignatureMinimalEmail;
`;

const signatureMinimal = {
  id: "signature-minimal",
  name: "Minimal Signature",
  type: "signature",
  brand: "EmailUX",
  htmlContent,
  jsxCode,
  textContent,
};

export default signatureMinimal;
