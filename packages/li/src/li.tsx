import * as React from "react";
import { HtmlContext } from "@emailux/html";

export interface LiProps extends React.ComponentPropsWithoutRef<"table"> {
  children: React.ReactNode;
  className?: string;
  spacing?: string;
  style?: React.CSSProperties;
  dir?: string;
}

export enum LiClassNamesEnum {
  wrapper = "emailux-li-wrapper",
  li = "emailux-li",
}

export const Li: React.FC<LiProps> = ({
  children,
  style,
  className = "",
  dir,
  spacing,
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;

  const liStyles: React.CSSProperties = {
    marginLeft: "0px",
  };

  if (spacing) {
    liStyles.padding = `0px 0px ${spacing} 0px`;
  }

  if (style) {
    Object.assign(liStyles, style);
  }

  return (
    <li
      style={liStyles}
      className={`${LiClassNamesEnum.li} ${className}`}
      dir={effectiveDir}
    >
      {children}
    </li>
  );
};

Li.displayName = "Li";
