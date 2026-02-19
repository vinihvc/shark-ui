"use client";

import { JsonTreeView as ArkJsonTreeView } from "@ark-ui/react/json-tree-view";
import { ChevronRightIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const JsonTreeView = (
  props: React.ComponentProps<typeof ArkJsonTreeView.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkJsonTreeView.Root
      className={cn(
        "w-full",
        "font-mono text-foreground",
        "**:data-[part=branch-content]:relative",
        "**:data-[part=branch-indent-guide]:absolute **:data-[part=branch-indent-guide]:start-[calc((var(--depth)-1)*1rem)] **:data-[part=branch-indent-guide]:h-full **:data-[part=branch-indent-guide]:w-px **:data-[part=branch-indent-guide]:bg-border",
        "**:data-[part=branch-control]:flex **:data-[part=branch-control]:select-none **:data-[part=branch-control]:ps-[calc((var(--depth)-1)*0.75rem)]",
        "**:data-[part=branch-control]:rounded-md **:data-[part=branch-control]:px-2",
        "**:data-[part=branch-control]:hover:bg-muted",
        "**:data-[part=branch-indicator]:me-1 **:data-[part=branch-indicator]:inline-flex **:data-[part=branch-indicator]:origin-center **:data-[part=branch-indicator]:items-center **:data-[part=branch-indicator]:justify-center [&_[data-part=branch-indicator][data-state=open]]:rotate-90",
        "**:data-[part=item]:relative **:data-[part=item]:flex **:data-[part=item]:rounded-md **:data-[part=item]:ps-[calc(((var(--depth)-1)*0.75rem)+0.75rem)]",
        "**:data-[part=item]:hover:bg-muted",
        "**:data-[part=item-text]:flex **:data-[part=item-text]:items-baseline",
        "**:data-[part=branch-text]:flex **:data-[part=branch-text]:items-baseline",
        className
      )}
      data-slot="json-tree-view"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <JsonTreeViewTree />
    </ArkJsonTreeView.Root>
  );
};

export const JsonTreeViewTree = (
  props: React.ComponentProps<typeof ArkJsonTreeView.Tree>
) => {
  const { className, ...rest } = props;

  return (
    <ArkJsonTreeView.Tree
      arrow={<ChevronRightIcon />}
      className={cn(
        "flex flex-col **:gap-1",
        "text-muted-foreground text-xs leading-7",
        "[&_svg]:size-4",
        "**:data-[type=string]:text-success",
        "**:data-[type=number]:text-info",
        "**:data-[type=boolean]:font-semibold **:data-[type=boolean]:text-warning",
        "**:data-[type=null]:font-semibold **:data-[type=null]:text-muted-foreground **:data-[type=null]:italic",
        "**:data-[kind=key]:font-medium **:data-[kind=key]:text-foreground",
        "**:data-[kind=colon]:mx-1 **:data-[kind=colon]:text-muted-foreground",
        className
      )}
      data-slot="json-tree-view-tree"
      {...rest}
    />
  );
};
