"use client";

import React from "react";
import {
  createTreeCollection,
  type TreeNodeType,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchItem,
  TreeViewCheckbox,
  TreeViewContent,
  TreeViewItem,
  TreeViewNode,
  TreeViewTree,
} from "@/registry/react/components/tree-view";

const Example = () => {
  const [checkedNodes, setCheckedNodes] = React.useState<string[]>([
    "readme.md",
  ]);

  return (
    <div className="flex w-full max-w-md items-center gap-4">
      <div className="w-full max-w-52">
        <TreeView
          checkedValue={checkedNodes}
          collection={collection}
          onCheckedChange={({ checkedValue }) => setCheckedNodes(checkedValue)}
        >
          <TreeViewTree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeViewTree>
        </TreeView>
      </div>

      <p className="whitespace-pre-wrap text-muted-foreground text-sm">
        {JSON.stringify(checkedNodes, null, 2)}
      </p>
    </div>
  );
};

const collection = createTreeCollection({
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "app",
        name: "app",
        children: [
          { id: "app/page.tsx", name: "page.tsx" },
          { id: "app/layout.tsx", name: "layout.tsx" },
        ],
      },
      {
        id: "components",
        name: "components",
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
      },
      { id: "package.json", name: "package.json" },
      { id: "readme.md", name: "README.md" },
    ],
  },
});

const TreeNode = (props: { node: TreeNodeType; indexPath: number[] }) => {
  const { node, indexPath } = props;

  return (
    <TreeViewNode indexPath={indexPath} node={node}>
      {node.children ? (
        <TreeViewBranch>
          <TreeViewBranchItem>
            <TreeViewCheckbox />
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
          <TreeViewCheckbox />
          <TreeViewItem>{node.name}</TreeViewItem>
        </TreeViewContent>
      )}
    </TreeViewNode>
  );
};

export default Example;
