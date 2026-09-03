"use client";

import { ark } from "@ark-ui/react/factory";
import {
  TreeView as ArkTreeView,
  createTreeCollection as arkCreateTreeCollection,
  type TreeCollection as arkTreeCollection,
  useTreeViewContext as useArkTreeViewContext,
} from "@ark-ui/react/tree-view";
import { createContext } from "@ark-ui/react/utils";
import { CheckIcon, ChevronRightIcon, MinusIcon } from "lucide-react";
import type React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { checkboxVariants } from "@/registry/react/components/checkbox";

export const useTreeView = useArkTreeViewContext;

export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: React.JSX.ElementType | null;
  icon?: React.JSX.ElementType | null;
  id: string;
  name: string;
}

export const createTreeCollection = <T extends TreeNodeType>(
  options: Parameters<typeof arkCreateTreeCollection<T>>[0]
) =>
  arkCreateTreeCollection<T>({
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    ...options,
  });

export type TreeCollection = arkTreeCollection;

interface TreeViewContextProps {
  /**
   * Custom extension icons
   */
  fileIcons?: Record<string, React.JSX.ElementType | null>;
}

const [TreeViewContextProvider, _useTreeView] =
  createContext<TreeViewContextProps>({
    name: "TreeViewContext",
    providerName: "TreeView",
  });

interface TreeViewProps
  extends ArkTreeView.RootComponentProps,
    TreeViewContextProps {}

export const TreeView: ArkTreeView.RootComponent<TreeViewProps> = (props) => {
  const {
    fileIcons,
    lazyMount = true,
    unmountOnExit = true,
    className,
    ...rest
  } = props;

  return (
    <TreeViewContextProvider value={{ fileIcons }}>
      <ArkTreeView.Root
        className={cn(
          "[--indentation:--spacing(4)] [--item-gap:--spacing(2)]",
          "[--padding-block:--spacing(1.5)] [--padding-inline:--spacing(3)]",
          "[--icon-size:--spacing(4)]",
          "w-full",
          "flex flex-col gap-2",
          "text-foreground",
          className
        )}
        data-slot="tree-view"
        lazyMount={lazyMount}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </TreeViewContextProvider>
  );
};

export const TreeViewLabel = (
  props: React.ComponentProps<typeof ArkTreeView.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.Label
      className={cn(
        "select-none font-medium text-foreground text-sm",
        className
      )}
      data-slot="tree-view-label"
      {...rest}
    />
  );
};

export const TreeViewTree = (
  props: React.ComponentProps<typeof ArkTreeView.Tree>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.Tree
      className={cn(
        "flex flex-col text-sm",
        "[&_svg]:size-(--icon-size) [&_svg]:shrink-0",
        className
      )}
      data-slot="tree-view-tree"
      {...rest}
    />
  );
};

export interface NodeProviderProps<T extends TreeNodeType = TreeNodeType>
  extends ArkTreeView.NodeProviderProps<T> {}

export const TreeViewNode = <T extends TreeNodeType>(
  props: NodeProviderProps<T>
) => <ArkTreeView.NodeProvider data-slot="tree-view-node" {...props} />;

export const TreeViewBranch = (
  props: React.ComponentProps<typeof ArkTreeView.Branch>
) => (
  <ArkTreeView.Branch
    className={cn("relative")}
    data-slot="tree-view-branch"
    {...props}
  />
);

const treeViewControlVariants = tv({
  base: [
    "peer",
    "relative my-px",
    "flex items-center gap-(--item-gap)",
    "min-h-8 w-full",
    "py-(--padding-block) ps-[calc(var(--padding-inline)+var(--indentation)*(var(--depth)-1)+var(--icon-size)*(var(--depth)-1)*0.5)] pe-(--padding-inline)",
    "bg-transparent",
    "select-none text-start font-inherit text-muted-foreground",
    "rounded-md border-none",
    "cursor-pointer",
    "hover:bg-muted hover:text-foreground",
    "outline-none focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-2",
    "data-selected:bg-accent data-selected:text-accent-foreground",
    "data-focus:bg-muted data-focus:text-foreground",
    "data-disabled:opacity-64 data-disabled:grayscale",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ],
});

