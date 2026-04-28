import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const getText = (EmailTemplate: any, options? : {
  showUrlOnly?: boolean;
}): {
  text: string | null;
  error: Error | null;
} => {
  try {
    if(!React.isValidElement(EmailTemplate)) {
      throw new Error("EmailTemplate is not a valid element");
    }
    const html = renderToStaticMarkup(EmailTemplate);
    const text = convertHtmlToText(html, options);
    return { text: text, error: null };
  } catch (error) {
    return { text: null, error: error as Error };
  }
};

function convertHtmlToText(html: string, options? : {
  showUrlOnly?: boolean;
}): string {
  let text = html;

  // Remove HTML comments
  text = text.replace(/<!--[\s\S]*?-->/gi, "");

  // Remove head, style and script contents entirely
  text = text
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");

  // Remove preheader inside body: <h5 id="preHeader"> ... </h5>
  text = text.replace(/<h5[^>]*\bid=["']preHeader["'][^>]*>[\s\S]*?<\/h5>/gi, "");

  // Line breaks for explicit <br>
  text = text.replace(/<br\s*\/?\s*>/gi, "\n");

  // Convert links with options:
  // - showUrlOnly: output only the (possibly shortened) URL, no caption
  text = text.replace(
    /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_match, href, label) => {
      const cleanedLabel = label.replace(/<[^>]+>/g, "").trim();
      const resolvedHref = String(href);
      let effectiveUrl = resolvedHref;
      if (options && options.showUrlOnly) {
        return effectiveUrl;
      }
      if (!cleanedLabel) return effectiveUrl;
      if (cleanedLabel === resolvedHref || cleanedLabel === effectiveUrl) return effectiveUrl;
      return `${cleanedLabel} (${effectiveUrl})`;
    }
  );

  // Lists: begin list items on their own line with a dash
  text = text.replace(/<li[^>]*>\s*/gi, "\n- ").replace(/<\/li>/gi, "");

  // Tables: treat cells as space-separated and rows as newline-separated
  text = text
    .replace(/<t[dh][^>]*>/gi, " ")
    .replace(/<\/t[dh]>/gi, " ")
    .replace(/<tr[^>]*>/gi, "")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<table[^>]*>/gi, "\n")
    .replace(/<\/table>/gi, "\n");

  // Block-level elements: ensure they end with a newline
  const blockTags = [
    "p","div","section","article","header","footer","address",
    "h1","h2","h3","h4","h5","h6","blockquote","pre","ul","ol",
    "thead","tbody","tfoot"
  ];
  for (const tag of blockTags) {
    const closeTag = new RegExp(`<\\/${tag}>`, "gi");
    text = text.replace(closeTag, "\n");
  }

  // Horizontal rules -> newline
  text = text.replace(/<hr\b[^>]*\/?\s*>/gi, "\n");

  // Strip any remaining tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode common HTML entities and numeric entities
  text = decodeEntities(text);

  // Normalize whitespace for SMS: collapse spaces and reduce multiple newlines
  text = text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/[ \t]*\n[ \t]*/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();

  return text;
}

function decodeEntities(input: string): string {
  const named: Record<string, string> = {
    nbsp: " ",
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
  };

  return input
    .replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (_m, entity: string) => {
      if (entity[0] === "#") {
        if (entity[1] && entity[1].toLowerCase() === "x") {
          const codePoint = parseInt(entity.slice(2), 16);
          return String.fromCharCode(codePoint);
        }
        const codePoint = parseInt(entity.slice(1), 10);
        return String.fromCharCode(codePoint);
      }
      const key = entity.toLowerCase();
      return Object.hasOwn(named, key)
        ? named[key as keyof typeof named]
        : `&${entity};`;
    })
    .replace(/\u00A0/g, " ");
}

getText.displayName = "getText";

export { getText };
