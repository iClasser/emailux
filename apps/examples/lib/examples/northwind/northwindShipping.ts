import * as React from "react";
import NorthwindShippingEmail from "./jsx/NorthwindShippingEmail";
import { getHtml, getText } from "@emailux/components";

const component = React.createElement(NorthwindShippingEmail);
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
  A,
} from "@emailux/components";

const NorthwindShippingEmail = () => (
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
      previewText="Your order is on the way"
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
      <Text fontSize="20px" fontWeight="700" color="#1c1917" spacing="8px">Your order is on the way</Text>
      <Text>Order #NW-20481 shipped today with UPS and should arrive by <A href="https://example.com">Thursday, March 12</A>.</Text>
      <Box borderRadius="12px" padding="16px" backgroundColor="#fffbeb">
        <Text spacing="0px" color="#64748b" fontSize="13px">Tracking number</Text>
        <Text spacing="0px" fontFamily="monospace" fontWeight="700" color="#1c1917">1Z999AA10123456784</Text>
      </Box>
      <Button
        align="left"
        style={{ backgroundColor: "#b45309", border: "none", fontSize: "14px", color: "#fff", fontWeight: "bold", padding: "6px 18px" }}
        text="Track package"
        href="https://example.com"
      />
    </Body>
  </Html>
);

export default NorthwindShippingEmail;
`;

const northwindShipping = {
  id: "northwind-shipping",
  name: "Shipping Update",
  type: "shipping",
  brand: "Northwind Market",
  htmlContent,
  jsxCode,
  textContent,
};

export default northwindShipping;
