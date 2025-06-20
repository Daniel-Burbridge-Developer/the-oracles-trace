import { createFileRoute } from "@tanstack/react-router";
import SideBar from "~/components/algorithms/SideBar";

export const Route = createFileRoute("/algorithms/_layout/pathfinding/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex">
      <SideBar title="Pathfinding" />
      <div className="flex-1">Hello "/algorithms/pathfinding/"!</div>
    </div>
  );
}
