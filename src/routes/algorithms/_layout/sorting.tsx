import { createFileRoute } from "@tanstack/react-router";
import SideBar from "~/components/algorithms/SideBar";

export const Route = createFileRoute("/algorithms/_layout/sorting")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex">
      <SideBar title="Sorting" />
      <div className="flex-1">Hello "/algorithms/sorting/"!</div>
    </div>
  );
}
