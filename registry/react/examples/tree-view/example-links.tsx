"use client";

import { ExternalLinkIcon, Link } from "lucide-react";
import {
  createTreeCollection,
  type NodeProviderProps,
  type TreeNodeType,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchItem,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
  TreeViewNode,
  TreeViewTree,
} from "@/registry/react/components/tree-view";

interface TreeNodeWithLinks extends TreeNodeType<unknown> {
  href?: string;
}

const Example = () => (
  <div className="w-full max-w-48">
    <TreeView collection={collection}>
      <TreeViewLabel>Docs</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNode indexPath={[index]} key={node.id} node={node} />
        ))}
      </TreeViewTree>
    </TreeView>
  </div>
);

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          {
            href: "/docs",
            id: "docs/introduction",
            name: "Introduction",
          },
          {
            href: "/docs/components",
            id: "docs/components",
            name: "Components",
          },
        ],
        id: "docs",
        name: "Documentation",
      },
      {
        children: [
          {
            href: "https://github.com/sharkui-inc/shark-ui",
            id: "external/github",
            name: "GitHub Repository",
          },
        ],
        id: "external",
        name: "External Links",
      },
      { href: "/llms.txt", id: "llms.txt", name: "llms.txt" },
    ],
    id: "ROOT",
    name: "",
  },
});

const TreeNode = (props: NodeProviderProps<TreeNodeWithLinks>) => {
  const { node, indexPath } = props;

  return (
    <TreeViewNode indexPath={indexPath} node={node}>
      {node.children ? (
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
      ) : (
        <TreeViewContent asChild>
          <a
            href={node.href ?? "#"}
            rel={
              node.href?.startsWith("http") ? "noopener noreferrer" : undefined
            }
            target={node.href?.startsWith("http") ? "_blank" : undefined}
          >
            <TreeViewItem icon={Link}>
              {node.name}
              {node.href?.startsWith("http") && <ExternalLinkIcon />}
            </TreeViewItem>
          </a>
        </TreeViewContent>
      )}
    </TreeViewNode>
  );
};

export default Example;
