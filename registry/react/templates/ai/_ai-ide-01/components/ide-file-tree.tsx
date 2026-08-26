"use client";

import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";

import type React from "react";
import { useCallback } from "react";
import {
  createTreeCollection,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchItem,
  TreeViewContent,
  TreeViewItem,
  TreeViewNode,
  TreeViewTree,
} from "@/registry/react/components/tree-view";

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { id: "src/app.tsx", name: "app.tsx" },
          { id: "src/utils/helpers.ts", name: "helpers.ts" },
        ],
        id: "src",
        name: "src",
      },
      { id: "package.json", name: "package.json" },
    ],
    id: "ROOT",
    name: "",
  },
});

interface IdeFileTreeProps {
  onSelect: (path: string) => void;
  selectedPath: string;
}

export const IdeFileTree = ({ onSelect, selectedPath }: IdeFileTreeProps) => {
  const handleSelectionChange = useCallback(
    (details: { selectedValue: string[] }) => {
      const [next] = details.selectedValue;
      if (next) {
        onSelect(next);
      }
    },
    [onSelect]
  );

  return (
    <div className="flex h-full min-h-0 flex-col gap-2 p-2">
      <p className="px-2 font-medium text-muted-foreground text-xs uppercase">
        Files
      </p>
      <TreeView
        collection={collection}
        onSelectionChange={handleSelectionChange}
        selectedValue={[selectedPath]}
      >
        <TreeViewTree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeViewTree>
      </TreeView>
    </div>
  );
};

const TreeNode = (props: React.ComponentProps<typeof TreeViewNode>) => {
  const { node, indexPath, ...rest } = props;

  return (
    <TreeViewNode indexPath={indexPath} node={node} {...rest}>
      {node.children ? (
        <TreeViewBranch>
          <TreeViewBranchItem
            expandedIcon={FolderOpenIcon}
            icon={FolderIcon}
            showIndicator
          >
            {node.name}
          </TreeViewBranchItem>
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
      ) : (
        <TreeViewContent>
          <TreeViewItem icon={FileIcon}>{node.name}</TreeViewItem>
        </TreeViewContent>
      )}
    </TreeViewNode>
  );
};
