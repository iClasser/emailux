import * as React from "react";
import FieldnoteInviteEmail from "./jsx/FieldnoteInviteEmail";
import { getHtml, getText } from "@emailux/components";

const component = React.createElement(FieldnoteInviteEmail);
const htmlContent = getHtml(component).html || "";
const textContent = getText(component).text || "";

const jsxCode = `import {
  Html,
  Head,
  Css,
  Body,
  Text,
  Button,
  A,
} from "@emailux/components";

const FieldnoteInviteEmail = () => (
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
        style={{ color: "#4f46e5", fontWeight: "bold", textDecoration: "none" }}
      />
    </Head>
    <Body
      width={600}
      padding="40px 40px"
      borderRadius="12px"
      outerBgColor="#eef2ff"
      spacingTop="40px"
      spacingBottom="40px"
      backgroundColor="#ffffff"
      previewText="Sam invited you to Acme Design on Fieldnote"
      footer={
        <Text color="#94a3b8" fontSize="12px" center>
          Fieldnote Inc., 500 Market Street, San Francisco, CA 94105. This is a demo email.
        </Text>
      }
      footerStyle={{ paddingTop: "24px" }}
    >
      <Text color="#4f46e5" fontSize="22px" fontWeight="700" spacing="24px">
        Fieldnote
      </Text>
      <Text fontSize="20px" fontWeight="700" color="#0f172a" spacing="8px">Join Acme Design on Fieldnote</Text>
      <Text>Sam Rivera invited you to collaborate as an <A href="https://example.com">Editor</A>. Accept within 7 days to keep your spot.</Text>
      <Button
        align="left"
        style={{ backgroundColor: "#4f46e5", border: "none", fontSize: "14px", color: "#fff", fontWeight: "bold", padding: "6px 18px" }}
        text="Accept invitation"
        href="https://example.com"
      />
      <Text color="#64748b" fontSize="14px">If you weren't expecting this invite, you can ignore this email.</Text>
    </Body>
  </Html>
);

export default FieldnoteInviteEmail;
`;

const fieldnoteInvite = {
  id: "fieldnote-invite",
  name: "Team Invite",
  type: "team-invite",
  brand: "Fieldnote",
  htmlContent,
  jsxCode,
  textContent,
};

export default fieldnoteInvite;
