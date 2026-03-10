"use client";

import {
  FilePlusIcon,
  FolderPlusIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
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
  return (
    <div className="w-full max-w-40">
      <TreeView collection={collection}>
        <TreeViewTree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeViewTree>
      </TreeView>
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

const TreeNode = (props: NodeProviderProps) => {
  const { node, indexPath, ...rest } = props;

  return (
    <TreeViewNode indexPath={indexPath} node={node} {...rest}>
      {node.children ? (
        <TreeViewBranch>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <TreeViewBranchItem>{node.name}</TreeViewBranchItem>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-40">
              <ContextMenuItem value="add-folder">
                <FolderPlusIcon aria-hidden />
                Add folder
              </ContextMenuItem>
              <ContextMenuItem value="add-file">
                <FilePlusIcon aria-hidden />
                Add file
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem value="rename">
                <PencilIcon aria-hidden />
                Rename
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem value="delete" variant="destructive">
                <Trash2Icon aria-hidden />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
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
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <TreeViewContent>
              <TreeViewItem>{node.name}</TreeViewItem>
            </TreeViewContent>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            <ContextMenuItem value="add-file">
              <PencilIcon aria-hidden />
              Rename
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem value="delete" variant="destructive">
              <Trash2Icon aria-hidden />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )}
    </TreeViewNode>
  );
};

export default Example;
