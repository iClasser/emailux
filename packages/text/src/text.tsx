import * as React from "react";
import { HtmlContext } from "@emailux/html";
import { A } from "@emailux/a";
export interface TextProps extends React.ComponentPropsWithoutRef<"table"> {
  children: React.ReactNode;
  center?: boolean;
  spacing?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  className?: string;
  style?: React.CSSProperties;
  dir?: string;
  plain?: boolean;
  inline?: boolean;
  letterSpacing?: string;
  href?: string;
  padding?: string;
}

export enum TextClassNamesEnum {
  wrapper = "emailux-text-wrapper",
  text = "emailux-text",
}

export const Text: React.FC<TextProps> = ({
  children,
  spacing,
  center,
  fontWeight,
  fontFamily,
  fontSize,
  lineHeight,
  style,
  color,
  className = "",
  dir,
  plain = false,
  letterSpacing,
  inline = false,
  href,
  padding,
  ...props
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;
  const effectiveTextColor = color !== undefined ? color : htmlContext?.textColor;
  const styles: React.CSSProperties = {
    margin: "inherit",
    direction: effectiveDir,
  };
  Object.assign(styles);
  Object.assign(
    styles,
    fontWeight && {
      fontWeight,
    },
    fontFamily && {
      fontFamily,
    },
    fontSize && {
      fontSize,
    },
    effectiveTextColor && {
      color: effectiveTextColor,
    },
    letterSpacing && {
      letterSpacing,
    },
    ((inline || plain) && padding) && {
      padding: padding,
    }
  );
  if (lineHeight) {
    styles.lineHeight = lineHeight;
  }
  if (props.style) {
    Object.assign(styles, props.style);
  }
  if (style) {
    Object.assign(styles, style);
  }

  const wrapperStyles: React.CSSProperties = {};
  Object.assign(
    wrapperStyles,
    effectiveSpacing && { padding: `0px 0px ${effectiveSpacing} 0px` }
  );

  const renderAnchor = (text: any) => {
    return (
      <A href={href} style={{ 
        ...(effectiveTextColor ? { color: effectiveTextColor } : {})
       }} noDecoration={true}>
        {text}
      </A>
    );
  };
  const renderChildren = () => {
    if (href) {
      return renderAnchor(children);
    }
    return children;
  };
  if (center) {
    wrapperStyles.textAlign = "center";
  }

  if (inline) {
    return (
      <span
        dir={effectiveDir}
        style={styles}
        className={`${TextClassNamesEnum.text}`}
      >
        {renderChildren()}
      </span>
    );
  }

  if (plain) {
    return (
      <p
        dir={effectiveDir}
        style={styles}
        className={`${TextClassNamesEnum.text}`}
      >
        {renderChildren()}
      </p>
    );
  }

  return (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      width="100%"
      dir={effectiveDir}
    >
      <tr>
        <td
          align={center ? "center" : undefined}
          dir={effectiveDir}
          className={`${className} ${TextClassNamesEnum.wrapper}`}
          style={wrapperStyles}
        >
          <p
            dir={effectiveDir}
            style={styles}
            className={`${TextClassNamesEnum.text}`}
          >
            {renderChildren()}
          </p>
        </td>
      </tr>
    </table>
  );
};

Text.displayName = "Text";
