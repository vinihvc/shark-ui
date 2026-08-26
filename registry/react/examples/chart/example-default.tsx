"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const chartData = [
  { desktop: 186, mobile: 80, month: "January" },
  { desktop: 305, mobile: 200, month: "February" },
  { desktop: 237, mobile: 120, month: "March" },
  { desktop: 73, mobile: 190, month: "April" },
  { desktop: 209, mobile: 130, month: "May" },
  { desktop: 214, mobile: 140, month: "June" },
];

const chartConfig = {
  desktop: {
    color: "#2563eb",
    label: "Desktop",
  },
  mobile: {
    color: "#60a5fa",
    label: "Mobile",
  },
} satisfies ChartConfig;

const ChartDemo = () => (
  <ChartContainer
    className="min-h-[200px] w-full max-w-sm"
    config={chartConfig}
  >
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis
        axisLine={false}
        dataKey="month"
        tickFormatter={(value) => value.slice(0, 3)}
        tickLine={false}
        tickMargin={10}
      />
      <ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
    </BarChart>
  </ChartContainer>
);

export default ChartDemo;
