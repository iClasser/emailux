import * as React from "react";
import { HtmlContext } from "@emailux/html";
interface BoxProps extends React.ComponentPropsWithoutRef<"table"> {
  children: React.ReactNode;
  width?: string;
  padding?: string;
  center?: boolean;
  itemCenter?: boolean;
  dir?: "ltr" | "rtl" | "auto";
  spacing?: string;
  borderRadius?: string;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  className?: string;
  style?: React.CSSProperties;
  borderWidth?: number;
  borderColor?: string;
}

function toCssSize(value: unknown): string | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return `${value}px`;
  if (typeof value === "string" && value.trim()) return value.trim();
  return undefined;
}

function parsePx(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed.endsWith("px")) return undefined;
  const n = Number(trimmed.slice(0, -2));
  return Number.isFinite(n) ? n : undefined;
}

export enum BoxClassNamesEnum {
  table = "emailux-box-table",
  td = "emailux-box-td",
}
export const Box: React.FC<BoxProps> = ({
  children,
  width = "100%",
  padding = "10px 16px",
  center = true,
  itemCenter = true,
  borderRadius = "",
  backgroundColor = "",
  backgroundImageUrl = "",
  backgroundPosition = "bottom",
  backgroundRepeat = "no-repeat, no-repeat",
  className = "",
  dir,
  spacing,
  borderWidth = 0,
  borderColor = "#e5e5e5",
  style = {} as any,
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;

  const innerStyles: React.CSSProperties = {};
  if (backgroundColor) {
    innerStyles.backgroundColor = backgroundColor;
  }
  // style props for fallback background image
  const bgInnerProps: React.CSSProperties = {};
  let vmlStart = "";
  let vmlEnd = "";
  if (backgroundImageUrl) {
    innerStyles.background = `url(${backgroundImageUrl})`;
    innerStyles.backgroundImage = `url(${backgroundImageUrl})`;
    innerStyles.backgroundPosition = backgroundPosition;
    innerStyles.backgroundRepeat = backgroundRepeat;
    bgInnerProps.background = backgroundImageUrl;

    // Outlook/VML background fallback:
    // - Removes hardcoded placeholder (path/coord*/style/src/color)
    // - Wraps content in a VML textbox so the background and content align in Outlook
    const outlookWidthCss = toCssSize((style as any)?.width) ?? width;
    const outlookHeightCss =
      toCssSize((style as any)?.height) ?? toCssSize((style as any)?.minHeight);

    const vmlColor = backgroundColor || "#ffffff";
    const wantsRepeat = /repeat/.test(backgroundRepeat);
    const vmlFillType = wantsRepeat ? "tile" : "frame";

    const radiusPx = parsePx(borderRadius);
    const widthPx = parsePx(outlookWidthCss);
    const heightPx = parsePx(outlookHeightCss);
    const minSidePx =
      widthPx && heightPx ? Math.min(widthPx, heightPx) : undefined;
    const arcsize =
      radiusPx && minSidePx ? `${Math.min(1, radiusPx / minSidePx)}` : undefined;

    const vmlTag = borderRadius ? "v:roundrect" : "v:rect";
    const arcAttr =
      vmlTag === "v:roundrect" && arcsize ? ` arcsize="${arcsize}"` : "";
    const heightStyle = outlookHeightCss ? `height:${outlookHeightCss};` : "";
    const fitToTextStyle = outlookHeightCss ? "" : "mso-fit-shape-to-text:true;";

    vmlStart =
      `<!--[if mso]><${vmlTag} xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"${arcAttr} ` +
      `style="width:${outlookWidthCss};${heightStyle}${fitToTextStyle}">` +
      `<v:fill type="${vmlFillType}" src="${backgroundImageUrl}" color="${vmlColor}" />` +
      `<v:textbox inset="0,0,0,0"><div><![endif]-->`;

    vmlEnd = `<!--[if mso]></div></v:textbox></${vmlTag}><![endif]-->`;
  }
  if (borderRadius) {
    innerStyles.borderRadius = borderRadius;
  }
  if (padding) {
    innerStyles.padding = padding;
  }
  if (style) {
    Object.assign(innerStyles, style);
  }

  const tableOuterStyles: React.CSSProperties = {};

  const align = center ? "center" : undefined;
  const itemAlign = itemCenter ? "center" : undefined;

  const borderWidthStyle: React.CSSProperties = {};
  Object.assign(
    borderWidthStyle,
    borderWidth && { border: `${borderWidth} solid ${borderColor}` }
  );
  Object.assign(innerStyles, borderWidthStyle);

  return (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      width="100%"
    >
      <tr>
        {/* wrapper table td */}
        <td
          align={align}
          style={
            effectiveSpacing
              ? { padding: `0px 0px ${effectiveSpacing} 0px` }
              : {}
          }
        >
          {/* inner box table */}
          <table
            border="0"
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
            width={width}
            className={`${className} ${BoxClassNamesEnum.table}`}
          >
            <tr>
              <td
                align={itemAlign}
                dir={effectiveDir}
                {...bgInnerProps}
                className={`${className} ${BoxClassNamesEnum.td}`}
                style={innerStyles}
              >
                {vmlStart && (
                  <span className='vml' dangerouslySetInnerHTML={{ __html: vmlStart }} />
                )}
                {children}
                {vmlEnd && (
                  <span className='vml' dangerouslySetInnerHTML={{ __html: vmlEnd }} />
                )}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

Box.displayName = "Box";
