"use client";

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
  const [selected, setSelected] = React.useState<string[]>([]);

  const isCorrectSelection = selected[0] === "components/input.tsx";

  return (
    <div className="flex w-full max-w-40 flex-col items-center gap-4">
      <p className="text-muted-foreground text-sm">Select input.tsx</p>

      <TreeView
        className="overflow-hidden"
        collection={collection}
        onSelectionChange={({ selectedValue }) => setSelected(selectedValue)}
        selectedValue={selected}
      >
        <TreeViewTree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeViewTree>
      </TreeView>

      <p className="text-muted-foreground text-sm">
        {isCorrectSelection ? "✅" : "❌"}
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
        id: "components",
        name: "components",
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
      },
      { id: "package.json", name: "package.json" },
    ],
  },
});

const TreeNode = (props: React.ComponentProps<typeof TreeViewNode>) => {
  const { node, indexPath } = props;

  return (
    <TreeViewNode indexPath={indexPath} key={node.id} node={node}>
      {node.children ? (
        <TreeViewBranch>
          <TreeViewBranchItem>{node.name}</TreeViewBranchItem>

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
          <TreeViewItem>{node.name}</TreeViewItem>
        </TreeViewContent>
      )}
    </TreeViewNode>
  );
};

export default Example;
