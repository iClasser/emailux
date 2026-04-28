export interface BrandExample {
  id: string;
  name: string;
  type: string;
  brand: string;
  htmlContent: string;
  jsxCode: string;
  textContent: string;
}

export interface BrandCategory {
  id: string;
  name: string;
  examples: BrandExample[];
}



export type TabId = "jsx" | "preview" | "html" | "text";

export type EmailExample = BrandExample;