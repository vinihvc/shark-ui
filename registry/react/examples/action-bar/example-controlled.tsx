"use client";

import { PencilIcon, SendIcon, Trash2Icon, XIcon } from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => setIsOpen(true)} type="button" variant="outline">
          Open
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          type="button"
          variant="outline"
        >
          Close
        </Button>
        <span className="text-muted-foreground text-sm">
          State: {isOpen ? "open" : "closed"}
        </span>
      </div>

      <ActionBar onOpenChange={setIsOpen} open={isOpen}>
        <ActionBarContent className="w-full max-w-xl">
          <ActionBarClose asChild>
            <Button size="icon-sm" variant="ghost">
              <XIcon />
            </Button>
          </ActionBarClose>
          <ActionBarSelectionTrigger count={2} />
          <div className="ml-auto flex gap-2">
            <Button size="sm" variant="secondary">
              <SendIcon />
              Send
            </Button>
            <Button size="sm" variant="secondary">
              <PencilIcon />
              Edit
            </Button>
            <Button size="sm" variant="destructive">
              <Trash2Icon />
              Delete
            </Button>
          </div>
        </ActionBarContent>
      </ActionBar>
    </div>
  );
};

export default Example;
