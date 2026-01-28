"use client";

import { Info, Settings, User } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/registry/react/components/dialog";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const DialogOpenFromMenuDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Menu>
        <MenuTrigger asChild>
          <Button>Open Menu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem onClick={() => setIsOpen(true)} value="settings">
            <Settings />
            Open settings
          </MenuItem>
          <MenuItem disabled value="profile">
            <User />
            View profile
          </MenuItem>
          <MenuItem disabled value="help">
            <Info />
            Help
          </MenuItem>
        </MenuContent>
      </Menu>

      <Dialog onOpenChange={({ open }) => setIsOpen(open)} open={isOpen}>
        <DialogContent>
          <DialogHeader
            description="This dialog was opened from a menu item"
            title="Settings"
          />
          <DialogBody>
            <p className="text-muted-foreground text-sm">
              You can open dialogs imperatively from menu items using the
              onClick handler.
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogOpenFromMenuDemo;
