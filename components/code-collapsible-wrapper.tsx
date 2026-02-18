"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

interface CodeCollapsibleWrapperProps
  extends React.ComponentProps<typeof Collapsible> {}

export const CodeCollapsibleWrapper = (props: CodeCollapsibleWrapperProps) => {
  const { className, children, ...rest } = props;

  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible
      className={cn("relative md:-mx-1", className)}
      collapsedHeight="256px"
      onOpenChange={({ open }) => setIsOpened(open)}
      open={isOpened}
      {...rest}
    >
      <div className="absolute top-1.5 right-10 z-10 flex items-center">
        <CollapsibleTrigger asChild>
          <Button className="text-muted-foreground" variant="ghost">
            {isOpened ? "Collapse" : "Expand"}
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="mt-6">
        <CollapsibleContent className="relative overflow-hidden [&>figure]:mt-0 [&>figure]:md:mx-0!">
          {children}
        </CollapsibleContent>
      </div>

      <CollapsibleTrigger
        className={cn(
          "absolute inset-x-0 -bottom-4",
          "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "flex h-20 cursor-pointer items-center justify-center",
          "bg-linear-to-b from-transparent via-50% via-card to-card",
          "font-medium text-muted-foreground text-sm",
          "rounded-b-lg transition-colors",
          "hover:text-foreground",
          "data-[state=open]:hidden"
        )}
      >
        {isOpened ? "Collapse" : "Expand"}
      </CollapsibleTrigger>
    </Collapsible>
  );
};
