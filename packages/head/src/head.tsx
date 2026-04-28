import * as React from "react";

export interface HeadProps {
  children: any;
  title?: string;
  lineHeight?: string;
  defaultCss?: ({ lineHeight }: { lineHeight?: string }) => string;
}

const DEFAULT_CSS_STYLES = ({ lineHeight = "" }: { lineHeight?: string }) => `
@charset "utf-8";
html {
  box-sizing: border-box;
  height: 100%;
  ${lineHeight ? `line-height: ${lineHeight};` : ''}
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
  padding: 0;
  ${lineHeight ? `line-height: ${lineHeight};` : ''}
}
table {
  line-height: inherit;
}
label, li, p, pre, input, textarea, select, code, table {
  ${lineHeight ? `line-height: ${lineHeight};` : ''}
  text-transform: none;
}
* {
  -webkit-text-size-adjust: none;
}
td {
  mso-line-height-rule: exactly;
}
`;

export const Head = ({
  children,
  title,
  defaultCss = DEFAULT_CSS_STYLES,
  lineHeight = "",
}: HeadProps) => {
  // Outlook-only blocks must be emitted as literal conditional comments in <head>.
  // React doesn't support comment nodes, so we inject them using a "style tag breakout":
  // - The string starts by closing the current <style>
  // - Emits the conditional-comment markup
  // - Opens a new <style> for the actual CSS
  // - The React-generated closing </style> closes that new <style>
  const outlookMsoOfficeSettings = `<!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->`;
  return (
    <head>
      {/* email metadata */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta name="x-apple-disable-message-reformatting" />
      {/* default css styles */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `</style>\n${outlookMsoOfficeSettings}\n<style type="text/css">\n${defaultCss({
            lineHeight,
          })}`,
        }}
      />
      
      {title !== undefined && <title>{title}</title>}
      {children}
    </head>
  );
};

Head.displayName = "Head";
