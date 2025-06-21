import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import SideBar from "~/components/algorithms/SideBar";
import TopControls from "~/components/algorithms/TopControls";

export const Route = createFileRoute("/algorithms/_layout/sorting")({
  component: RouteComponent,
});

const getServerTime = createServerFn().handler(async ({ data }) => {
  return new Date().toISOString();
});

function RouteComponent() {
  const getServerTimeFn = useServerFn(getServerTime);
  const { data } = useQuery({
    queryKey: ["getServerTime", "sorting"],
    queryFn: getServerTimeFn,
  });

  return (
    <div className="flex min-h-svh min-w-full">
      <SideBar title="Sorting" />
      <div className="flex flex-1 flex-col">
        <TopControls />
        <div className="flex flex-1 flex-col gap-4 bg-blue-500 p-4">{data}</div>
      </div>
    </div>
  );
}
