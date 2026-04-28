import * as React from "react";
import StripeOtpEmail from "./jsx/StripeOtpEmail";
import { getHtml, getText } from '@emailux/components'
const component = React.createElement(StripeOtpEmail);
const htmlContent = getHtml(component).html || "";
const textContent = getText(component).text || "";


const jsxCode = `import {
  Html,
  Head,
  Css,
  Body,
  Img,
  Text,
  Box,
} from "@emailux/components";

const StripeOtpEmail = () => (
  <Html>
    <Head>
      <Css
        selector={["body"]}
        style={{
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
          fontSize: "16px",
          lineHeight: "24px",
          color: "#414552",
        }}
      />
      <Css
        selector={["a"]}
        style={{
          color: "#625afa",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      />
    </Head>
    <Body
      width={600}
      padding="64px 49px"
      borderRadius="16px"
      outerBgColor="#f6f9fc"
      spacingTop="64px"
      spacingBottom="64px"
      footer={
        <>
          <Text color="#687385" fontSize="12px" center>
            Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
          </Text>
          <Text color="#687385" spacing="0px" fontSize="12px" center>
            Need to refer to this message? Use this ID: em_rj
          </Text>
        </>
      }
      footerStyle={{
        paddingTop: "32px",
      }}
      backgroundColor="#fff"
      previewText="You're now ready to make live transactions with Stripe!"
    >
      <Img
        src="https://d2b7lfzqawhc0u.cloudfront.net/platform/exampes/stripe/stripe.png"
        width={70}
        height={29}
        spacing="32px"
        alt="Stripe"
      />
      <Text>Verify your email address</Text>

      <Text>
        Please use the verification code below to confirm your email address:
      </Text>

      <Box borderRadius="16px" padding="16px" backgroundColor="#f6f9fc">
        <Text
          color="#635bff"
          fontWeight="700"
          fontSize="32px"
          spacing="0px"
          letterSpacing="8px"
          center
          fontFamily="monospace"
        >
          EMAILUX
        </Text>
      </Box>

      <Text>This code will expire in 10 minutes.</Text>

      <Text>
        If you didn't request this code, you can safely ignore this email.
      </Text>
    </Body>
  </Html>
);

export default StripeOtpEmail;
`;

const stripeOtp = {
    id: "stripe-otp",
    name: "OTP Email",
    type: "otp",
    brand: "Stripe",
    htmlContent: htmlContent,
    jsxCode: jsxCode,
    textContent: textContent,
}

export default stripeOtp;