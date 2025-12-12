"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";

export const ThemePreview = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div className={cn("space-y-4 rounded-lg border p-6", className)} {...rest}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">Total Revenue</h3>
          <p className="text-muted-foreground text-sm">$15,231.89</p>
        </div>
        <Badge variant="secondary">+20.1%</Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-normal text-muted-foreground text-sm">
              Subscriptions
            </CardTitle>
            <CardDescription className="font-semibold text-2xl text-foreground">
              +2,350
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-normal text-muted-foreground text-sm">
              Active Now
            </CardTitle>
            <CardDescription className="font-semibold text-2xl text-foreground">
              573
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex gap-2">
        <Button size="sm">View More</Button>
        <Button size="sm" variant="outline">
          Export
        </Button>
      </div>
    </div>
  );
};
