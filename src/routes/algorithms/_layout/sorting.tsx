import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import SideBar from "~/components/algorithms/SideBar";
import TopControls from "~/components/algorithms/TopControls";
import { z } from "zod";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const Route = createFileRoute("/algorithms/_layout/sorting")({
  component: RouteComponent,
});

const MIN_COUNT = 1;
const MAX_COUNT = 10;

const ConstrainedCount = z.object({
  count: z
    .number()
    .min(MIN_COUNT, { message: `Count must be at least ${MIN_COUNT}` })
    .max(MAX_COUNT, { message: `Count must be at most ${MAX_COUNT}` })
    .describe("The number of random numbers to generate"),
});

const generateRandomNumbers = createServerFn()
  .validator((count: unknown) => {
    const result = ConstrainedCount.safeParse(count);
    if (!result.success) {
      const msg = result.error.issues.map((i) => i.message).join("\n");
      const err = new Error(msg);
      err.name = "Outside of Bounds";
      err.stack = msg;
      throw err;
    }
    return result.data;
  })
  .handler(async ({ data }): Promise<number[]> => {
    const count = data.count;
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * 10000));
    }
    return numbers;
  });

const SortingAlgorithms = {
  bubbleSort: {
    name: "Bubble Sort",
    description:
      "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    steps: [
      {
        description:
          "Compare the first two elements and swap them if they are in the wrong order.",
      },
    ],
    options: {
      // options to modify the algorithm
    },
  },
};

function RouteComponent() {
  const [count, setCount] = useState(1);

  const generateRandomNumbersFn = useServerFn(generateRandomNumbers);
  const { data, isError, error } = useQuery({
    queryKey: ["generateRandomNumbers", "sorting", count],
    queryFn: () => generateRandomNumbersFn({ data: { count } }),
    staleTime: Infinity,
    retry: false,
    retryDelay: 0,
  });

  return (
    <div className="flex min-h-svh min-w-full">
      <SideBar title="Sorting" />
      <div className="flex flex-1 flex-col">
        <TopControls />
        <div className="flex flex-row gap-4">
          <Input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value));
            }}
          />
          <Button onClick={() => setCount(100)}>Generate</Button>
        </div>
        {isError && <div className="text-red-500">{error?.message}</div>}
        <div className="flex flex-1 flex-col gap-4 bg-blue-500 p-4">
          {data?.map((number, i) => <div key={i}>{`${i + 1}. ${number}`}</div>)}
        </div>
      </div>
    </div>
  );
}
