This repository is an example of how to implement a blog/documentation site with mdx.

The mdx files are stored in:

```
src\routes\_docs\documents
```

## Getting Started

```
npm install
npm run dev
```

## Creating a file

To get started with creating a document, create a (\*.mdx) file in the `src\routes\_docs\documents`.
Make sure that the file exports the following at beginning of the file:

```tsx
export const meta = {
  title: "Getting Started",
  path: "GettingStarted",
};
```

The `title` will be name that's used in the sidebar.

The `file` will be the URL that is used when loading the page.

## Ordering the document (left) sidebar

The order of the files in the sidebar is the same as the order the files in the folder.

Hence, it's best you begin the files with numbers to order.

## Title highlight on (right) sidebar

There's an intersection observer component that looks at all `h2` elements on the page
and displays them all on the sidebar.

The sidebar will highlight the last h2 element that's displayed on the page.

## Indexing

The mdx files are automatically picked up in `-documentIndex.tsx` which uses `import.meta.glob` that acts as sort of an index.

The issue is that all of the `*.mdx` files are loaded to grab the meta data.

This is one way to go about the implementation without maintaining your own index in a json or ts file.
