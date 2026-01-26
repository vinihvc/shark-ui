"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { Separator } from "@/registry/react/components/separator";

interface CodeCollapsibleWrapperProps
  extends React.ComponentProps<typeof Collapsible> {}

export const CodeCollapsibleWrapper = (props: CodeCollapsibleWrapperProps) => {
  const { className, children, ...rest } = props;

  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible
      className={cn("group/collapsible relative md:-mx-1", className)}
      collapsedHeight="256px"
      lazyMount={false}
      onOpenChange={({ open }) => setIsOpened(open)}
      open={isOpened}
      unmountOnExit={false}
      {...rest}
    >
      <div className="absolute top-1.5 right-10 z-10 flex items-center">
        <CollapsibleTrigger asChild>
          <Button className="text-muted-foreground" variant="ghost">
            {isOpened ? "Collapse" : "Expand"}
          </Button>
        </CollapsibleTrigger>

        <Separator className="mx-1.5 h-5" orientation="vertical" />
      </div>

      <CollapsibleContent className="relative mt-6 h-full overflow-hidden [&>figure]:mt-0 [&>figure]:md:mx-0!">
        {children}
      </CollapsibleContent>

      <CollapsibleTrigger
        className={cn(
          "absolute inset-x-0 -bottom-4",
          "flex h-20 cursor-pointer items-center justify-center",
          "bg-linear-to-b from-transparent via-50% via-muted to-muted",
          "font-medium text-muted-foreground text-sm",
          "rounded-b-lg transition-colors",
          "hover:text-foreground",
          "group-data-open/collapsible:hidden"
        )}
      >
        {isOpened ? "Collapse" : "Expand"}
      </CollapsibleTrigger>
    </Collapsible>
  );
};
