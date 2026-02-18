"use client";

import {
  ActionBarCloseTrigger,
  ActionBarContent,
  ActionBarPositioner,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";
import { useState } from "react";

const ActionBarDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button type="button" onClick={() => setOpen(true)}>
        Show Action bar
      </Button>
      <ActionBarRoot open={open} onOpenChange={setOpen}>
        <ActionBarPositioner placement="bottom">
          <ActionBarContent className="w-full max-w-md">
            <ActionBarCloseTrigger />
            <ActionBarSeparator />
            <ActionBarSelectionTrigger count={3} />
            <div className="ml-auto flex gap-2">
              <Button type="button" size="sm" variant="outline">
                Cancel
              </Button>
              <Button type="button" size="sm">
                Delete
              </Button>
            </div>
          </ActionBarContent>
        </ActionBarPositioner>
      </ActionBarRoot>
    </div>
  );
};

export default ActionBarDemo;
