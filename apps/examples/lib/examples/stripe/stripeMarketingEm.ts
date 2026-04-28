import * as React from "react";
import StripeMarketingEmail from "./jsx/StripeMarketingEmail";
import { getHtml, getText } from '@emailux/components'
const component = React.createElement(StripeMarketingEmail);
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
  A,
  Button,
  Ul,
  Li,
  Table,
} from "@emailux/components";

const { Row, Col } = Table;

const buttonStyle = {
  backgroundColor: "#625afa",
  border: "none",
  fontSize: "14px",
  color: "#fff",
  fontWeight: "bold",
  padding: "4px 17px 4px 16px",
};

const StripeMarketing = () => (
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
     width="600px"
      padding="36px 48px"
      backgroundColor="transparent"
      backgroundImageUrl="https://d2b7lfzqawhc0u.cloudfront.net/platform/exampes/stripe/stripe-marketing-bg.png"
      backgroundPosition="center top"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
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
      // backgroundColor="#fff"
      previewText="You're now ready to make live transactions with Stripe!"
    >
      <Img
        src="https://d2b7lfzqawhc0u.cloudfront.net/platform/exampes/stripe/stripe.png"
        width={70}
        height={29}
        spacing="32px"
        alt="Stripe"
      />
      <Text
        fontFamily="Helvetica,Arial,sans-serif"
        fontSize="48px"
        lineHeight="52px"
        fontWeight="bold"
      >
        How <A href="#">bolt.new</A> acquired 60,000 users on Day 1
      </Text>
      <Text>
        AI businesses aren’t just growing fast—they’re breaking records.
      </Text>
      <Text>
        Join us for an online event on October 21. As part of our AI boom
        series, you’ll hear from Eric Simons, CEO and founder of{" "}
        <A href="#">bolt.new</A>. In this fireside chat, he’ll discuss how{" "}
        <A href="#">bolt.new</A> reached seven million users in a single year..
      </Text>

      <Box
        backgroundColor="#635bff"
        borderRadius="8px 8px 0px 0px"
        padding="8px 0px 0px 0px"
        spacing="0px"
      ></Box>
      <Box
        backgroundColor="#f6f9fc"
        borderRadius="0px 0px 12px 12px"
        padding="36px 36px 16px 36px"
      >
        <Text
          color="#635bff"
          fontSize="14px"
          lineHeight="22px"
          fontWeight="bold"
        >
          Virtual
        </Text>
        <Text fontSize="20px" lineHeight="26px" fontWeight="bold">
          The AI boom on Stripe: <A href="#">bolt.new</A>’s meteoric growth
        </Text>
        <Text fontSize="16px" lineHeight="22px" fontWeight="bold">
          October 21, 2025
        </Text>
        <Text fontSize="14px" fontColor="#3f4b66" lineHeight="22px">
          10:00 a.m. PT/1:00 p.m. ET
        </Text>
        <Button
          align="left"
          style={buttonStyle}
          borderRadius="18px"
          padding="10px 16px"
          text="Register"
          href="#"
        />
      </Box>
      <Text fontSize="20px" lineHeight="26px" fontWeight="bold">
        You’ll also learn how to:
      </Text>

      <Ul lineHeight="24px">
        <Li>Shorten development time using LLMs and AI</Li>
        <Li>
          Create a customer acquisition strategy that’s aligned with high AI
          demand
        </Li>
        <Li>
          Get to market faster, monetize quickly, and experiment with pricing
          models
        </Li>
      </Ul>

      <Table rowSpacing="12px">
        <Row>
          <Col width="50px" valign="top">
            <Img
              src="https://ci3.googleusercontent.com/meips/ADKq_NYUHqprvMT_EnkYO2Ewt7svqma5gL0wukevvCEB8rhN23fi6yeM7Mziw60cSdUbuSHGUD8qzzphkzwWK0IhOKVnMTVqjZ8HRDqnAheQkvQiz3vu4KuRj5pFkH6iABeR-ugVYPQgc9wGp8dk2JQ0jr2IMg6iC3FKvOvVLHRd8BCIQUJMbA=s0-d-e1-ft#https://client-data.knak.io/production/email_assets/628faa4d2610a/fg4uYsDPmJDVgKvOaDt6VXZPcUomhreSrdsEL0al.jpg"
              width={50}
              height={50}
              plain
              borderRadius="5px"
            />
          </Col>
          <Col>
            <Text
              fontSize="16px"
              lineHeight="22px"
              fontWeight="bold"
              spacing="0px"
            >
              Eric Simons
            </Text>
            <Text fontSize="16px" spacing="0px">
              CEO and Founder, bolt.new
            </Text>
          </Col>
        </Row>

        <Row>
          <Col width="50px" valign="top">
            <Img
              src="https://ci3.googleusercontent.com/meips/ADKq_NapYS0lpCdLVA1iYJgBqhjeJ1lsxMGlCFO4R_MmhKS-Op9dWCsnz0249FHQ4s7IsthkmU6BQIjd5b-r-P0w417mea-6y-iY0fsRnUaa6_B3MDvPuXj5kUzA2M8pv1lqSXtOBLM0dwm4aa4BQYljx4tmZWz8Q_FyDMCDp-vVPkBN26cUtA=s0-d-e1-ft#https://client-data.knak.io/production/email_assets/628faa4d2610a/LZp6t5YyNzokIIs8RedpkL1r7cJ9Qz1LvC67Cxwu.png"
              width={50}
              height={50}
              plain
              borderRadius="5px"
            />
          </Col>
          <Col>
            <Text
              fontSize="16px"
              lineHeight="22px"
              fontWeight="bold"
              spacing="0px"
            >
              Arnaud Meunier
            </Text>
            <Text fontSize="16px" spacing="0px">
              Head of EMEA Product, Stripe
            </Text>
          </Col>
        </Row>
      </Table>

      <Button
        text="Register"
        href="#"
        align="left"
        style={buttonStyle}
        borderRadius="18px"
        padding="10px 16px"
      />
    </Body>
  </Html>
);

export default StripeMarketing;
`;

const stripeMarketingEm = {
    id: "stripe-marketing",
    name: "Marketing Email",
    type: "marketing",
    brand: "Stripe",
    htmlContent: htmlContent,
    jsxCode: jsxCode,
    textContent: textContent,
}

export default stripeMarketingEm;