"use client";

import { ChevronRightIcon, FileCode2Icon, FolderIcon } from "lucide-react";
import React from "react";
import type { CompositionFileTreeNode } from "@/lib/registry";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

interface CompositionFileTreeProps {
  activePath: string;
  label: string;
  onSelect: (path: string) => void;
  tree: CompositionFileTreeNode[];
}

interface TreeNodesProps extends CompositionFileTreeProps {
  depth?: number;
}

interface FileButtonProps {
  active: boolean;
  depth: number;
  name: string;
  onSelect: (path: string) => void;
  path: string;
}

const FileButton = ({
  active,
  depth,
  name,
  onSelect,
  path,
}: FileButtonProps) => {
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const selectedPath = event.currentTarget.dataset.path;
      if (selectedPath) {
        onSelect(selectedPath);
      }
    },
    [onSelect]
  );

  return (
    <button
      aria-current={active ? "true" : undefined}
      className={cn(
        "flex h-7 w-full items-center gap-1.5 rounded-sm pe-2 text-start text-muted-foreground text-sm hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
        active && "bg-muted font-medium text-foreground"
      )}
      data-path={path}
      onClick={handleClick}
      style={{ paddingInlineStart: `${depth * 12 + 20}px` }}
      type="button"
    >
      <FileCode2Icon
        aria-hidden="true"
        className="size-3.5 shrink-0 opacity-70"
      />
      <span className="truncate">{name}</span>
    </button>
  );
};

const TreeNodes = ({
  activePath,
  depth = 0,
  label,
  onSelect,
  tree,
}: TreeNodesProps) => (
  <ul aria-label={depth === 0 ? `${label} files` : undefined}>
    {tree.map((node) => {
      if (node.children) {
        return (
          <li key={`${depth}-${node.name}`}>
            <Collapsible defaultOpen>
              <CollapsibleTrigger
                className="flex h-7 w-full items-center gap-1 rounded-sm pe-2 text-start text-muted-foreground text-sm hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32"
                style={{ paddingInlineStart: `${depth * 12 + 8}px` }}
              >
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-3 shrink-0 opacity-70 transition-transform group-data-[state=open]/collapsible:rotate-90"
                />
                <FolderIcon
                  aria-hidden="true"
                  className="size-3.5 shrink-0 opacity-70"
                />
                <span className="truncate">{node.name}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <TreeNodes
                  activePath={activePath}
                  depth={depth + 1}
                  label={label}
                  onSelect={onSelect}
                  tree={node.children}
                />
              </CollapsibleContent>
            </Collapsible>
          </li>
        );
      }

      if (!node.path) {
        return null;
      }

      return (
        <li key={node.path}>
          <FileButton
            active={activePath === node.path}
            depth={depth}
            name={node.name}
            onSelect={onSelect}
            path={node.path}
          />
        </li>
      );
    })}
  </ul>
);

export const CompositionFileTree = (props: CompositionFileTreeProps) => (
  <TreeNodes {...props} />
);
