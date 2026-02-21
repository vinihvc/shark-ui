"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Bar, BarChart } from "recharts";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  type ChartConfig,
  ChartContainer,
} from "@/registry/react/components/chart";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

const chartConfig = {
  goal: {
    label: "Goal",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export const CardsActivityGoal = () => {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Card className="h-full gap-5">
      <CardHeader
        description="Set your daily activity goal."
        title="Move Goal"
      />
      <CardContent className="flex flex-1 flex-col">
        <div className="flex items-center justify-center gap-4">
          <Button
            className="size-7 rounded-full"
            disabled={goal <= 200}
            onClick={() => onClick(-10)}
            size="icon-md"
            variant="outline"
          >
            <MinusIcon />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="text-center">
            <div className="font-bold text-4xl tabular-nums tracking-tighter">
              {goal}
            </div>
            <div className="text-muted-foreground text-xs uppercase">
              Calories/day
            </div>
          </div>
          <Button
            className="size-7 rounded-full"
            disabled={goal >= 400}
            onClick={() => onClick(10)}
            size="icon-md"
            variant="outline"
          >
            <PlusIcon />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
        <div className="flex-1">
          <ChartContainer
            className="aspect-auto size-full"
            config={chartConfig}
          >
            <BarChart data={data}>
              <Bar dataKey="goal" fill="var(--color-goal)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          Set Goal
        </Button>
      </CardFooter>
    </Card>
  );
};
