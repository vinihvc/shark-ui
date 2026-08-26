"use client";

import type { ComponentProps } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const chartData = [
  { date: "May 26", visitors: 1860 },
  { date: "May 31", visitors: 2240 },
  { date: "Jun 05", visitors: 2180 },
  { date: "Jun 10", visitors: 2910 },
  { date: "Jun 15", visitors: 2680 },
  { date: "Jun 20", visitors: 3420 },
  { date: "Jun 24", visitors: 3890 },
];

const chartConfig = {
  visitors: {
    color: "var(--primary)",
    label: "Visitors",
  },
} satisfies ChartConfig;

const VisitorsTooltip = (props: ComponentProps<typeof ChartTooltipContent>) => (
  <ChartTooltipContent {...props} />
);

export const VisitorsChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Visitors</CardTitle>
      <CardDescription>Unique visitors over the last 30 days</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer className="h-[300px] w-full" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{ left: -16, right: 8 }}
        >
          <defs>
            <linearGradient id="visitors-fill" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-visitors)"
                stopOpacity={0.28}
              />
              <stop
                offset="95%"
                stopColor="var(--color-visitors)"
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="date"
            tickLine={false}
            tickMargin={12}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={8} width={48} />
          <ChartTooltip content={VisitorsTooltip} />
          <Area
            dataKey="visitors"
            fill="url(#visitors-fill)"
            stroke="var(--color-visitors)"
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ChartContainer>
    </CardContent>
  </Card>
);
