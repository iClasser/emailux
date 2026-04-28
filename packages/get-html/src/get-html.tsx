import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const getHtml = (
  EmailTemplate: any,
): {
  html: string | null;
  error: Error | null;
} => {
  try {
    if (!React.isValidElement(EmailTemplate)) {
      throw new Error("EmailTemplate is not a valid element");
    }
    const html = renderToStaticMarkup(EmailTemplate);
    return { html, error: null };
  } catch (error) {
    return { html: null, error: error as Error };
  }
};

getHtml.displayName = "getHtml";

export { getHtml };