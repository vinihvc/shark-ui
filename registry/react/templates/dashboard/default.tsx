"use client";

import Link from "next/link";
import { Bar, BarChart } from "recharts";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
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
} from "@/registry/react/components/chart";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  Sidebar as SidebarRoot,
} from "@/registry/react/components/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const DASHBOARD_NAV = [
  { label: "Overview", href: "#" },
  { label: "Analytics", href: "#" },
  { label: "Products", href: "#" },
  { label: "Orders", href: "#" },
];

const DASHBOARD_OTHER = [
  { label: "Settings", href: "#" },
  { label: "Support", href: "#" },
];

const CHANNEL_DATA = [
  { channels: "Facebook", percent: "28%", total: "6,958" },
  { channels: "Instagram", percent: "23%", total: "5,716" },
  { channels: "Google", percent: "32%", total: "7,952" },
];

const CHART_DATA = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 180 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 220 },
  { name: "Fri", value: 200 },
  { name: "Sat", value: 280 },
  { name: "Sun", value: 240 },
];

const chartConfig = {
  value: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const DashboardTemplate = () => {
  return (
    <SidebarProvider className="min-h-svh">
      <SidebarRoot
        className="sticky top-0 z-30 hidden h-svh flex-col lg:flex"
        collapsible="none"
      >
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-2 py-3">
            <span className="font-semibold">Catalyst</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {DASHBOARD_NAV.map(({ label, href }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton asChild isActive={label === "Overview"}>
                      <Link href={href}>{label}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Others</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {DASHBOARD_OTHER.map(({ label, href }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton asChild>
                      <Link href={href}>{label}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t">
          <div className="flex items-center gap-3 px-2 py-2">
            <Avatar size="sm">
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-0 overflow-hidden">
              <span className="truncate font-medium text-sm">James Brown</span>
              <span className="truncate text-muted-foreground text-xs">
                james@example.com
              </span>
            </div>
          </div>
        </SidebarFooter>
      </SidebarRoot>
      <SidebarInset>
        <div className="flex flex-col gap-6 p-6">
          <div>
            <h1 className="font-semibold text-2xl">Welcome back to Catalyst</h1>
            <p className="text-muted-foreground">Filter by 1D 1W 1M 3M 1Y</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
                <CardTitle className="font-medium text-sm">
                  Total Sales
                </CardTitle>
                <Badge variant="secondary">+2%</Badge>
              </CardHeader>
              <CardContent>
                <span className="font-semibold text-2xl">$128.32</span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
                <CardTitle className="font-medium text-sm">
                  Online Store
                </CardTitle>
                <Badge variant="secondary">+4.5%</Badge>
              </CardHeader>
              <CardContent>
                <span className="font-semibold text-2xl">$52.12</span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
                <CardTitle className="font-medium text-sm">
                  Total Visitors
                </CardTitle>
                <Badge variant="destructive">-1.4%</Badge>
              </CardHeader>
              <CardContent>
                <span className="font-semibold text-2xl">237,456</span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
                <CardTitle className="font-medium text-sm">
                  Conversion Rate
                </CardTitle>
                <Badge variant="secondary">+2.1%</Badge>
              </CardHeader>
              <CardContent>
                <span className="font-semibold text-2xl">16.9%</span>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Visitors</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-48 w-full" config={chartConfig}>
                  <BarChart accessibilityLayer data={CHART_DATA}>
                    <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Visitors Channels</CardTitle>
                <CardDescription>78% vs last week</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Channels</TableHead>
                      <TableHead>Percent</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {CHANNEL_DATA.map((row) => (
                      <TableRow key={row.channels}>
                        <TableCell>{row.channels}</TableCell>
                        <TableCell>{row.percent}</TableCell>
                        <TableCell>{row.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardTemplate;
