import { createFileRoute } from "@tanstack/react-router";
import SideBar from "~/components/algorithms/SideBar";

export const Route = createFileRoute("/algorithms/_layout/searching")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex">
      <SideBar title="Searching" />
      <div className="flex-1">Hello "/algorithms/searching/"!</div>
    </div>
  );
}
