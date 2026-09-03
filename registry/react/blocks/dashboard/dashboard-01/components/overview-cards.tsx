import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  CircleDollarSignIcon,
  MousePointerClickIcon,
  UserRoundCheckIcon,
  UsersIcon,
} from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { IconTile } from "@/registry/react/components/icon-tile";

const metrics = [
  {
    change: "+12.5%",
    icon: UsersIcon,
    label: "Total visitors",
    positive: true,
    value: "42,890",
  },
  {
    change: "+8.2%",
    icon: UserRoundCheckIcon,
    label: "New customers",
    positive: true,
    value: "3,284",
  },
  {
    change: "-1.4%",
    icon: MousePointerClickIcon,
    label: "Conversion rate",
    positive: false,
    value: "4.21%",
  },
  {
    change: "+16.8%",
    icon: CircleDollarSignIcon,
    label: "Net revenue",
    positive: true,
    value: "$128.4k",
  },
];

export const OverviewCards = () => (
  <section
    aria-label="Performance overview"
    className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
  >
    {metrics.map((metric) => (
      <Card key={metric.label}>
        <CardHeader className="flex-row items-start justify-between gap-3">
          <div>
            <CardDescription>{metric.label}</CardDescription>
            <CardTitle className="mt-2 font-semibold text-2xl tabular-nums tracking-[-0.02em]">
              {metric.value}
            </CardTitle>
          </div>
          <IconTile
            aria-hidden="true"
            className="size-9 border-transparent bg-muted shadow-none"
            size="sm"
          >
            <metric.icon aria-hidden="true" className="size-4" />
          </IconTile>
        </CardHeader>
        <CardContent>
          <Badge variant={metric.positive ? "secondary" : "outline"}>
            {metric.positive ? (
              <ArrowUpRightIcon aria-hidden="true" className="size-3" />
            ) : (
              <ArrowDownRightIcon aria-hidden="true" className="size-3" />
            )}
            {metric.change}
          </Badge>
          <span className="ms-2 text-muted-foreground text-xs">
            vs. last month
          </span>
        </CardContent>
      </Card>
    ))}
  </section>
);
