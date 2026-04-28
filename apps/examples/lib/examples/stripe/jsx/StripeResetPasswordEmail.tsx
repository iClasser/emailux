import {
  Html,
  Head,
  Css,
  Body,
  Img,
  Text,
  A,
  Button,
  Hr,
} from "@emailux/components";

const buttonStyle = {
  backgroundColor: "#625afa",
  borderRadius: "5px",
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  padding: "10px",
};

const StripeResetPasswordEmail = () => (
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
      <Text>Hello,</Text>

      <Text>
        We received a request to reset the password for the Stripe account
        associated with{' '}
        <A href="#">example@example.com</A>.
      </Text>

      <Button
        align="left"
        style={buttonStyle}
        text="Reset your password"
        href="#"
      />
      <Hr />

      <Text>
        <strong>Platform:</strong>{' '}
        <Img
          src="https://d2b7lfzqawhc0u.cloudfront.net/platform/exampes/stripe/icon-display.png"
          width={24}
          height={24}
          plain
        />{' '}Chrome browser on macOS device
      </Text>
      <Text>
        <strong>Device location:</strong>{' '}San Jose, California, United States
        (1.1.1.1)
      </Text>
      <Text>
        <strong>Time:</strong>{' '}October 10, 2025 at 5:02:25 PM PDT
      </Text>

      <Hr />

      <Text>
        If you didn’t make this request, or if you’re having trouble signing in,{" "}
        <A href="#">ccontact us via our support site</A>. No changes have been
        made to your account.
      </Text>

      <Text>— The Stripe team</Text>
    </Body>
  </Html>
);

export default StripeResetPasswordEmail;
