import * as React from "react";

export interface HtmlProps extends React.ComponentPropsWithoutRef<"html"> {
  children: React.ReactNode;
  dir?: string;
  lang?: string;
  defaultSpacing?: string;
  textColor?: string;
}

interface HtmlContextValue {
  dir?: string;
  defaultSpacing?: React.CSSProperties['paddingBottom'];
}

export const HtmlContext = React.createContext<HtmlContextValue | undefined>(
  undefined
);

export const Html: React.FC<HtmlProps> = ({
  children,
  dir = "ltr",
  lang = "en",
  defaultSpacing = "20px",
  textColor = "#000",
  ...props
}) => {

  const contextValue = React.useMemo<HtmlContextValue>(
    () => ({
      dir,
      defaultSpacing,
      textColor,
    }),
    [dir, defaultSpacing, textColor]
  );

  const vmlNamespaceProps = {
    // VML namespace for Outlook rendering.
    // React/TS don't model this as a standard HTML attribute, but it must be emitted verbatim.
    "xmlns:v": "urn:schemas-microsoft-com:vml",
    "xmlns:o": "urn:schemas-microsoft-com:office:office",
  } as const;

  // enable to apply Microsoft VML to force images to display in Outlook ’07 & ’10. 
  // xmlns:v="urn:schemas-microsoft-com:vml"
  return (
    <HtmlContext.Provider value={contextValue}>
      <html dir={dir} lang={lang} {...props} {...(vmlNamespaceProps as any)}>
        {children}
      </html>
    </HtmlContext.Provider>
  );
};
