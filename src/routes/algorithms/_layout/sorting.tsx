import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import SideBar from "~/components/algorithms/SideBar";
import TopControls from "~/components/algorithms/TopControls";
import { z } from "zod";
import { useState } from "react";

export const Route = createFileRoute("/algorithms/_layout/sorting")({
  component: RouteComponent,
});

const generateRandomNumbers = createServerFn()
  .validator(z.object({ count: z.number().min(1).max(999999) }))
  .handler(async ({ data }): Promise<number[]> => {
    const count = data.count;
    const numbers = [];
    for (let i = 0; i < count + 1; i++) {
      numbers.push(Math.floor(Math.random() * 10000));
    }
    return numbers;
  });

function RouteComponent() {
  const [count, setCount] = useState(100);

  const generateRandomNumbersFn = useServerFn(generateRandomNumbers);
  const { data } = useQuery({
    queryKey: ["generateRandomNumbers", "sorting", count],
    queryFn: () => generateRandomNumbersFn({ data: { count } }),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });

  return (
    <div className="flex min-h-svh min-w-full">
      <SideBar title="Sorting" />
      <div className="flex flex-1 flex-col">
        <TopControls />
        <div className="flex flex-1 flex-col gap-4 bg-blue-500 p-4">
          {data?.map((number, i) => <div key={i}>{`${i}\) ${number}`}</div>)}
        </div>
      </div>
    </div>
  );
}
