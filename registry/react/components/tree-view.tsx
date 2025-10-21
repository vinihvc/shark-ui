"use client";

import { TreeView as ArkTreeView } from "@ark-ui/react/tree-view";
import { ChevronRight } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const TreeView = (
  props: React.ComponentProps<typeof ArkTreeView.Root>
) => <ArkTreeView.Root {...props} />;

export const TreeViewLabel = (
  props: React.ComponentProps<typeof ArkTreeView.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.Label
      className={cn("font-semibold text-sm", className)}
      {...rest}
    />
  );
};

export const TreeViewTree = (
  props: React.ComponentProps<typeof ArkTreeView.Tree>
) => {
  const { className, ...rest } = props;

  return <ArkTreeView.Tree className={cn("mt-5 w-60", className)} {...rest} />;
};

export const TreeViewNodeProvider = (
  props: React.ComponentProps<typeof ArkTreeView.NodeProvider>
) => <ArkTreeView.NodeProvider {...props} />;

export const TreeViewBranch = (
  props: React.ComponentProps<typeof ArkTreeView.Branch>
) => <ArkTreeView.Branch {...props} />;

export const TreeViewBranchControl = (
  props: React.ComponentProps<typeof ArkTreeView.BranchControl>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.BranchControl
      className={cn(
        "min-h-8",
        "flex items-center gap-2",
        "ps-[calc(var(--depth)*var(--spacing)*4)] pe-4",
        "select-none",
        "rounded-sm",
        "hover:bg-accent/50",
        "focus:outline-1 focus:outline-muted-foreground focus:outline-offset-[-1px]",
        "data-[selected]:bg-accent",
        "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-50",
        className
      )}
      {...rest}
    />
  );
};

export const TreeViewBranchText = (
  props: React.ComponentProps<typeof ArkTreeView.BranchText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.BranchText
      className={cn("flex flex-1 items-center gap-2", className)}
      {...rest}
    />
  );
};

export const TreeViewBranchIndicator = (
  props: React.ComponentProps<typeof ArkTreeView.BranchIndicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.BranchIndicator
      className={cn(
        "flex items-center data-[state=open]:[&_svg]:rotate-90",
        className
      )}
      {...rest}
    >
      <ChevronRight />
    </ArkTreeView.BranchIndicator>
  );
};

export const TreeViewBranchContent = (
  props: React.ComponentProps<typeof ArkTreeView.BranchContent>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.BranchContent
      className={cn(
        "relative isolate",
        "max-w-full",
        "overflow-hidden",
        "data-[state=closed]:animate-slide-up",
        "data-[state=open]:animate-slide-down",
        className
      )}
      {...rest}
    />
  );
};

export const TreeViewBranchIndentGuide = (
  props: React.ComponentProps<typeof ArkTreeView.BranchIndentGuide>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.BranchIndentGuide
      className={cn(
        "absolute z-0",
        "h-full",
        "border-accent border-l",
        "translate-x-[calc(var(--depth)*1.25rem)]",
        className
      )}
      {...rest}
    />
  );
};

export const TreeViewItem = (
  props: React.ComponentProps<typeof ArkTreeView.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.Item
      className={cn(
        "relative",
        "min-h-8",
        "flex items-center gap-2",
        "ps-[calc(var(--depth)*var(--spacing)*4)] pe-4",
        "select-none",
        "rounded-sm",
        "focus:outline-1 focus:outline-muted-foreground focus:outline-offset-[-1px]",
        "hover:bg-accent/50",
        "data-[selected]:bg-accent",
        "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-50",
        className
      )}
      {...rest}
    />
  );
};

export const TreeViewItemIndicator = (
  props: React.ComponentProps<typeof ArkTreeView.ItemIndicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.ItemIndicator
      className={cn("flex items-center justify-center", className)}
      {...rest}
    />
  );
};

export const TreeViewItemText = (
  props: React.ComponentProps<typeof ArkTreeView.ItemText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.ItemText
      className={cn("flex flex-1 items-center gap-2", className)}
      {...rest}
    />
  );
};
