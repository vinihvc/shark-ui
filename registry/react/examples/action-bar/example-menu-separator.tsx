"use client";

import { EllipsisVerticalIcon, Trash2Icon, XIcon } from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <ActionBar onOpenChange={handleOpenChange} open={menuOpen}>
      <Menu onOpenChange={({ open }) => setMenuOpen(open)} open={menuOpen}>
        <MenuTrigger asChild>
          <Button variant="outline">
            <EllipsisVerticalIcon />
            Open menu
          </Button>
        </MenuTrigger>
        <MenuContent className="min-w-56">
          <MenuItem value="edit">Edit</MenuItem>
          <MenuItem value="share">Share</MenuItem>
          <MenuItem value="duplicate">Duplicate</MenuItem>
          <MenuSeparator />
          <div
            className="flex items-center gap-2 border-t bg-muted/30 px-2 py-3"
            role="toolbar"
          >
            <ActionBarClose asChild>
              <Button size="icon-sm" variant="ghost">
                <XIcon />
              </Button>
            </ActionBarClose>
            <ActionBarSeparator />
            <ActionBarSelectionTrigger count={3} />
            <div className="ml-auto">
              <Button size="sm" variant="destructive">
                <Trash2Icon />
                Delete
              </Button>
            </div>
          </div>
        </MenuContent>
      </Menu>
    </ActionBar>
  );
};

export default Example;
