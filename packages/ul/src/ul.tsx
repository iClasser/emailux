import * as React from "react";
import { HtmlContext } from "@emailux/html";

export interface UlProps extends React.ComponentPropsWithoutRef<"table"> {
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

export enum UlClassNamesEnum {
  wrapper = 'emailux-ul-wrapper',
  ul = 'emailux-ul',
}

export const Ul: React.FC<UlProps> = ({
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

  const ulStyles: React.CSSProperties = {
    paddingLeft: paddingLeft,
    listStyleType: 'disc',
  };
  if(fontWeight) {
    ulStyles.fontWeight = fontWeight;
  }
  if(fontFamily) {
    ulStyles.fontFamily = fontFamily;
  }
  if(fontSize) {
    ulStyles.fontSize = fontSize;
  }
  if(color) {
    ulStyles.color = color;
  }
  if(lineHeight) {
    ulStyles.lineHeight = lineHeight;
  }
  if(letterSpacing) {
    ulStyles.letterSpacing = letterSpacing;
  }

  if(style) {
    Object.assign(ulStyles, style);
  }

  if(plain) {
    return (
        <ul style={ulStyles} className={`${UlClassNamesEnum.ul} ${className}`} dir={effectiveDir}>
        {children}
      </ul>
    )
  }

  return (
    <table border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%" dir={effectiveDir}>
      <tr>
        <td align={center ? "center" : undefined} dir={effectiveDir} className={`${UlClassNamesEnum.wrapper}`} style={wrapperStyles}>
          <ul style={ulStyles} className={`${UlClassNamesEnum.ul} ${className}`} dir={effectiveDir}>
            {children}
          </ul>
        </td>
      </tr>
    </table>
  );
};

Ul.displayName = "Ul";
