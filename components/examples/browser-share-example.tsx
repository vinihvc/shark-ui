"use client";

import { Cell, Label, Pie, PieChart } from "recharts";
import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/registry/react/components/chart";
import { Progress } from "@/registry/react/components/progress";

const data = [
  { label: "Chrome", name: "chrome", value: 394 },
  { label: "Safari", name: "safari", value: 225 },
  { label: "Firefox", name: "firefox", value: 293 },
  { label: "Edge", name: "edge", value: 135 },
  { label: "Other", name: "other", value: 78 },
];

const chartConfig = {
  chrome: {
    color: "var(--chart-1)",
    label: "Chrome",
  },
  edge: {
    color: "var(--chart-4)",
    label: "Edge",
  },
  firefox: {
    color: "var(--chart-3)",
    label: "Firefox",
  },
  other: {
    color: "var(--chart-5)",
    label: "Other",
  },
  safari: {
    color: "var(--chart-2)",
    label: "Safari",
  },
} satisfies ChartConfig;

export const BrowserShareExample = (props: React.ComponentProps<"div">) => (
  <Card {...props}>
    <CardHeader description="January - June 2026" title="Browser Share">
      <CardAction>
        <Badge variant="outline">Firefox</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      <ChartContainer
        className="mx-auto aspect-square max-h-[190px]"
        config={chartConfig}
      >
        <PieChart accessibilityLayer={false}>
          <Pie
            cx="50%"
            cy="50%"
            data={data}
            dataKey="value"
            innerRadius={50}
            nameKey="name"
            outerRadius={60.8}
            stroke="var(--background)"
          >
            {data.map((entry) => (
              <Cell
                fill={`var(--color-${entry.name})`}
                key={entry.name}
                strokeWidth={5}
              />
            ))}
            <Label
              content={({ viewBox }) =>
                viewBox && "cx" in viewBox && "cy" in viewBox ? (
                  <g>
                    <text
                      dominantBaseline="middle"
                      fill="var(--foreground)"
                      fontSize={24}
                      fontWeight="bold"
                      textAnchor="middle"
                      x={viewBox.cx}
                      y={(viewBox as { cy?: number }).cy as number}
                    >
                      <tspan
                        x={(viewBox as { cx?: number }).cx}
                        y={(viewBox as { cy?: number }).cy}
                      >
                        1,125
                      </tspan>
                    </text>
                    <text
                      dominantBaseline="middle"
                      fill="var(--muted-foreground)"
                      fontSize={12}
                      textAnchor="middle"
                      x={(viewBox as { cx?: number }).cx}
                      y={((viewBox as { cy?: number }).cy ?? 0) + 20}
                    >
                      Visitors
                    </text>
                  </g>
                ) : null
              }
              position="center"
            />
          </Pie>
          <ChartLegend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex flex-col items-stretch gap-2">
      <div className="flex items-center text-xs">
        <span className="font-medium">Firefox</span>
        <span className="ml-auto text-muted-foreground tabular-nums">26%</span>
      </div>
      <Progress value={26} />
    </CardFooter>
  </Card>
);
