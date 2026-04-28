import React from "react";
import { HtmlContext } from "@emailux/html";
interface IconProps {
  url: string;
  alt: string;
  width: string | number;
  height: string | number;
}

export interface ButtonProps {
  text: string;
  href: string;
  icon?: IconProps;
  backgroundColor?: string;
  align?: "left" | "center" | "right";
  dir?: "ltr" | "rtl";
  textColor?: string;
  borderRadius?: string;
  spacing?: string;
  style?: React.CSSProperties;
  borderWidth?: string;
  borderColor?: string;
  width?: string;
}

export enum ButtonClassNamesEnum {
  text = 'inkdes-button-text',
  anchor = 'inkdes-button-anchor',
}

export const Button = ({
  text,
  href,
  icon,
  backgroundColor = "#000",
  align = "center",
  dir,
  width,
  textColor = "#fff",
  borderRadius = "12px",
  spacing,
  style = {
    fontSize: 16,
    fontWeight: 600,
    padding: "12px 20px",
  },
  borderWidth,
  borderColor = "#e5e5e5",
  ...props
}: ButtonProps & { [key: string]: any }) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;
  const borderStyle = borderWidth ? `${borderWidth} solid ${borderColor}` : undefined;
  const computeArcSize = () => {
    // VML arcsize as percentage string; rough mapping from px radius
    if (!borderRadius) return "10%";
    const match = borderRadius.match(/(\d+)(px)?/);
    if (!match) return "10%";
    const radiusPx = parseInt(match[1], 10);
    // Assume typical button height ~ 44px for touch targets
    const pct = Math.max(0, Math.min(50, Math.round((radiusPx / 44) * 100)));
    return `${pct}%`;
  };

  const renderContent = () => {
    const styleWithoutPadding = { ...style, padding: undefined };
    const textNode = (
      <span
        className={ButtonClassNamesEnum.text}
        style={{
          color: textColor,
          verticalAlign: "middle",
          textDecoration: "none",
          display: "inline-block",
          border: 0,
          ...styleWithoutPadding,
        }}
      >
        {text}
      </span>
    );

    if (!icon) return textNode;

    const spacer = (
      <span style={{ display: "inline-block", width: 8, lineHeight: 0 }}>
        &nbsp;
      </span>
    );

    const iconImg = (
      <img
        src={icon.url}
        alt={icon.alt}
        width={typeof icon.width === "number" ? icon.width : undefined}
        height={typeof icon.height === "number" ? icon.height : undefined}
        style={{
          width:
            typeof icon.width === "number" ? `${icon.width}px` : icon.width,
          height:
            typeof icon.height === "number" ? `${icon.height}px` : icon.height,
          verticalAlign: "middle",
          border: 0,
          outline: "none",
          textDecoration: "none",
        }}
      />
    );

    return effectiveDir === "rtl" ? (
      <>
        {textNode}
        {spacer}
        {iconImg}
      </>
    ) : (
      <>
        {iconImg}
        {spacer}
        {textNode}
      </>
    );
  };

  const cellOuterPadding = effectiveSpacing ? `0px 0px ${effectiveSpacing} 0px` : undefined;

  const getInlineStylesIfAvailable = (style: React.CSSProperties) => {
    if (!style) return "";
    const pickStyles = ["fontFamily", "fontWeight", "lineHeight", "textAlign"];
    const snakeCaseStyles = pickStyles.map((style) =>
      style.replace(/([A-Z])/g, "_$1").toLowerCase()
    );
    let styles = snakeCaseStyles
      .map((style) => {
        const value = style[style];
        return value ? `${style}:${value};` : "";
      })
      .join("");
    if (borderStyle) {
      styles += `border:${borderStyle};`;
    }
    return styles;
  };

  const vml = `<!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${href}" style="height:44px;v-text-anchor:middle;" arcsize="${computeArcSize()}" strokecolor="${backgroundColor}" fillcolor="${backgroundColor}">
    <w:anchorlock/>
    <center style="color:${textColor};${getInlineStylesIfAvailable(style)}">
      ${text}
    </center>
  </v:roundrect>
  <![endif]-->`;

  const nonMsoStart = `<!--[if !mso]><!-- -->`;
  const nonMsoEnd = `<!--<![endif]-->`;


  const buttonWidthCss = {};
  if (width !== undefined) {
    buttonWidthCss.width = width;
  }

  return (
    <table
      width="100%"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
    >
      <tr>
        <td
          align={align === "center" ? "center" : undefined}
          dir={effectiveDir}
          style={{
            direction: effectiveDir,
            padding: cellOuterPadding,
            wordBreak: 'break-word',
          }}
        >
          <span className='vml' dangerouslySetInnerHTML={{ __html: vml }} />
          <table border="0" cellPadding="0" cellSpacing="0" 
          role="presentation"
          style={{
            borderCollapse: 'separate',
            ...buttonWidthCss,
            lineHeight: '100%',
          }}
          >
            <tr>
              <td
                align="center"
                bgcolor={backgroundColor}
                style={{
                  backgroundColor: backgroundColor,
                  borderRadius: borderRadius,
                  msoPaddingAlt: effectiveSpacing ? effectiveSpacing : '0px',
                  ...(borderStyle && { border: borderStyle }),
                }}
                valign="middle"
              >
                <span className='vml' dangerouslySetInnerHTML={{ __html: nonMsoStart }} />
                <a
                  href={href}
                  className={ButtonClassNamesEnum.anchor}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={text}
                  style={{
                    display: "inline-block",
                    backgroundColor: backgroundColor,
                    color: textColor,
                    borderRadius: borderRadius,
                    border:
                      style.border !== undefined
                        ? style.border
                        : `1px solid ${backgroundColor}`,
                    padding:
                      style.padding !== undefined ? style.padding : "",
                    textDecoration: "none",
                    textAlign: "center",
                    ...style,
                  }}
                  {...props}
                >
                  {renderContent()}
                </a>
                <span className='vml' dangerouslySetInnerHTML={{ __html: nonMsoEnd }} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

Button.displayName = "Button";
