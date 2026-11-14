import * as React from "react";
import MeridianNewsletterEmail from "./jsx/MeridianNewsletterEmail";
import { getHtml, getText } from "@emailux/components";

const component = React.createElement(MeridianNewsletterEmail);
const htmlContent = getHtml(component).html || "";
const textContent = getText(component).text || "";

const jsxCode = `import {
  Html,
  Head,
  Css,
  Body,
  Text,
  A,
  Hr,
} from "@emailux/components";

const MeridianNewsletterEmail = () => (
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
        style={{ color: "#0f766e", fontWeight: "bold", textDecoration: "none" }}
      />
    </Head>
    <Body
      width={600}
      padding="40px 40px"
      borderRadius="12px"
      outerBgColor="#ccfbf1"
      spacingTop="40px"
      spacingBottom="40px"
      backgroundColor="#ffffff"
      previewText="Five ideas worth your time this week"
      footer={
        <Text color="#94a3b8" fontSize="12px" center>
          Meridian Media, 44 Canal Road, Austin, TX 78701. You are receiving this because you subscribed. Unsubscribe anytime.
        </Text>
      }
      footerStyle={{ paddingTop: "24px" }}
    >
      <Text color="#0f766e" fontSize="22px" fontWeight="700" spacing="24px">
        Meridian
      </Text>
      <Text fontSize="24px" fontWeight="700" color="#134e4a" spacing="8px">Five ideas worth your time</Text>
      <Text color="#64748b">The Meridian Weekly · Issue 42</Text>
      <Hr />
      <Text fontWeight="700" color="#134e4a" spacing="4px">1. Why small teams ship faster</Text>
      <Text spacing="16px">Fewer meetings, shorter feedback loops, and a clear owner for every decision. <A href="https://example.com">Read more</A></Text>
      <Text fontWeight="700" color="#134e4a" spacing="4px">2. The case for plain-text notes</Text>
      <Text spacing="16px">Why your future self will thank you for boring formats. <A href="https://example.com">Read more</A></Text>
      <Text fontWeight="700" color="#134e4a" spacing="4px">3. A better way to run a weekly review</Text>
      <Text>A 20-minute template you can steal. <A href="https://example.com">Read more</A></Text>
    </Body>
  </Html>
);

export default MeridianNewsletterEmail;
`;

const meridianNewsletter = {
  id: "meridian-newsletter",
  name: "Weekly Newsletter",
  type: "newsletter",
  brand: "Meridian",
  htmlContent,
  jsxCode,
  textContent,
};

export default meridianNewsletter;
