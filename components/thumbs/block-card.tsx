import type React from "react";
import { cn } from "@/lib/utils";
import { Card, CardFooter, CardHeader } from "@/registry/react/components/card";

export interface BlockThumbCardProps extends React.ComponentProps<typeof Card> {
  /**
   * The subtitle/description of the card
   */
  subtitle: string;
  /**
   * The title of the card
   */
  title: string;
}

export const BlockThumbCard = (props: BlockThumbCardProps) => {
  const { title, subtitle, children, className, ...rest } = props;

  return (
    <Card
      aria-label={title}
      className={cn("size-full pb-0", className)}
      {...rest}
    >
      <CardHeader
        aria-hidden="true"
        className="flex h-16 flex-col"
        description={subtitle}
        title={title}
      />

      <CardFooter
        aria-hidden="true"
        className={cn(
          "h-40 w-full",
          "select-none",
          "flex items-center justify-center",
          "[&>div:not([class^='w-'],[class*='_w-'])]:w-full",
          "px-10 py-4"
        )}
        role="img"
      >
        {children}
      </CardFooter>
    </Card>
  );
};
