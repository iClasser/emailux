import React, { FC, useEffect, useRef } from "react";

interface RawHtmlProps {
  html: string;
}

const RawHtml: React.FC<RawHtmlProps> = ({ html }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !ref.current ||
      !html ||
      !html.trim() ||
      typeof html !== "string" ||
      !document
    )
      return;
    const fragment = document.createDocumentFragment();
    while (ref.current.childNodes[0]) {
      fragment.appendChild(ref.current.childNodes[0]);
    }
    ref.current.replaceWith(fragment);
  }, [ref, html]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export { RawHtml };
