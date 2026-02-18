"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
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

const Example = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </MenuTrigger>
        <MenuContent className="w-40">
          <MenuItem onClick={() => setDialogOpen(true)} value="dialog">
            Open dialog
          </MenuItem>
        </MenuContent>
      </Menu>
      <Dialog onOpenChange={(e) => setDialogOpen(e.open)} open={dialogOpen}>
        <DialogContent>
          <DialogHeader
            description="Change your preferences."
            title="Settings"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Example;
