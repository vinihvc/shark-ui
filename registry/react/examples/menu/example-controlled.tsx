"use client";

import { CopyIcon, PencilIcon, ShareIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Menu onOpenChange={handleOpenChange} open={open}>
        <MenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </MenuTrigger>
        <MenuContent className="w-40">
          <MenuItem value="edit">
            <PencilIcon />
            Edit
          </MenuItem>
          <MenuItem value="copy">
            <CopyIcon />
            Copy
          </MenuItem>
          <MenuItem value="share">
            <ShareIcon />
            Share
          </MenuItem>
        </MenuContent>
      </Menu>
      <p className="text-muted-foreground text-sm">
        Menu: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
