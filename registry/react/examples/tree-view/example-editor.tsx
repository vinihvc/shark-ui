"use client";

import { XIcon } from "lucide-react";
import React from "react";
import { buttonVariants } from "@/registry/react/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import {
  createTreeCollection,
  type TreeNodeType,
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
  const [activeItem, setActiveItem] = React.useState("");

  const handleSelectNode = (selectedNodes: TreeNodeType[]) => {
    const selectedItem = selectedNodes.map((node) => node.name)[0];

    const isFolder = selectedNodes.every((node) => node.children?.length ?? 0);

    if (isFolder) {
      return;
    }

    const formattedName = selectedItem?.split("/").at(-1);

    setActiveItem(formattedName ?? "");
  };

  return (
    <div className="flex size-full gap-2">
      <div className="w-full max-w-48 rounded-lg border p-2">
        <TreeView
          collection={collection}
          onSelectionChange={({ selectedNodes }) =>
            handleSelectNode(selectedNodes)
          }
        >
          <TreeViewTree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeViewTree>
        </TreeView>
      </div>

      <div className="flex flex-1 flex-col rounded-lg border p-0.5">
        {activeItem && (
          <Tabs className="flex-1" value={activeItem}>
            <TabsList variant="underline">
              <TabsTrigger value={activeItem}>
                {activeItem}

                <div
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon-xs",
                  })}
                  onClick={() => setActiveItem("")}
                >
                  <XIcon />
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="p-2 text-muted-foreground text-sm"
              value={activeItem}
            >
              {"// File content"}
            </TabsContent>
          </Tabs>
        )}
      </div>
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

const TreeNode = (props: React.ComponentProps<typeof TreeViewNode>) => {
  const { node, indexPath, ...rest } = props;

  return (
    <TreeViewNode indexPath={indexPath} node={node} {...rest}>
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
