import {
  Html,
  Head,
  Css,
  Body,
  Text,
  Box,
  Button,
} from "@emailux/components";

const NorthwindCartEmail = () => (
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
      previewText="You left something behind"
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
      <Text fontSize="20px" fontWeight="700" color="#1c1917" spacing="8px">Still thinking it over?</Text>
      <Text>Your cart is saved. Come back in the next 24 hours and take 10% off with the code below.</Text>
      <Box borderRadius="12px" padding="16px" backgroundColor="#fffbeb">
        <Text center spacing="0px" fontFamily="monospace" fontSize="24px" letterSpacing="6px" fontWeight="700" color="#b45309">COMEBACK10</Text>
      </Box>
      <Text color="#64748b" fontSize="14px">Wool throw blanket — $72.00</Text>
      <Button
        align="left"
        style={{ backgroundColor: "#b45309", border: "none", fontSize: "14px", color: "#fff", fontWeight: "bold", padding: "6px 18px" }}
        text="Return to cart"
        href="https://example.com"
      />
    </Body>
  </Html>
);

export default NorthwindCartEmail;
