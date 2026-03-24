"use client";

import { createListCollection } from "@ark-ui/react";
import { useMemo, useState } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

export const description = "An interactive pie chart";

const desktopData = [
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "var(--chart-1)",
  },
  february: {
    label: "February",
    color: "var(--chart-2)",
  },
  march: {
    label: "March",
    color: "var(--chart-3)",
  },
  april: {
    label: "April",
    color: "var(--chart-4)",
  },
  may: {
    label: "May",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const monthCollection = createListCollection({
  items: desktopData.map((d) => ({
    value: d.month,
    label: String(
      chartConfig[d.month as keyof typeof chartConfig]?.label ?? d.month
    ),
  })),
});

function ChartPieInteractive() {
  const id = "pie-interactive";
  const [activeMonth, setActiveMonth] = useState(desktopData[0].month);

  const activeIndex = useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  );
  return (
    <Card className="flex flex-col" data-chart={id}>
      <ChartStyle config={chartConfig} id={id} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Pie Chart - Interactive</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
        <Select
          collection={monthCollection}
          onValueChange={(e) =>
            setActiveMonth(e.value[0] ?? desktopData[0].month)
          }
          value={[activeMonth]}
        >
          <SelectTrigger
            aria-label="Select a value"
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {monthCollection.items.map((item) => (
              <SelectItem
                className="rounded-lg [&_span]:flex"
                item={item}
                key={item.value}
              >
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-xs"
                    style={{
                      backgroundColor: `var(--color-${item.value})`,
                    }}
                  />
                  {item.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          className="mx-auto aspect-square w-full max-w-[300px]"
          config={chartConfig}
          id={id}
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              innerRadius={60}
              nameKey="month"
              strokeWidth={5}
            >
              {desktopData.map((entry, index) => (
                <Cell
                  fillOpacity={index === activeIndex ? 1 : 0.45}
                  key={entry.month}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        dominantBaseline="middle"
                        textAnchor="middle"
                        x={viewBox.cx}
                        y={viewBox.cy}
                      >
                        <tspan
                          className="fill-foreground font-bold text-3xl"
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          {desktopData[activeIndex].desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          className="fill-muted-foreground"
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartPieInteractive;
