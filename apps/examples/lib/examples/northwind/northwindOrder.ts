import * as React from "react";
import NorthwindOrderEmail from "./jsx/NorthwindOrderEmail";
import { getHtml, getText } from "@emailux/components";

const component = React.createElement(NorthwindOrderEmail);
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

const NorthwindOrderEmail = () => (
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
        style={{ color: "#b45309", fontWeight: "bold", textDecoration: "none" }}
      />
    </Head>
    <Body
      width={600}
      padding="40px 40px"
      borderRadius="12px"
      outerBgColor="#fef3c7"
      spacingTop="40px"
      spacingBottom="40px"
      backgroundColor="#ffffff"
      previewText="Thanks for your order #NW-20481"
      footer={
        <Text color="#94a3b8" fontSize="12px" center>
          Northwind Market, 120 Harbor Street, Portland, OR 97204. This is a demo email.
        </Text>
      }
      footerStyle={{ paddingTop: "24px" }}
    >
      <Text color="#b45309" fontSize="22px" fontWeight="700" spacing="24px">
        Northwind Market
      </Text>
      <Text fontSize="20px" fontWeight="700" color="#1c1917" spacing="8px">Thanks for your order, Maya</Text>
      <Text>We're getting order #NW-20481 ready. You'll get another email when it ships.</Text>
      <Box borderRadius="12px" padding="20px" backgroundColor="#fffbeb">
      <Table padding="4px 0px">
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Ceramic pour-over set × 1</Text></Col>
          <Col width="40%" align="right"><Text plain color="#1c1917" fontWeight="600">$48.00</Text></Col>
        </Row>
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Wool throw blanket × 1</Text></Col>
          <Col width="40%" align="right"><Text plain color="#1c1917" fontWeight="600">$72.00</Text></Col>
        </Row>
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Shipping</Text></Col>
          <Col width="40%" align="right"><Text plain color="#1c1917" fontWeight="600">$6.00</Text></Col>
        </Row>
        <Row>
          <Col width="60%"><Text spacing="0px" color="#64748b">Total</Text></Col>
          <Col width="40%" align="right"><Text plain color="#1c1917" fontWeight="600">$126.00</Text></Col>
        </Row>
      </Table>
      </Box>
      <Text spacing="8px" color="#64748b" fontSize="14px">Ship to: 88 Alder Lane, Seattle, WA 98101</Text>
      <Button
        align="left"
        style={{ backgroundColor: "#b45309", border: "none", fontSize: "14px", color: "#fff", fontWeight: "bold", padding: "6px 18px" }}
        text="View your order"
        href="https://example.com"
      />
    </Body>
  </Html>
);

export default NorthwindOrderEmail;
`;

const northwindOrder = {
  id: "northwind-order",
  name: "Order Confirmation",
  type: "order-confirmation",
  brand: "Northwind Market",
  htmlContent,
  jsxCode,
  textContent,
};

export default northwindOrder;
