import * as React from "react";
import { HtmlContext } from "@emailux/html";
interface CardProps extends React.ComponentPropsWithoutRef<"table"> {
  padding?: string;
  width?: string;
  borderRadius?: string;
  spacing?: string;
  dir?: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  headerCenter?: boolean;
  contentCenter?: boolean;
  footerCenter?: boolean;
  headerBackgroundColor?: string;
  contentBackgroundColor?: string;
  footerBackgroundColor?: string;
}

export enum CardClassNamesEnum {
  table = "emailux-card-table",
  header = "emailux-card-header",
  content = "emailux-card-content",
  footer = "emailux-card-footer",
}

function breakDownBorderRadiusValues(value: string) {
  const returnValues = {
    topLeft: "",
    topRight: "",
    bottomLeft: "",
    bottomRight: "",
  };
  if (!value) {
    return returnValues;
  }
  let splitValue = value.split(" ");
  if (splitValue.length === 1) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[0];
    returnValues.bottomLeft = splitValue[0];
    returnValues.bottomRight = splitValue[0];
  }
  if (splitValue.length === 2) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[1];
    returnValues.bottomLeft = splitValue[0];
    returnValues.bottomRight = splitValue[1];
  }
  if (splitValue.length === 3) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[1];
    returnValues.bottomLeft = splitValue[2];
    returnValues.bottomRight = splitValue[2];
  }
  if (splitValue.length === 4) {
    returnValues.topLeft = splitValue[0];
    returnValues.topRight = splitValue[1];
    returnValues.bottomLeft = splitValue[2];
    returnValues.bottomRight = splitValue[3];
  }
  return returnValues;
}

const breakDownPaddingValues = (value: string) => {
  const returnValues = {
    top: "",
    right: "",
    bottom: "",
    left: "",
  };
  if (!value) {
    return returnValues;
  }
  let splitValue = value.split(" ");
  if (splitValue.length === 1) {
    returnValues.top = splitValue[0];
    returnValues.right = splitValue[0];
    returnValues.bottom = splitValue[0];
    returnValues.left = splitValue[0];
  }
  if (splitValue.length === 2) {
    returnValues.top = splitValue[0];
    returnValues.right = splitValue[1];
    returnValues.bottom = splitValue[0];
    returnValues.left = splitValue[1];
  }
  if (splitValue.length === 3) {
    returnValues.top = splitValue[0];
    returnValues.right = splitValue[1];
    returnValues.bottom = splitValue[2];
    returnValues.left = splitValue[0];
  }
  if (splitValue.length === 4) {
    returnValues.top = splitValue[0];
    returnValues.right = splitValue[1];
    returnValues.bottom = splitValue[2];
    returnValues.left = splitValue[3];
  }
  return returnValues;
}

export const Card: React.FC<CardProps> = ({
  padding = "12px 15px",
  width = "100%",
  borderRadius = "24px",
  spacing,
  dir,
  header,
  headerBackgroundColor = "#fff",
  content,
  contentBackgroundColor = "#fff",
  footer,
  footerBackgroundColor = "#fff",
  headerCenter,
  contentCenter,
  footerCenter,
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;
  const effectiveDir = dir ?? htmlContext?.dir;
  const {
    topLeft: topLeftRadius,
    topRight: topRightRadius,
    bottomLeft: bottomLeftRadius,
    bottomRight: bottomRightRadius,
  } = breakDownBorderRadiusValues(borderRadius);
  const {
    top: topPadding,
    right: rightPadding,
    bottom: bottomPadding,
    left: leftPadding,
  } = breakDownPaddingValues(padding);


  const getHeaderStyle = () => {
    const style: React.CSSProperties = {};
    style.backgroundColor = headerBackgroundColor;
    if (content || footer) {
      style.padding = `${topPadding} ${rightPadding} 0px ${leftPadding}`;
      style.borderRadius = `${topLeftRadius} ${topRightRadius} 0px 0px`;
    } else {
      style.padding = padding;
      style.borderRadius = borderRadius;
    }
    return style;
  };

  const getContentStyle = () => {
    const style: React.CSSProperties = {};
    style.backgroundColor = contentBackgroundColor;
    if (!header && !footer) {
      style.padding = padding;
      style.borderRadius = borderRadius;
    } else if (header && !footer) {
      style.padding = `0px ${rightPadding} 0px ${leftPadding}`;
      style.borderRadius = `0px 0px ${bottomRightRadius} ${bottomLeftRadius}`;
    } else if (!header && footer) {
      style.padding = `${topPadding} ${rightPadding} 0px ${leftPadding}`;
      style.borderRadius = `${topLeftRadius} ${topRightRadius} 0px 0px`;
    } else if (header && footer) {
      style.padding = `0px ${rightPadding} 0px ${leftPadding}`;
      style.borderRadius = `0px 0px 0px 0px`;
    }
    return style;
  };

  const getFooterStyle = () => {
    const style: React.CSSProperties = {};
    style.backgroundColor = footerBackgroundColor;
    if(!header && !content) {
      style.padding = padding;
      style.borderRadius = borderRadius;
    } else if (header || content) {
      style.padding = `0px ${rightPadding} ${bottomPadding} ${leftPadding}`;
      style.borderRadius = `0px 0px ${bottomRightRadius} ${bottomLeftRadius}`;
    }
    return style;
  };


  const headerAlign = headerCenter ? { align: "center" } : {};
  const contentAlign = contentCenter ? { align: "center" } : {};
  const footerAlign = footerCenter ? { align: "center" } : {};

  return (
    <table
      className={CardClassNamesEnum.table}
      width={width}
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      dir={effectiveDir}
    >
      <tr>
        <td
          align="center"
          dir={effectiveDir}
          style={{
            padding: `0px 0px ${effectiveSpacing} 0px`,
          }}
        >
          {/* card header */}
          {header ? (
            <table
              width="100%"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
              dir={effectiveDir}
            >
              <tr>
                <td 
                {...headerAlign}
                style={{
                  ...getHeaderStyle(),
                  ...(headerCenter ? { textAlign: "center" } : {}),
                }} className={CardClassNamesEnum.header}>{header}</td>
              </tr>
            </table>
          ) : null}

          {/* card content */}
          {content ? (
            <table
              width="100%"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
              dir={effectiveDir}
            >
              <tr>
                <td 
                {...contentAlign}
                style={{
                  ...getContentStyle(),
                  ...(contentCenter ? { textAlign: "center" } : {}),
                }} className={CardClassNamesEnum.content}>{content}</td>
              </tr>
            </table>
          ) : null}

          {/* card footer */}
          {footer ? (
            <table
              width="100%"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
              dir={effectiveDir}
            >
              <tr>
                <td 
                {...footerAlign}
                style={{
                  ...getFooterStyle(),
                  ...(footerCenter ? { textAlign: "center" } : {}),
                }} className={CardClassNamesEnum.footer}>{footer}</td>
              </tr>
            </table>
          ) : null}
        </td>
      </tr>
    </table>
  );
};

Card.displayName = "Card";
