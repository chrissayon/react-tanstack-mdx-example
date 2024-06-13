import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h3>
        Go to <Link to='/docs'>DOCS</Link>
      </h3>
    </div>
  );
}
