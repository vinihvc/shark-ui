"use client";

import {
  ArchiveIcon,
  CopyIcon,
  EllipsisIcon,
  PencilIcon,
  SendIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
} from "@/registry/react/components/action-bar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const ActionBarDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <Button onClick={() => setIsOpen((e) => !e)}>Toggle</Button>
      <ActionBarContent className="w-full max-w-xl">
        <ActionBarClose asChild>
          <Button size="icon-sm" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>

        <ActionBarSelectionTrigger count={3} />
        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="secondary">
            <SendIcon />
            Send
          </Button>
          <Button size="sm" variant="secondary">
            <PencilIcon />
            Edit
          </Button>
          <Menu positioning={{ placement: "top" }}>
            <MenuTrigger asChild>
              <Button size="sm" variant="secondary">
                <EllipsisIcon />
                More
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="edit">
                <ArchiveIcon />
                Archive
              </MenuItem>
              <MenuItem value="duplicate">
                <CopyIcon />
                Duplicate
              </MenuItem>
            </MenuContent>
          </Menu>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="destructive">
                <Trash2Icon />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader
                description="This action cannot be undone."
                title="Are you sure?"
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </ActionBarContent>
    </ActionBar>
  );
};

export default ActionBarDemo;
