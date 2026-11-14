import {
  Html,
  Head,
  Css,
  Body,
  Text,
  A,
  Box,
} from "@emailux/components";

const SignatureBannerEmail = () => (
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
      previewText="Email signature with promo banner"
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
      <Text spacing="16px">Attached is the proposal we discussed.</Text>
      <Text spacing="0px" fontWeight="700" color="#0f172a">Priya Shah</Text>
      <Text spacing="0px" fontSize="13px" color="#64748b">Sales Director · Acme Corp</Text>
      <Text spacing="16px" fontSize="13px">M +1 212 555 0198 · <A href="mailto:priya@acme.example">priya@acme.example</A></Text>
      <Box borderRadius="8px" padding="12px" backgroundColor="#00AAAB">
        <Text center spacing="0px" fontSize="14px" color="#ffffff" fontWeight="700">Join our webinar: Email at scale — April 22</Text>
      </Box>
    </Body>
  </Html>
);

export default SignatureBannerEmail;
