import * as React from "react";
import StripeReceiptEmail from "./jsx/StripeReceiptEmail";
import { getHtml, getText } from '@emailux/components'
const component = React.createElement(StripeReceiptEmail);
const htmlContent = getHtml(component).html || "";
const textContent = getText(component).text || "";


const jsxCode = `import {
  Html,
  Head,
  Css,
  Body,
  Img,
  Text,
  A,
  Button,
  Hr,
  Box,
  Table,
} from "@emailux/components";

const { Row, Col } = Table;

const StripeReceiptEmail = () => (
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
      padding="0px"
      borderRadius="0px"
      outerBgColor="#000"
      backgroundColor="#000"
      spacingTop="64px"
      spacingBottom="64px"
      
      previewText="You're now ready to make live transactions with Stripe!"
    >
      <Table spacing="32px" padding="0px">
        <Row>
          <Col width="40px" valign="top">
            <Img
              src="https://ci3.googleusercontent.com/meips/ADKq_NbzPamNJDUfbr0XHIuM2bwjro2wowIhiOH7PElS276IevyK4swt-mDpcYrVJyhBWyqYSCiXCZ4F-gcaiiAMMVyIyuoEqoYNY7EzV6kudAReMb-h_O7yA24kafv5wtUSdI6y2Avj9FBSY7VETCoMEp2ZMg9ff3Tlb_r9jV6ijBTITaNDbo2zUNkL-g=s0-d-e1-ft"
              width={32}
              height={32}
              spacing="0px"
              borderRadius="50%"
              alt="ElevenLabs"
            />
          </Col>
          <Col valign="middle">
            <Text spacing="0px" fontSize="16px" fontWeight="500" color="#fff">
              Eleven Labs Inc.
            </Text>
          </Col>
        </Row>
      </Table>
      <Box backgroundColor="#fff" borderRadius="12px" padding="32px">
        <Table>
          <Row>
            <Col>
              <Text
                spacing="0px"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="500"
                color="#7a7a7a"
              >
                Receipt from Eleven Labs Inc.
              </Text>
              <Text
                spacing="0px"
                fontSize="36px"
                lineHeight="40px"
                fontWeight="600"
                color="#1a1a1a"
              >
                $22.00
              </Text>
              <Text
                spacing="0px"
                fontSize="14px"
                lineHeight="24px"
                fontWeight="500"
                color="#7a7a7a"
              >
                Paid October 12, 2025
              </Text>
            </Col>

            <Col align="right">
              <Img
                plain
                src="https://ci3.googleusercontent.com/meips/ADKq_Nb0PIKp4BW7Q9dGZWAbhhehqH1C7jSJqPrktJ2lzqT_ZKhZb3k_OE2EHw4d-X52LFFEkrtG1wxOZCHxAtGyrjX1yDzocuLEuaTPZySKYYjONkOVyakKaNjTutQUWWCz6ZcbCwWN=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/emails/invoices_invoice_illustration.png"
                width={100}
                height={100}
                spacing="0px"
                alt="Invoice"
                borderRadius="8px"
              />
            </Col>
          </Row>
        </Table>
        <Hr />

        <Table padding="0px">
          <Row>
            <Col>
              <A
                style={{ textDecoration: "none", color: "#7a7a7a" }}
                noDecoration
                href="#"
              >
                <Text spacing="0px" color="#7a7a7a" fontWeight="500">
                  <Img
                    style={{
                      verticalAlign: "none",
                      border: "none",
                      margin: "0px 10px 0px 0px",
                    }}
                    inline
                    plain
                    src="https://ci3.googleusercontent.com/meips/ADKq_NZq-z2EP-cR0pYpiY3JkSPbKsWEdcLj7c0u7WIEMFyzCtYIAUsyX5P4rv6r-wnA6niVBDXZkAb7E9e5t5cLNKPuWHkYE_omiChj-WZgMieFce4Nk8DwyL0NSr8=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/emails/invoices_arrow_down.png"
                    width={12}
                    height={12}
                    spacing="0px"
                    alt="Download"
                  />
                  Download invoice
                </Text>
              </A>
            </Col>
            <Col>
              <A
                style={{ textDecoration: "none", color: "#7a7a7a" }}
                noDecoration
                href="#"
              >
                <Text spacing="0px" color="#7a7a7a" fontWeight="500">
                  <Img
                    style={{
                      verticalAlign: "none",
                      border: "none",
                      margin: "0px 10px 0px 0px",
                    }}
                    inline
                    plain
                    src="https://ci3.googleusercontent.com/meips/ADKq_NZq-z2EP-cR0pYpiY3JkSPbKsWEdcLj7c0u7WIEMFyzCtYIAUsyX5P4rv6r-wnA6niVBDXZkAb7E9e5t5cLNKPuWHkYE_omiChj-WZgMieFce4Nk8DwyL0NSr8=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/emails/invoices_arrow_down.png"
                    width={12}
                    height={12}
                    spacing="0px"
                    alt="Download"
                  />
                  Download receipt
                </Text>
              </A>
            </Col>
          </Row>
        </Table>
        <Table padding="4px 0px">
          <Row>
            <Col width="50%">
              <Text spacing="0px" color="#7a7a7a">
                Receipt number
              </Text>
            </Col>
            <Col width="50%" align="right">
              <Text plain  color="#7a7a7a">
                1212-12122-1212121
              </Text>
            </Col>
          </Row>
          <Row>
            <Col width="50%">
              <Text spacing="0px" color="#7a7a7a">
                Invoice number
              </Text>
            </Col>
            <Col width="50%" align="right">
              <Text plain color="#7a7a7a">
                00000000-0012
              </Text>
            </Col>
          </Row>
          <Row>
            <Col width="50%">
              <Text  spacing="0px" color="#7a7a7a">
                Payment method
              </Text>
            </Col>
            <Col width="50%" align="right">
              <Text plain color="#7a7a7a">
                Visa - 2022
              </Text>
            </Col>
          </Row>
        </Table>
      </Box>

      <Text center fontSize="12px" color="#7a7a7a">
      Powered by 
      <Img
        src="https://d2b7lfzqawhc0u.cloudfront.net/platform/exampes/stripe/stripe.png"
        height={24}
        plain inline
        alt="Stripe"
        style={{ marginLeft: "4px" }}
            />
      </Text>
    </Body>
  </Html>
);

export default StripeReceiptEmail;
`;

const stripeReceipt = {
    id: "stripe-receipt",
    name: "Receipt Email",
    type: "receipt",
    brand: "Stripe",
    htmlContent: htmlContent,
    jsxCode: jsxCode,
    textContent: textContent,
}

export default stripeReceipt;