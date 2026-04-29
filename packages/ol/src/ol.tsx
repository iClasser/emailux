import * as React from "react";
import { HtmlContext } from "@emailux/html";

export interface OlProps extends React.ComponentPropsWithoutRef<"table"> {
  children: React.ReactNode;
  center?: boolean;
  spacing?: string;
  paddingLeft?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  className?: string;
  style?: React.CSSProperties;
  dir?: string;
  plain?: boolean;
  letterSpacing?: string;
}

export enum OlClassNamesEnum {
  wrapper = 'emailux-ol-wrapper',
  ol = 'emailux-ol',
}

export const Ol: React.FC<OlProps> = ({
  children,
  spacing,
  center,
  paddingLeft = '20px',
  fontWeight,
  fontFamily,
  fontSize,
  lineHeight,
  style,
  color = '#000',
  className = '',
  dir,
  plain = false,
  letterSpacing,
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;

  const wrapperStyles: React.CSSProperties = {};
  if(effectiveSpacing) {
    wrapperStyles.padding = `0px 0px ${effectiveSpacing} 0px`;
  }

  const olStyles: React.CSSProperties = {
    paddingLeft: paddingLeft,
    listStyleType: 'decimal',
  };
  if(fontWeight) {
    olStyles.fontWeight = fontWeight;
  }
  if(fontFamily) {
    olStyles.fontFamily = fontFamily;
  }
  if(fontSize) {
    olStyles.fontSize = fontSize;
  }
  if(color) {
    olStyles.color = color;
  }
  if(lineHeight) {
    olStyles.lineHeight = lineHeight;
  }
  if(letterSpacing) {
    olStyles.letterSpacing = letterSpacing;
  }

  if(style) {
    Object.assign(olStyles, style);
  }

  if(plain) {
    return (
        <ol style={olStyles} className={`${OlClassNamesEnum.ol} ${className}`} dir={effectiveDir}>
        {children}
      </ol>
    )
  }

  return (
    <table border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%" dir={effectiveDir}>
      <tr>
        <td align={center ? "center" : undefined} dir={effectiveDir} className={`${OlClassNamesEnum.wrapper}`} style={wrapperStyles}>
          <ol style={olStyles} className={`${OlClassNamesEnum.ol} ${className}`} dir={effectiveDir}>
            {children}
          </ol>
        </td>
      </tr>
    </table>
  );
};

Ol.displayName = "Ol";
