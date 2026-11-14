import * as React from "react";
import MeridianEventEmail from "./jsx/MeridianEventEmail";
import { getHtml, getText } from "@emailux/components";

const component = React.createElement(MeridianEventEmail);
const htmlContent = getHtml(component).html || "";
const textContent = getText(component).text || "";

const jsxCode = `import {
  Html,
  Head,
  Css,
  Body,
  Text,
  Box,
  Button,
  Table,
} from "@emailux/components";

const { Row, Col } = Table;

const MeridianEventEmail = () => (
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
      previewText="You're invited: Meridian Live"
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
      <Text fontSize="24px" fontWeight="700" color="#134e4a" spacing="8px">You're invited to Meridian Live</Text>
      <Text>A one-day event on building products people love.</Text>
      <Box borderRadius="12px" padding="20px" backgroundColor="#f0fdfa">
      <Table padding="4px 0px">
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Date</Text></Col>
          <Col width="40%" align="right"><Text plain color="#134e4a" fontWeight="600">Thursday, May 14</Text></Col>
        </Row>
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Time</Text></Col>
          <Col width="40%" align="right"><Text plain color="#134e4a" fontWeight="600">9:00 AM – 5:00 PM</Text></Col>
        </Row>
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Location</Text></Col>
          <Col width="40%" align="right"><Text plain color="#134e4a" fontWeight="600">The Foundry, Austin TX</Text></Col>
        </Row>
      </Table>
      </Box>
      <Button
        align="left"
        style={{ backgroundColor: "#0f766e", border: "none", fontSize: "14px", color: "#fff", fontWeight: "bold", padding: "6px 18px" }}
        text="Reserve your seat"
        href="https://example.com"
      />
    </Body>
  </Html>
);

export default MeridianEventEmail;
`;

const meridianEvent = {
  id: "meridian-event",
  name: "Event Invitation",
  type: "event-invite",
  brand: "Meridian",
  htmlContent,
  jsxCode,
  textContent,
};

export default meridianEvent;
