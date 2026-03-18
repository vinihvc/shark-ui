import type React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";

export interface BlockThumbCardProps extends React.ComponentProps<typeof Card> {
  /**
   * The description of the card
   */
  description: string;
  /**
   * The title of the card
   */
  title: string;
}

export const BlockThumbCard = (props: BlockThumbCardProps) => {
  const { title, description, children, className, ...rest } = props;

  return (
    <Card
      aria-label={title}
      className={cn("size-full bg-muted/48 pb-0", className)}
      {...rest}
    >
      <CardHeader
        aria-hidden="true"
        className="flex h-16 flex-col"
        description={description}
        title={title}
      />

      <CardContent
        aria-hidden="true"
        className={cn(
          "h-40 w-full",
          "flex items-center justify-center",
          "rounded-b-2xl border-t",
          "bg-card",
          "select-none",
          "[&>div:not([class^='w-'],[class*='_w-'])]:w-full",
          "px-10 py-4"
        )}
        role="img"
      >
        {children}
      </CardContent>
    </Card>
  );
};
