declare module "react";
declare module "react/jsx-runtime";
declare module "react-dom/server";

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


