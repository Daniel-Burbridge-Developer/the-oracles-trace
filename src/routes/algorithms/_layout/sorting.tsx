import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import SideBar from "~/components/algorithms/SideBar";
import TopControls from "~/components/algorithms/TopControls";

export const Route = createFileRoute("/algorithms/_layout/sorting")({
  component: RouteComponent,
});

const generateDataSchema = z.object({
  size: z.number().min(1).max(100),
  speed: z.number().min(1).max(100),
});

const generateData = createServerFn()
  .validator(generateDataSchema)
  .handler(async ({ data: { size, speed } }) => {
    return {
      data: Array.from({ length: size }, () => Math.random()),
    };
  });

function RouteComponent() {
  const { data } = useServerFn(generateData);
  return (
    <div className="flex min-h-svh min-w-full">
      <SideBar title="Sorting" />
      <div className="flex flex-1 flex-col">
        <TopControls />
        <div className="flex flex-1 flex-col gap-4 bg-blue-500 p-4">
          <h1 className="text-2xl font-bold">{data.speed}</h1>
          <h1 className="text-2xl font-bold">{data.size}</h1>
        </div>
      </div>
    </div>
  );
}
