import * as React from "react";
import { HtmlContext } from "@emailux/html";
interface AProps extends React.ComponentPropsWithoutRef<"a"> {
  color?: string;
  dir?: string;
  style?: React.CSSProperties;
  href: string;
  children: React.ReactNode | string;
  rel?: string;
  ariaLabel?: string;
  noDecoration?: boolean;
  spacing?: string;
}

export enum AClassNamesEnum {
  anchor = "emailux-a-anchor",
  text = "emailux-a-text",
}

export const A: React.FC<AProps> = ({
  children,
  dir,
  href,
  rel = "noopener noreferrer",
  ariaLabel,
  style,
  color,
  noDecoration = false,
  spacing,
  ...props
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const styles: React.CSSProperties = {};
  if (color) {
    styles.color = color;
  }
  if (noDecoration) {
    styles.textDecoration = "none";
  }
  if (style) {
    Object.assign(styles, style);
  }

  function renderAnchor() {
    return (
      <a
        href={href}
        rel={rel}
        dir={effectiveDir}
        aria-label={ariaLabel}
        style={styles}
        className={AClassNamesEnum.anchor}
        {...props}
      >
        {children}
      </a>
    );
  }

  return spacing ? (
    <table border="0" cellPadding="0" cellSpacing="0" role="presentation" dir={effectiveDir}>
      <tr>
        <td  style={ { padding: `0px 0px ${effectiveSpacing} 0px` }}>
          {renderAnchor()}
        </td>
      </tr>
    </table>
  ) : (
    renderAnchor()
  );
};

A.displayName = "A";
