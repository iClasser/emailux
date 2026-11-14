import {
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

const FieldnoteTrialEmail = () => (
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
      previewText="Your trial ends in 3 days"
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
      <Text fontSize="20px" fontWeight="700" color="#0f172a" spacing="8px">Your trial ends in 3 days</Text>
      <Text>Here's what you set up so far. Pick a plan to keep everything.</Text>
      <Box borderRadius="12px" padding="20px" backgroundColor="#eef2ff">
      <Table padding="4px 0px">
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Projects created</Text></Col>
          <Col width="40%" align="right"><Text plain color="#312e81" fontWeight="600">12</Text></Col>
        </Row>
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Teammates invited</Text></Col>
          <Col width="40%" align="right"><Text plain color="#312e81" fontWeight="600">5</Text></Col>
        </Row>
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Notes captured</Text></Col>
          <Col width="40%" align="right"><Text plain color="#312e81" fontWeight="600">148</Text></Col>
        </Row>
      </Table>
      </Box>
      <Button
        align="left"
        style={{ backgroundColor: "#4f46e5", border: "none", fontSize: "14px", color: "#fff", fontWeight: "bold", padding: "6px 18px" }}
        text="Choose a plan"
        href="https://example.com"
      />
    </Body>
  </Html>
);

export default FieldnoteTrialEmail;
