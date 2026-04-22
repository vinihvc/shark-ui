"use client";

import { createListCollection } from "@ark-ui/react";
import { PencilIcon, SquarePlusIcon, Trash2Icon } from "lucide-react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemText,
  ListboxShortcut,
} from "@/registry/react/components/listbox";
import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <Item className="w-full max-w-64 p-1" variant="outline">
    <Listbox
      aria-label="File actions"
      className="w-full"
      collection={collection}
      selectionMode="none"
    >
      <ListboxContent>
        <ListboxItemGroup heading="Actions">
          <ListboxItem item={collection.items[0]}>
            <div className="flex h-8 items-start justify-start">
              <SquarePlusIcon />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <ListboxItemText>New file</ListboxItemText>
              <span className="text-muted-foreground text-xs">
                Create a new file
              </span>
            </div>
            <ListboxShortcut>⌘N</ListboxShortcut>
          </ListboxItem>
          <ListboxItem item={collection.items[1]}>
            <div className="flex h-8 items-start justify-start">
              <PencilIcon />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <ListboxItemText>Edit file</ListboxItemText>
              <span className="text-muted-foreground text-xs">
                Make changes
              </span>
            </div>
            <ListboxShortcut>⌘E</ListboxShortcut>
          </ListboxItem>
        </ListboxItemGroup>
        <Separator />
        <ListboxItemGroup heading="Danger zone">
          <ListboxItem item={collection.items[2]} variant="destructive">
            <div className="flex h-8 items-start justify-start">
              <Trash2Icon />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <ListboxItemText>Delete file</ListboxItemText>
              <span className="text-muted-foreground text-xs">
                Move to trash
              </span>
            </div>
            <ListboxShortcut>⌘⇧D</ListboxShortcut>
          </ListboxItem>
        </ListboxItemGroup>
      </ListboxContent>
    </Listbox>
  </Item>
);

const collection = createListCollection({
  items: [
    { label: "New file", value: "new-file", section: "actions" },
    { label: "Edit file", value: "edit-file", section: "actions" },
    {
      label: "Delete file",
      value: "delete-file",
      section: "danger",
    },
  ],
});

export default Example;
