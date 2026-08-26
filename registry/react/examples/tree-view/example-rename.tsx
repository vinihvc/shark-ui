"use client";

import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";

import React from "react";
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

const Example = () => {
  const [collection, setCollection] = React.useState(initialCollection);

  return (
    <div className="w-full max-w-48">
      <TreeView
        canRename={() => true}
        collection={collection}
        onRenameComplete={(details) => {
          setCollection((prev) => {
            const node = prev.at(details.indexPath);
            if (!node) {
              return prev;
            }
            return prev.replace(details.indexPath, {
              ...node,
              name: details.label,
            });
          });
        }}
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

const initialCollection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { id: "app/page.tsx", name: "page.tsx" },
          { id: "app/layout.tsx", name: "layout.tsx" },
        ],
        id: "app",
        name: "app",
      },
      {
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
        id: "components",
        name: "components",
      },
      { id: "package.json", name: "package.json" },
      { id: "readme.md", name: "README.md" },
    ],
    id: "ROOT",
    name: "",
  },
});

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

export default Example;
