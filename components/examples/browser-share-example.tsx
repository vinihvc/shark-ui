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
  { name: "chrome", value: 394, label: "Chrome" },
  { name: "safari", value: 225, label: "Safari" },
  { name: "firefox", value: 293, label: "Firefox" },
  { name: "edge", value: 135, label: "Edge" },
  { name: "other", value: 78, label: "Other" },
];

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export const BrowserShareExample = (props: React.ComponentProps<"div">) => {
  return (
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
          <span className="ml-auto text-muted-foreground tabular-nums">
            26%
          </span>
        </div>
        <Progress value={26} />
      </CardFooter>
    </Card>
  );
};
