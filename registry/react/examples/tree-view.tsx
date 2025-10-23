"use client";

import { createTreeCollection } from "@ark-ui/react/tree-view";
import { FileIcon, Folder } from "lucide-react";
import {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndentGuide,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewNodeProvider,
  TreeViewTree,
} from "@/registry/react/components/tree-view";

type Node = {
  id: string;
  name: string;
  children?: Node[] | undefined;
};

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "node_modules",
        name: "node_modules",
        children: [
          { id: "node_modules/zag-js", name: "zag-js" },
          { id: "node_modules/pandacss", name: "panda" },
          {
            id: "node_modules/@types",
            name: "@types",
            children: [
              { id: "node_modules/@types/react", name: "react" },
              { id: "node_modules/@types/react-dom", name: "react-dom" },
            ],
          },
        ],
      },
      {
        id: "src",
        name: "src",
        children: [
          { id: "src/app.tsx", name: "app.tsx" },
          { id: "src/index.ts", name: "index.ts" },
        ],
      },
      { id: "panda.config", name: "panda.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "renovate.json", name: "renovate.json" },
      { id: "readme.md", name: "README.md" },
    ],
  },
});

type TreeNodeProps = {
  node: Node;
  indexPath: number[];
};

const TreeNode = (props: TreeNodeProps) => {
  const { node, indexPath } = props;

  return (
    <TreeViewNodeProvider indexPath={indexPath} key={node.id} node={node}>
      {node.children ? (
        <TreeViewBranch>
          <TreeViewBranchControl>
            <TreeViewBranchText>
              <Folder /> {node.name}
            </TreeViewBranchText>

            <TreeViewBranchIndicator />
          </TreeViewBranchControl>

          <TreeViewBranchContent>
            <TreeViewBranchIndentGuide />

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
        <TreeViewItem>
          <TreeViewItemText>
            <FileIcon />
            {node.name}
          </TreeViewItemText>
        </TreeViewItem>
      )}
    </TreeViewNodeProvider>
  );
};

export const TreeViewDemo = () => (
  <TreeView className="overflow-hidden" collection={collection as never}>
    <TreeViewLabel>File Explorer</TreeViewLabel>
    <TreeViewTree>
      {collection.rootNode.children?.map((node, index) => (
        <TreeNode indexPath={[index]} key={node.id} node={node} />
      ))}
    </TreeViewTree>
  </TreeView>
);

export default TreeViewDemo;
