import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import SideBar from "~/components/algorithms/SideBar";
import TopControls from "~/components/algorithms/TopControls";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import useSidebarStore from "~/stores/sidebarStore";

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

function RouteComponent() {
  const [count, setCount] = useState(1);
  const { setTitle, setContent, setFooter } = useSidebarStore();

  useEffect(() => {
    setTitle("Sorting");
    setContent(
      <div>
        <Input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>,
    );
    setFooter(<Button onClick={() => setCount(100)}>Generate</Button>);
  }, []);

  const generateRandomNumbersFn = useServerFn(generateRandomNumbers);
  const { data, isError, error } = useQuery({
    queryKey: ["generateRandomNumbers", "sorting", count],
    queryFn: () => generateRandomNumbersFn({ data: { count } }),
    staleTime: Infinity,
    retry: false,
    retryDelay: 0,
  });

  return (
    <div>
      {data?.map((number, i) => <div key={i}>{`${i + 1}. ${number}`}</div>)}
    </div>
  );
}
