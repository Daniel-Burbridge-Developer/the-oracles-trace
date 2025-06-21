import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/algorithms/_layout/game-theory")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/algorithms/_layout/game-theory"!</div>;
}
