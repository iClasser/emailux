import type * as React from 'react';

import { cssifyObject } from 'css-in-js-utils';
import { StyleObject } from 'css-in-js-utils/es/cssifyObject';

export type CssStyle = StyleObject;

export interface CssProps {
  style: CssStyle;
  selector?: string | string[];
}

export const Css: React.FC<Readonly<CssProps>> = ({
  style,
  selector,
}) => {
  if (!selector) {
    return null;
  }

  const declarations = cssifyObject(style);
  const selectors = Array.isArray(selector) ? selector : [selector];
  const rules = selectors
    .map((sel) => `${sel} { ${declarations} }`)
    .join('\n');

  return <style dangerouslySetInnerHTML={{ __html: rules }} />;
};
