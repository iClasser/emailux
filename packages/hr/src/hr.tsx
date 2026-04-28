import * as React from "react";
import { HtmlContext } from "@emailux/html";
interface HrProps extends React.ComponentPropsWithoutRef<"hr"> {
  color?: string;
  width?: string;
  spacing?: string;
  dir?: string;
  style?: React.CSSProperties;
  align?: string;
  height?: number;
}

export enum HrClassNamesEnum {
  wrapper = "emailux-hr-wrapper",
  hr = "emailux-hr",
}

export const Hr: React.FC<HrProps> = ({
  color = "#e5e5e5",
  width = "100%",
  spacing,
  dir,
  style = {},
  align = "center",
  height = 1,
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;
  const effectiveDir = dir ?? htmlContext?.dir;
  const outerStyles: React.CSSProperties = {};
  if (effectiveSpacing) {
    outerStyles.padding = `0px 0px ${effectiveSpacing} 0px`;
  }
  const tdStyles: React.CSSProperties = {};
  const tdProps: React.CSSProperties = {};
  if (color) {
    tdProps.bgcolor = color;
  }
  // if height is possible to convert to px, convert it to px
  let h = Number(height);
  if (Number.isNaN(h)) {
    h = 1;
  }
  const heightPx = `${h}px`;

  const renderChildren = () => {
    return (
      <table
        className={HrClassNamesEnum.wrapper}
        border="0"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        width={width}
        dir={effectiveDir}
      >
        <tr>
          <td 
          {...tdProps}
          style={{
            lineHeight: heightPx,
            fontSize: heightPx,
            padding: '0',
            margin: '0',
            border: '0',
            borderColor: color,
            ...style,
          }}>
            <div>&nbsp;</div>
          </td>
        </tr>
      </table>
    );
  };

  return effectiveSpacing ? (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      width="100%"
      dir={effectiveDir}
    >
      <tr>
        <td align={align} style={outerStyles} dir={effectiveDir}>{renderChildren()}</td>
      </tr>
    </table>
  ) : (
    renderChildren()
  );
};

Hr.displayName = "Hr";
