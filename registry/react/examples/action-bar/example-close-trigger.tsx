"use client";

import { XIcon } from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarTrigger,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <ActionBarTrigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBarTrigger>
      <ActionBarContent className="w-full max-w-sm">
        <ActionBarClose asChild>
          <Button size="icon-sm" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>
        <ActionBarSelectionTrigger count={3} />
      </ActionBarContent>
    </ActionBar>
  );
};

export default Example;