interface TreeViewBranchItemProps
  extends React.ComponentProps<typeof ArkTreeView.BranchControl>,
    Pick<TreeViewBranchTitleProps, "icon" | "expandedIcon"> {
  /**
   * Whether to show the expand/collapse chevron.
   *
   * @default false
   */
  showIndicator?: boolean;
}

export const TreeViewBranchItem = (props: TreeViewBranchItemProps) => {
  const {
    icon,
    expandedIcon,
    showIndicator = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkTreeView.BranchControl
      className={cn(treeViewControlVariants(), className)}
      data-slot="tree-view-branch-control"
      {...rest}
    >
      {showIndicator ? <TreeViewBranchIndicator /> : null}
      <TreeViewBranchTitle expandedIcon={expandedIcon} icon={icon}>
        {children}
      </TreeViewBranchTitle>
    </ArkTreeView.BranchControl>
  );
};

interface TreeViewBranchTitleProps
  extends React.ComponentProps<typeof ArkTreeView.BranchText> {
  /**
   * Expanded branch icon. Pass a component to show; omit or `null` to hide.
   *
   * @default null
   */
  expandedIcon?: React.JSX.ElementType | null;
  /**
   * Collapsed branch icon. Pass a component to show; omit or `null` to hide.
   *
   * @default null
   */
  icon?: React.JSX.ElementType | null;
}

const TreeViewBranchTitle = (props: TreeViewBranchTitleProps) => {
  const {
    icon: Icon,
    expandedIcon: ExpandedIcon,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkTreeView.NodeContext>
      {(nodeState) => (
        <>
          {nodeState.renaming ? (
            <TreeViewNodeInput />
          ) : (
            <ArkTreeView.BranchText
              className={cn(
                "flex flex-1 items-center gap-(--item-gap)",
                "overflow-hidden text-ellipsis whitespace-nowrap",
                className
              )}
              data-slot="tree-view-branch-title"
              {...rest}
            >
              {Icon && !nodeState.expanded ? (
                <TreeViewItemIcon>
                  <Icon />
                </TreeViewItemIcon>
              ) : null}
              {ExpandedIcon && nodeState.expanded ? (
                <TreeViewItemIcon>
                  <ExpandedIcon />
                </TreeViewItemIcon>
              ) : null}
              {children}
            </ArkTreeView.BranchText>
          )}
        </>
      )}
    </ArkTreeView.NodeContext>
  );
};

export const TreeViewBranchIndicator = (
  props: React.ComponentProps<typeof ArkTreeView.BranchIndicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.BranchIndicator
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        "text-muted-foreground",
        "origin-center transition-transform duration-150",
        "data-[state=open]:rotate-90",
        "[&_svg]:size-3.5 [&_svg]:shrink-0",
        "motion-reduce:transition-none!",
        className
      )}
      data-slot="tree-view-branch-indicator"
      {...rest}
    >
      <ChevronRightIcon className="size-3.5" />
    </ArkTreeView.BranchIndicator>
  );
};

export const TreeViewBranchContent = (
  props: React.ComponentProps<typeof ArkTreeView.BranchContent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkTreeView.BranchContent
      className={cn(
        "relative overflow-hidden",
        "data-[state=open]:animate-[expand_150ms_ease-out]",
        "data-[state=closed]:animate-[collapse_150ms_ease-out]",
        "motion-reduce:animate-none!",
        className
      )}
      data-slot="tree-view-branch-content"
      {...rest}
    >
      <TreeViewBranchIndentGuide />

      {children}
    </ArkTreeView.BranchContent>
  );
};

