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

const FieldnoteReportEmail = () => (
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
      previewText="Your week in Fieldnote"
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
      <Text fontSize="20px" fontWeight="700" color="#0f172a" spacing="8px">Your week in Fieldnote</Text>
      <Text>March 3 – March 9. Your team was busier than last week.</Text>
      <Table padding="0px" spacing="16px">
        <Row>
          <Col width="33%"><Box borderRadius="12px" padding="14px" backgroundColor="#eef2ff"><Text center spacing="0px" fontSize="28px" fontWeight="700" color="#4f46e5">148</Text><Text center spacing="0px" fontSize="12px" color="#64748b">Notes</Text></Box></Col>
          <Col width="33%"><Box borderRadius="12px" padding="14px" backgroundColor="#eef2ff"><Text center spacing="0px" fontSize="28px" fontWeight="700" color="#4f46e5">36</Text><Text center spacing="0px" fontSize="12px" color="#64748b">Comments</Text></Box></Col>
          <Col width="33%"><Box borderRadius="12px" padding="14px" backgroundColor="#eef2ff"><Text center spacing="0px" fontSize="28px" fontWeight="700" color="#4f46e5">9</Text><Text center spacing="0px" fontSize="12px" color="#64748b">Projects</Text></Box></Col>
        </Row>
      </Table>
      <Button
        align="left"
        style={{ backgroundColor: "#4f46e5", border: "none", fontSize: "14px", color: "#fff", fontWeight: "bold", padding: "6px 18px" }}
        text="Open dashboard"
        href="https://example.com"
      />
    </Body>
  </Html>
);

export default FieldnoteReportEmail;
