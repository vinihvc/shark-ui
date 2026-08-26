"use client";

import { JsonTreeView as ArkJsonTreeView } from "@ark-ui/react/json-tree-view";
import { ChevronRightIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

type JsonTreeViewProps = React.ComponentProps<typeof ArkJsonTreeView.Root> & {
  renderValue?: React.ComponentProps<
    typeof ArkJsonTreeView.Tree
  >["renderValue"];
};

export const JsonTreeView = (props: JsonTreeViewProps) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    className,
    renderValue,
    ...rest
  } = props;

  return (
    <ArkJsonTreeView.Root
      className={cn(
        "w-full min-w-0",
        "font-mono text-foreground",
        "**:data-[part=branch-content]:relative",
        "**:data-[part=branch-indent-guide]:absolute **:data-[part=branch-indent-guide]:inset-s-[calc((var(--depth)-1)*1rem)] **:data-[part=branch-indent-guide]:h-full **:data-[part=branch-indent-guide]:w-px **:data-[part=branch-indent-guide]:bg-border",
        "**:data-[part=branch-control]:flex **:data-[part=branch-control]:min-w-0 **:data-[part=branch-control]:max-w-full **:data-[part=branch-control]:select-none **:data-[part=branch-control]:overflow-hidden **:data-[part=branch-control]:ps-[calc((var(--depth)-1)*0.75rem)]",
        "**:data-[part=branch-control]:rounded-md **:data-[part=branch-control]:px-2",
        "**:data-[part=branch-control]:hover:bg-muted",
        "**:data-[part=branch-indicator]:me-1 **:data-[part=branch-indicator]:inline-flex **:data-[part=branch-indicator]:shrink-0 **:data-[part=branch-indicator]:origin-center **:data-[part=branch-indicator]:items-center **:data-[part=branch-indicator]:justify-center [&_[data-part=branch-indicator][data-state=open]]:rotate-90",
        "**:data-[part=item]:relative **:data-[part=item]:flex **:data-[part=item]:min-w-0 **:data-[part=item]:max-w-full **:data-[part=item]:overflow-hidden **:data-[part=item]:rounded-md **:data-[part=item]:ps-[calc(((var(--depth)-1)*0.75rem)+0.75rem)]",
        "**:data-[part=item]:hover:bg-muted",
        "**:data-[part=item-text]:flex **:data-[part=item-text]:min-w-0 **:data-[part=item-text]:max-w-full **:data-[part=item-text]:flex-1 **:data-[part=item-text]:items-baseline **:data-[part=item-text]:overflow-hidden",
        "**:data-[part=branch-text]:flex **:data-[part=branch-text]:min-w-0 **:data-[part=branch-text]:max-w-full **:data-[part=branch-text]:flex-1 **:data-[part=branch-text]:items-baseline **:data-[part=branch-text]:overflow-hidden",
        "[&_[data-part=item-text]>[data-kind=key]]:min-w-0 [&_[data-part=item-text]>[data-kind=key]]:max-w-[40%] [&_[data-part=item-text]>[data-kind=key]]:shrink [&_[data-part=item-text]>[data-kind=key]]:truncate",
        "[&_[data-part=item-text]>[data-kind=colon]]:shrink-0",
        "[&_[data-part=item-text]>[data-kind=preview]]:min-w-0 [&_[data-part=item-text]>[data-kind=preview]]:flex-1 [&_[data-part=item-text]>[data-kind=preview]]:truncate",
        "[&_[data-part=branch-text]>[data-kind=key]]:min-w-0 [&_[data-part=branch-text]>[data-kind=key]]:max-w-[40%] [&_[data-part=branch-text]>[data-kind=key]]:shrink [&_[data-part=branch-text]>[data-kind=key]]:truncate",
        "[&_[data-part=branch-text]>[data-kind=colon]]:shrink-0",
        "[&_[data-part=branch-text]>[data-kind=preview]]:min-w-0 [&_[data-part=branch-text]>[data-kind=preview]]:flex-1 [&_[data-part=branch-text]>[data-kind=preview]]:truncate",
        className
      )}
      data-slot="json-tree-view"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <JsonTreeViewTree renderValue={renderValue} />
    </ArkJsonTreeView.Root>
  );
};

const JsonTreeViewTree = (
  props: React.ComponentProps<typeof ArkJsonTreeView.Tree>
) => {
  const { className, ...rest } = props;

  return (
    <ArkJsonTreeView.Tree
      arrow={<ChevronRightIcon className="size-3.5" />}
      className={cn(
        "flex w-full min-w-0 flex-col **:gap-1",
        "text-muted-foreground text-xs leading-7",
        "[&_svg]:size-3.5",
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
