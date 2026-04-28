import {
  Html,
  Head,
  Css,
  Body,
  Img,
  Text,
  Button,
  A,
  Hr,
  Box,
} from "@emailux/components";

const buttonStyle = {
  backgroundColor: "#625afa",
  borderRadius: "5px",
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  padding: "10px",
};

const StripeWelcomeEmail = () => (
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
        src='https://d2b7lfzqawhc0u.cloudfront.net/platform/exampes/stripe/stripe.png'
        width={70}
        height={29}
        spacing="32px"
        alt="Stripe"
      />
      <Text>
        Now that you’ve let us know how you want to use Stripe, we made a list
        of the tasks you need to complete to go live. To continue, view the
        setup guide in your Dashboard.
      </Text>
      <Box backgroundColor="#dedede" borderRadius="0px">
        <Text center spacing="0px" letterSpacing="-0.5px" fontSize="20" fontWeight="bold">
         XXYZKJSD23
        </Text>
      </Box>

      <Button
        align="left"
        style={buttonStyle}
        text="View setup guide"
        href="https://stripe.com"
      />

      <Hr />
      <Text>
        If you have any questions, visit our developer{" "}
        <A href="https://docs.stripe.com/dashboard/basics">docs</A> or our
        support site.
      </Text>

      <Text spacing="0px">— The Stripe team</Text>
    </Body>
  </Html>
);

export default StripeWelcomeEmail;
