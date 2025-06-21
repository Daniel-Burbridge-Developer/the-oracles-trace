import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import SideBar from "~/components/algorithms/SideBar";
import TopControls from "~/components/algorithms/TopControls";

export const Route = createFileRoute("/algorithms/_layout/pathfinding")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-svh min-w-full">
      <SideBar title="Pathfinding" />
      <div className="flex flex-1 flex-col">
        <TopControls />
        <div className="flex flex-1 flex-col gap-4 bg-blue-500 p-4">
          <h1 className="text-2xl font-bold"></h1>
        </div>
      </div>
    </div>
  );
}
