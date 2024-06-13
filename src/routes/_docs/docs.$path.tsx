import { createFileRoute } from "@tanstack/react-router";
import { IntersectionSidebar } from "@/components/Intersection/IntersectionSidebar";
import { MDX } from "@/components/MDX/MDX";
import { DocumentIndex } from "./documents/-documentIndex";
import styles from "./docs.$path.module.scss";

export const Route = createFileRoute("/_docs/docs/$path")({
  loader: async (context) => {
    const docsPath = context.params.path;
    const documentIndex = await DocumentIndex;
    const MarkdownDocument = documentIndex.find((value) => value.meta.path == docsPath);

    return MarkdownDocument!.default;
  },
  component: Docs,
});

function Docs() {
  const MarkdownDocument = Route.useLoaderData();

  return (
    <div className={styles.container}>
      <div className={styles.markdown}>
        <MarkdownDocument components={MDX} />
      </div>
      <div>
        <IntersectionSidebar className={styles.intersection} />
      </div>
    </div>
  );
}