const TreeViewBranchIndentGuide = (
  props: React.ComponentProps<typeof ArkTreeView.BranchIndentGuide>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.BranchIndentGuide
      className={cn(
        "absolute z-1",
        "h-full w-px",
        "bg-border",
        "inset-s-[calc(var(--padding-inline)+var(--indentation)*(var(--depth)-1)+var(--icon-size)*0.5*var(--depth))]",
        "pointer-events-none",
        className
      )}
      data-slot="tree-view-branch-indent-guide"
      {...rest}
    />
  );
};

export const TreeViewContent = (
  props: React.ComponentProps<typeof ArkTreeView.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.Item
      className={cn(treeViewControlVariants(), className)}
      data-slot="tree-view-item"
      {...rest}
    />
  );
};

interface TreeViewItemProps
  extends React.ComponentProps<typeof TreeViewItemTitle> {
  /**
   * Leaf icon. Pass a component to show; omit or `null` to hide.
   * When `fileIcons` matches the node id extension, that mapping wins.
   *
   * @default null
   */
  icon?: React.JSX.ElementType | null;
}

export const TreeViewItem = (props: TreeViewItemProps) => {
  const { icon: Icon = null, className, children, ...rest } = props;

  const { fileIcons } = _useTreeView();

  const getFileIcon = (value: string): React.JSX.ElementType | null => {
    const extension = getFileExtension(value);
    const resolved = extension ? fileIcons?.[extension] : undefined;
    if (resolved !== undefined) {
      return resolved;
    }
    return Icon;
  };

  return (
    <ArkTreeView.NodeContext>
      {(nodeState) => {
        const ResolvedIcon = getFileIcon(nodeState.value);

        return (
          <>
            {ResolvedIcon ? (
              <TreeViewItemIcon>
                <ResolvedIcon />
              </TreeViewItemIcon>
            ) : null}

            {nodeState.renaming ? (
              <TreeViewNodeInput />
            ) : (
              <TreeViewItemTitle {...rest}>{children}</TreeViewItemTitle>
            )}
          </>
        );
      }}
    </ArkTreeView.NodeContext>
  );
};

const TreeViewItemIcon = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "in-[[data-slot=tree-view-item]:has([data-slot=tree-view-checkbox])]:hidden",
        className
      )}
      data-slot="tree-view-item-icon"
      {...rest}
    />
  );
};

const TreeViewItemTitle = (
  props: React.ComponentProps<typeof ArkTreeView.ItemText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.ItemText
      className={cn(
        "flex flex-1 items-center gap-(--item-gap)",
        "text-ellipsis whitespace-nowrap",
        "overflow-hidden",
        className
      )}
      data-slot="tree-view-item-title"
      {...rest}
    />
  );
};

export const TreeViewCheckbox = (
  props: React.ComponentProps<typeof ArkTreeView.NodeCheckbox>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.NodeCheckbox
      className={cn(checkboxVariants(), "[&_svg]:size-3!", className)}
      data-slot="tree-view-checkbox"
      {...rest}
    >
      <ArkTreeView.NodeCheckboxIndicator indeterminate={<MinusIcon />}>
        <CheckIcon />
      </ArkTreeView.NodeCheckboxIndicator>
    </ArkTreeView.NodeCheckbox>
  );
};

const TreeViewNodeInput = (
  props: React.ComponentProps<typeof ArkTreeView.NodeRenameInput>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.NodeRenameInput
      className={cn(
        "h-full min-w-0",
        "flex-1",
        "-my-px px-2 py-0",
        "text-sm",
        "border-primary bg-popover text-foreground",
        "rounded-md border",
        "selection:bg-primary/20 selection:text-foreground",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
        className
      )}
      data-slot="tree-view-node-rename-input"
      {...rest}
    />
  );
};

type CreateFileIconsArgs = Record<`.${string}`, React.JSX.ElementType | null>;

export const createFileIcons = (args: CreateFileIconsArgs) => ({ ...args });

const getFileExtension = (file: string) => {
  const name = file.includes(".")
    ? file.split(".").at(-1)?.toLowerCase()
    : null;

  return name ? `.${name}` : null;
};
