"use client";

import { useCallback, useRef, useState } from "react";
import { SkeletonText } from "@/registry/react/components/skeleton";
import {
  Toc,
  type TocActiveChangeDetails,
  TocContent,
  TocItem,
  type TocItemData,
  TocLink,
  TocNav,
  TocTitle,
} from "@/registry/react/components/toc";
import {
  createTreeCollection,
  type NodeProviderProps,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchItem,
  TreeViewContent,
  TreeViewItem,
  TreeViewNode,
  TreeViewTree,
} from "@/registry/react/components/tree-view";

const Example = () => {
  const contentRef = useRef<HTMLElement>(null);
  const getScrollEl = useCallback(() => contentRef.current, []);
  const [expandedValue, setExpandedValue] = useState(["09-guides"]);
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const handleActiveChange = useCallback((details: TocActiveChangeDetails) => {
    const [activeId] = details.activeIds;
    if (!activeId) {
      return;
    }
    setSelectedValue([activeId]);
    setExpandedValue(ancestorValues(activeId));
  }, []);

  const handleExpandedChange = useCallback(
    (details: { expandedValue: string[] }) => {
      setExpandedValue(details.expandedValue);
    },
    []
  );

  return (
    <Toc
      autoScroll={false}
      className="size-full rounded-lg border p-4"
      items={items}
      onActiveChange={handleActiveChange}
      scrollEl={getScrollEl}
    >
      <TocContent
        className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20 h-80 overflow-y-auto pe-4"
        ref={contentRef}
      >
        <Article items={items} />
      </TocContent>
      <TocNav className="w-48">
        <TocTitle>On this page</TocTitle>
        <TreeView
          collection={collection}
          expandedValue={expandedValue}
          onExpandedChange={handleExpandedChange}
          selectedValue={selectedValue}
        >
          <TreeViewTree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeViewTree>
        </TreeView>
      </TocNav>
    </Toc>
  );
};

const Article = (props: {
  items: { depth: number; label: string; lines: number; value: string }[];
}) => (
  <>
    {props.items.map((item) => {
      const Heading = item.depth === 3 ? "h3" : "h2";

      return (
        <section className="flex flex-col gap-3 pb-8" key={item.value}>
          <Heading
            className={
              item.depth === 2 ? "font-semibold text-lg" : "font-medium"
            }
            id={item.value}
          >
            {item.label}
          </Heading>
          <SkeletonText
            aria-hidden="true"
            className="animate-none **:[div]:h-2"
            lines={item.lines}
          />
        </section>
      );
    })}
  </>
);

interface TocNode {
  children?: TocNode[];
  depth: number;
  id: string;
  lines: number;
  name: string;
}

const sections: TocNode[] = [
  {
    children: [
      { depth: 3, id: "09-quick-start", lines: 6, name: "Quick Start" },
      { depth: 3, id: "09-manual-setup", lines: 5, name: "Manual Setup" },
    ],
    depth: 2,
    id: "09-guides",
    lines: 10,
    name: "Guides",
  },
  {
    children: [
      { depth: 3, id: "09-toc-props", lines: 7, name: "Props" },
      { depth: 3, id: "09-toc-events", lines: 6, name: "Events" },
      { depth: 3, id: "09-toc-context", lines: 8, name: "Context" },
    ],
    depth: 2,
    id: "09-core-concepts",
    lines: 9,
    name: "Core Concepts",
  },
  {
    children: [
      { depth: 3, id: "09-root-api", lines: 7, name: "Root Provider" },
      {
        depth: 3,
        id: "09-custom-rendering",
        lines: 6,
        name: "Custom Rendering",
      },
    ],
    depth: 2,
    id: "09-advanced",
    lines: 11,
    name: "Advanced",
  },
];

const collection = createTreeCollection({
  nodeToString: (node: TocNode) => node.name,
  nodeToValue: (node: TocNode) => node.id,
  rootNode: {
    children: sections,
    depth: 0,
    id: "ROOT",
    lines: 0,
    name: "",
  },
});

const items: (TocItemData & { label: string; lines: number })[] =
  sections.flatMap((section) => [
    {
      depth: section.depth,
      label: section.name,
      lines: section.lines,
      value: section.id,
    },
    ...(section.children ?? []).map((child) => ({
      depth: child.depth,
      label: child.name,
      lines: child.lines,
      value: child.id,
    })),
  ]);

const ancestorValues = (activeId: string) => {
  const match = sections.find(
    (section) =>
      section.id === activeId ||
      (section.children ?? []).some((child) => child.id === activeId)
  );

  return match ? [match.id] : [];
};

const TreeNode = (props: NodeProviderProps<TocNode>) => {
  const { node, indexPath } = props;
  const item = items.find((entry) => entry.value === node.id);

  if (node.children) {
    return (
      <TreeViewNode indexPath={indexPath} node={node}>
        <TreeViewBranch>
          <TreeViewBranchItem showIndicator>{node.name}</TreeViewBranchItem>
          <TreeViewBranchContent>
            {node.children.map((child, index) => (
              <TreeNode
                indexPath={[...indexPath, index]}
                key={child.id}
                node={child}
              />
            ))}
          </TreeViewBranchContent>
        </TreeViewBranch>
      </TreeViewNode>
    );
  }

  if (!item) {
    return null;
  }

  return (
    <TreeViewNode indexPath={indexPath} node={node}>
      <TocItem className="contents" item={item}>
        <TreeViewContent asChild>
          <TocLink href={`#${item.value}`}>
            <TreeViewItem>{node.name}</TreeViewItem>
          </TocLink>
        </TreeViewContent>
      </TocItem>
    </TreeViewNode>
  );
};

export default Example;
