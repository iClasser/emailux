import * as React from "react";
import { HtmlContext } from "@emailux/html";
interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode | string;
  varient?: "default" | "secondary" | "destructive" | "outline";
  padding?: string;
  noPadding?: boolean;
  spacing?: string;
  dir?: string;
}

export enum BadgeClassNamesEnum {
  badge = "emailux-badge",
}

const badgeVariants = {
  variants: {
    variant: {
      default: {
        color: "#fff",
        backgroundColor: "#000",
        borderRadius: "8px",
      },
      secondary: {
        color: "#000",
        backgroundColor: "#dedede",
        borderRadius: "8px",
        border: "1px solid #dedede",
      },
      destructive: {
        color: "#fff",
        backgroundColor: "#ff0000",
        borderRadius: "8px",
        border: "1px solid #ff0000",
      },
      outline: {
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #000",
      },
    },
  },
};

export const Badge: React.FC<BadgeProps> = ({
  varient = "default",
  padding = "6px 8px",
  noPadding = false,
  spacing,
  dir,
  children,
  ...props
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;
  const styles: React.CSSProperties = {};
  styles.color = badgeVariants.variants.variant[varient].color;
  styles.backgroundColor =
    badgeVariants.variants.variant[varient].backgroundColor;
  styles.borderRadius = badgeVariants.variants.variant[varient].borderRadius;
  styles.border = badgeVariants.variants.variant[varient].border;
  if (!noPadding) {
    styles.padding = padding;
  }
  if (effectiveSpacing) {
    styles.margin = `0px 0px ${effectiveSpacing} 0px`;
  }
  const renderChildren = () => {
    return (
      <span dir={effectiveDir} className={BadgeClassNamesEnum.badge} style={styles} {...props}>
        {children}
      </span>
    );
  };

  return effectiveSpacing ? (
    <span dir={effectiveDir} style={{ padding: `0px 0px ${effectiveSpacing} 0px`, direction: effectiveDir }}>{renderChildren()}</span>
  ) : (
    renderChildren()
  );
};

Badge.displayName = "Badge";
