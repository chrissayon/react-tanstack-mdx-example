import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs/docs/")({
  beforeLoad: () => {
    throw redirect({
      to: "/docs/$path",
      params: { path: "getting-started" },
    });
  },
});
