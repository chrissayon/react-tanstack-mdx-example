import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout/Layout";
import { DocumentIndex } from "./_docs/documents/-documentIndex";

export const Route = createFileRoute("/_docs")({
  loader: async () => {
    // Resolve document index promise
    return (await DocumentIndex).map((value) => {
      return { name: value.meta.title, link: value.meta.path };
    });
  },
  component: Docs,
});

function Docs() {
  const documentIndex = Route.useLoaderData();

  return (
    <Layout sidebarData={documentIndex}>
      <Outlet />
    </Layout>
  );
}
