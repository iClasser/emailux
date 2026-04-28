import * as React from "react";
import { HtmlContext } from "@emailux/html";
interface BodyContentsProps extends React.ComponentPropsWithoutRef<"table"> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  width?: number | "100%";
  dir?: string;
  padding?: string;
  borderRadius?: string;
  outerBgColor?: string;
  backgroundColor?: string;
  className?: string;
  backgroundImageUrl?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  bgImageTakesAllWrappers?: boolean;
  borderWidth?: number;
  borderColor?: string;
}

export enum BodyContentsClassNamesEnum {
  table = "emailux-body-contents-table",
}
export const BodyContents: React.FC<BodyContentsProps> = ({
  children,
  style = {},
  width = "100%",
  dir,
  padding = "12px 20px",
  borderRadius,
  outerBgColor = "",
  backgroundColor = "",
  className = "",
  backgroundImageUrl = "",
  backgroundPosition = "bottom",
  backgroundRepeat = "no-repeat, no-repeat",
  bgImageTakesAllWrappers = false,
  borderWidth = 0,
  borderColor = "#e5e5e5",
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const outerStyle: React.CSSProperties = {};
  const outerBgStyle: React.CSSProperties = {};
  Object.assign(
    outerBgStyle,
    outerBgColor && { backgroundColor: outerBgColor }
  );
  Object.assign(outerStyle, outerBgStyle);

  const innerStyle: React.CSSProperties = {};

  const innerPaddingStyle: React.CSSProperties = {};
  Object.assign(innerPaddingStyle, padding && { padding });

  const innerBgStyle: React.CSSProperties = {};
  Object.assign(innerBgStyle, backgroundColor && { backgroundColor });

  const innerBorderRadiusStyle: React.CSSProperties = {};
  Object.assign(innerBorderRadiusStyle, borderRadius && { borderRadius });

  // inner style
  Object.assign(innerStyle, innerPaddingStyle);
  Object.assign(innerStyle, innerBgStyle);
  Object.assign(innerStyle, innerBorderRadiusStyle);
  Object.assign(innerStyle, style);

  const innerBgProps: React.CSSProperties = {};
  Object.assign(innerBgProps, backgroundColor && { bgcolor: backgroundColor });

  const outerBgProps: React.CSSProperties = {};
  Object.assign(outerBgProps, outerBgColor && { bgcolor: outerBgColor });


  const innerWrapperBgStyle: React.CSSProperties = {};
  const tableStyle: React.CSSProperties = {};
  if (backgroundImageUrl && bgImageTakesAllWrappers) {
    tableStyle.backgroundImage = `url(${backgroundImageUrl})`;
    tableStyle.backgroundPosition = backgroundPosition;
    tableStyle.backgroundRepeat = backgroundRepeat;
  }

  if (backgroundImageUrl && !bgImageTakesAllWrappers) {
    innerWrapperBgStyle.backgroundImage = `url(${backgroundImageUrl})`;
    innerWrapperBgStyle.backgroundPosition = backgroundPosition;
    innerWrapperBgStyle.backgroundRepeat = backgroundRepeat;
  }

  const borderWidthStyle: React.CSSProperties = {};
  Object.assign(borderWidthStyle, borderWidth && { border: `${borderWidth} solid ${borderColor}` });

  return (
    <table
      className={BodyContentsClassNamesEnum.table}
      width="100%"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      align="center"
      style={tableStyle}
      dir={effectiveDir}
    >
      <tr align="center">
        {width === "100%" ? (
          <td
            className={className}
            style={{
              ...innerStyle,
              ...innerWrapperBgStyle,
              direction: effectiveDir,
              ...borderWidthStyle,
            }}
            {...innerBgProps}
            width={width}
            dir={effectiveDir}
          >
            {children}
          </td>
        ) : (
          <>
            {/* outer background */}
            <td
              {...outerBgProps}
              style={{
                padding: "0px",
                fontSize: "0px",
              }}
            />
            {/* content */}
            <td
              width={width}
              dir={effectiveDir}
              className={className}
              {...innerBgProps}
              style={{
                ...innerStyle,
                ...innerWrapperBgStyle,
                direction: effectiveDir,
                ...borderWidthStyle,
              }}
            >
              {children}
            </td>
            {/* outer background */}
            <td
              {...outerBgProps}
              style={{
                padding: "0px",
                fontSize: "0px",
              }}
            />
          </>
        )}
      </tr>
    </table>
  );
};

BodyContents.displayName = "BodyContents";
