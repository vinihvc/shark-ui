"use client";

import {
  Archive,
  ArchiveX,
  Bell,
  CirclePlus,
  FolderInput,
  MailX,
  Reply,
  Send,
  SquarePen,
  Trash,
  Trash2,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuDemo = () => {
  const [checked, setChecked] = React.useState(true);
  const [priority, setPriority] = React.useState("medium");

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button>Open menu</Button>
      </MenuTrigger>
      <MenuContent className="w-56">
        <MenuItemGroup>
          <MenuItem value="forward">
            <Send /> Forward
            <MenuShortcut>⇧⌘F</MenuShortcut>
          </MenuItem>

          <MenuItem value="reply">
            <Reply /> Reply
            <MenuShortcut>⇧⌘R</MenuShortcut>
          </MenuItem>

          <MenuItem value="archive">
            <Archive /> Archive
            <MenuShortcut>⇧⌘Z</MenuShortcut>
          </MenuItem>

          <MenuSub>
            <MenuSubTrigger>
              <FolderInput /> Move to
            </MenuSubTrigger>

            <MenuSubContent>
              <MenuItem value="move-to-folder-1">
                <ArchiveX /> Junk
              </MenuItem>

              <MenuItem value="move-to-folder-2">
                <Trash /> Trash
              </MenuItem>

              <MenuItem value="move-to-folder-3">
                <Bell /> Reminders
              </MenuItem>

              <MenuSub>
                <MenuSubTrigger>
                  <CirclePlus />
                  More
                </MenuSubTrigger>
                <MenuSubContent>
                  <MenuItem value="move-to-folder-4">
                    <SquarePen />
                    Drafts
                  </MenuItem>
                  <MenuItem value="move-to-folder-6">
                    <MailX />
                    Spam
                  </MenuItem>
                </MenuSubContent>
              </MenuSub>
            </MenuSubContent>
          </MenuSub>

          <MenuSeparator />

          <MenuRadioGroup
            onValueChange={(e) => setPriority(e.value)}
            value={priority}
          >
            <MenuItemGroupLabel>Priority</MenuItemGroupLabel>

            <MenuRadioItem value="low">Low</MenuRadioItem>
            <MenuRadioItem value="medium">Medium</MenuRadioItem>
            <MenuRadioItem value="high">High</MenuRadioItem>
          </MenuRadioGroup>

          <MenuSeparator />

          <MenuCheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
            value="block"
          >
            Block sender
          </MenuCheckboxItem>

          <MenuSeparator />

          <MenuItem value="delete" variant="destructive">
            <Trash2 /> Delete
            <MenuShortcut>⌫</MenuShortcut>
          </MenuItem>
        </MenuItemGroup>
      </MenuContent>
    </Menu>
  );
};

export default MenuDemo;
