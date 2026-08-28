"use client";

import { EllipsisIcon } from "lucide-react";
import { cn } from "tailwind-variants";
import { Badge, type BadgeVariant } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

export const CommerceTableExample = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <Card className={cn("[--space:--spacing(2)]", className)} {...rest}>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {DATA.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell className="text-center">{row.amount}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    className="capitalize"
                    variant={BADGE_VARIANTS[row.status]}
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button size="icon-sm" tabIndex={-1} variant="outline">
                    <EllipsisIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const DATA = [
  { amount: 100, id: "1", name: "Vinicius V.", status: "success" },
  { amount: 200, id: "2", name: "Bruno S.", status: "processing" },
  { amount: 300, id: "3", name: "Clara M.", status: "failed" },
  { amount: 400, id: "4", name: "David P.", status: "pending" },
];

const BADGE_VARIANTS: Record<string, BadgeVariant> = {
  failed: "destructive",
  pending: "warning",
  processing: "info",
  success: "success",
} as const;
