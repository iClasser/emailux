import * as React from "react";
import { HtmlContext } from "@emailux/html";
import { A } from "@emailux/a";
export interface ImgProps extends React.ComponentPropsWithoutRef<"img"> {
  width?: string | number;
  height?: string | number;
  // optional max width and height
  maxHeight?: string | number;
  maxWidth?: string | number;
  src: string;
  alt?: string;
  center?: boolean;
  dir?: "ltr" | "rtl";
  borderRadius?: string;
  spacing?: string;
  padding?: string;
  style?: React.CSSProperties;
  plain?: boolean;
  href?: string;
}

export enum ImgClassNamesEnum {
  img = "emailux-img",
}

export const Img: React.FC<ImgProps> = ({
  width,
  height,
  src = "",
  alt = "image",
  center = false,
  dir,
  spacing,
  padding,
  borderRadius,
  style,
  plain = false,
  href,
  maxWidth,
  maxHeight,
  ...props
}) => {
  const htmlContext = React.useContext(HtmlContext);
  const effectiveDir = dir ?? htmlContext?.dir;
  const effectiveSpacing = spacing ?? htmlContext?.defaultSpacing;
  const imgStyles: React.CSSProperties = {};
  if (borderRadius) {
    imgStyles.borderRadius = borderRadius;
  }
  if (plain) {
    imgStyles.verticalAlign = "bottom";
  }
  if (style) {
    Object.assign(imgStyles, style);
  }
  if (maxWidth) {
    imgStyles.maxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
  }
  if (maxHeight) {
    imgStyles.maxHeight = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;
  }

  const imgProps: React.CSSProperties = {};
  if (typeof width === "number") {
    imgProps.width = width;
  }
  if (typeof height === "number") {
    imgProps.height = height;
  }
  let effectiveAlign = center ? "center" : "left";
  if (effectiveDir === "rtl" && !center) {
    effectiveAlign = "right";
  }

  const renderAnchor = (html: any) => {
    return (
      <A href={href} noDecoration={true}>
        {html}
      </A>
    );
  };

  const renderImg = () => {
    return (
      <img
        className={ImgClassNamesEnum.img}
        src={src}
        alt={alt}
        {...imgProps}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...imgStyles,
        }}
        {...props}
      />
    );
  };

  const renderImage = () => {
    if (href) {
      return renderAnchor(renderImg());
    }
    return renderImg();
  };

  

  if (plain) {
    return padding ? (
      <span style={{ padding: padding }}>{renderImage()}</span>
    ) : (
      renderImage()
    );
  }

  const renderImageWithBlock = () => {
    return (
      <img
        className={ImgClassNamesEnum.img}
        src={src}
        alt={alt}
        {...imgProps}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...imgStyles,
        }}
        {...props}
      />
    );
  };

  // block image
  return (
    <table width="100%" border="0" cellPadding="0" cellSpacing="0">
      <tr>
        <td
          align={effectiveAlign}
          dir={effectiveDir}
          style={{
            textAlign: effectiveAlign,
            direction: effectiveDir,
            padding: padding ?? `0px 0px ${effectiveSpacing} 0px`,
          }}
        >
          {href ? renderAnchor(renderImageWithBlock()) : renderImageWithBlock()}
        </td>
      </tr>
    </table>
  );
};
