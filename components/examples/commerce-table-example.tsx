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
  { id: "1", name: "Vinicius V.", amount: 100, status: "success" },
  { id: "2", name: "Bruno S.", amount: 200, status: "processing" },
  { id: "3", name: "Clara M.", amount: 300, status: "failed" },
  { id: "4", name: "David P.", amount: 400, status: "pending" },
];

const BADGE_VARIANTS: Record<string, BadgeVariant> = {
  success: "success",
  processing: "info",
  failed: "destructive",
  pending: "warning",
} as const;
