import SyntaxHighlighter from 'react-syntax-highlighter';
import type { MDXComponents } from 'mdx/types';
import atelier from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-estuary-dark';
import styles from './MDX.module.scss';

/**
 * Custom MDX components used to add styling to MDX rendering
 *
 * Each item corresponds to the respective HTML tag
 */
export const MDX: MDXComponents = {
  pre: (props) => (
    <pre
      {...props}
      className={styles.pre}
    />
  ),

  code: (props) => (
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    <SyntaxHighlighter
      language={props.lang}
      style={atelier}
      useInlineStyles={true}
      /**
       * SyntaxHighlighter removes the "PreTag" as inline code blocks in text
       *  will have `pre` tags added that are not allowed
       */
      PreTag={({ children }: any) => <>{children}</>}
      CodeTag={({ children }: any) => (
        <code className={styles.code}>{children}</code>
      )}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ),
};
