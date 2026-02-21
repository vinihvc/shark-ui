"use client";

import { XIcon } from "lucide-react";
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
    <ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <Button onClick={() => setIsOpen((prev) => !prev)} variant="outline">
        Toggle
      </Button>
      <ActionBarContent className="w-full max-w-xs">
        <ActionBarClose asChild>
          <Button size="icon-sm" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>
        <ActionBarSelectionTrigger count={2} />
      </ActionBarContent>
    </ActionBar>
  );
};

export default Example;
