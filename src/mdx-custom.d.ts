declare module "*.mdx" {
  import { Element, MDXProps } from "mdx/types";
  export default function MDXContent(props: MDXProps): Element;
  export const meta: {
    title: string;
    path: string;
  };
}
