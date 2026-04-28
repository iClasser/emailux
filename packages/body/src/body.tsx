import * as React from "react";
import { BodyContents } from "@emailux/body-contents";
import { HtmlContext } from "@emailux/html";
export interface BodyProps extends React.ComponentPropsWithoutRef<"body"> {
  children: React.ReactNode;
  // preheader or preview text
  previewText?: string;
  background?: string;
  backgroundColor?: string;
  // width of the body
  width?: number | "100%";
  padding?: string;
  outerBgColor?: string;
  textColor?: string;
  borderRadius?: string;
  spacingTop?: string;
  spacingBottom?: string;
  footer?: React.ReactNode;
  footerWidth?: number | "100%";
  footerPadding?: string;
  footerOuterBgColor?: string;
  footerBackgroundColor?: string;
  footerStyle?: React.CSSProperties;
  backgroundImageUrl?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  bgImageTakesAllWrappers?: boolean;
  dir?: string;
  borderWidth?: number;
  borderColor?: string;
}

export enum BodyClassNamesEnum {
  wrapper = "emailux-email-body-wrapper",
  footer = "emailux-email-body-footer",
}

export const Body: React.FC<BodyProps> = ({
  children,
  dir,
  background = "",
  backgroundColor = "",
  previewText = "",
  width = "100%",
  padding = "12px 20px",
  // if your email has fixed width, you can set the outer background color
  outerBgColor = "",
  textColor = "",
  borderRadius = "",
  spacingTop,
  spacingBottom,
  footer,
  footerWidth = "100%",
  footerPadding = "0px 20px",
  footerOuterBgColor = "",
  footerBackgroundColor = "",
  footerStyle = {},
  backgroundImageUrl = "",
  backgroundPosition = "bottom",
  backgroundSize = "auto",
  backgroundRepeat = "no-repeat, no-repeat",
  bgImageTakesAllWrappers = false,
  borderWidth = 0,
  borderColor = "#e5e5e5",
  ...props
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const styles: React.CSSProperties = {};
  Object.assign(styles, background && { background });
  Object.assign(
    styles,
    backgroundColor && {
      backgroundColor,
      ...(textColor && { color: textColor }),
    }
  );
  if (props.style) {
    Object.assign(styles, props.style);
  }

  const bodyBgStyle: React.CSSProperties = {};
  Object.assign(bodyBgStyle, backgroundColor && { backgroundColor: outerBgColor });
  Object.assign(bodyBgStyle, textColor && { color: textColor });

  return (
    <body {...props} style={bodyBgStyle} dir={effectiveDir}>
      {/* hidden preview text in inbox */}
      {previewText && (
        <h5
          id="preHeader"
          style={{
            display: "none",
            color: "#ffffff",
            fontSize: "0px",
            lineHeight: "0px",
          }}
        >
          {previewText}
        </h5>
      )}
      {spacingTop && (
        <table width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
          <tr>
            <td style={{ padding: `0px 0px ${spacingTop} 0px` }} />
          </tr>
        </table>
      )}
      {/* main body */}
      <BodyContents
        borderWidth={borderWidth}
        borderColor={borderColor}
        backgroundImageUrl={backgroundImageUrl}
        backgroundPosition={backgroundPosition}
        bgImageTakesAllWrappers={bgImageTakesAllWrappers}
        backgroundRepeat={backgroundRepeat}
        className={BodyClassNamesEnum.wrapper}
        width={width}
        padding={padding}
        width={width}
        outerBgColor={outerBgColor}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        style={styles}
        dir={effectiveDir}
      >
        {children}
      </BodyContents>
      {footer && (
        <BodyContents
          className={BodyClassNamesEnum.footer}
          width={footerWidth}
          padding={footerPadding}
          width={footerWidth}
          outerBgColor={footerOuterBgColor}
          backgroundColor={footerBackgroundColor}
          style={footerStyle}
          dir={effectiveDir}
        >
          {footer}
        </BodyContents>
      )}
      {spacingBottom && (
        <table width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
          <tr>
            <td style={{ padding: `0px 0px ${spacingBottom} 0px` }} />
          </tr>
        </table>
      )}
    </body>
  );
};

Body.displayName = "Body";
