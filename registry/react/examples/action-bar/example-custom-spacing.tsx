"use client";

import { PencilIcon, Trash2Icon, XIcon } from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarBody,
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
      <ActionBarContent className="w-full max-w-md [--space:--spacing(2)]">
        <ActionBarClose asChild>
          <Button size="icon-sm" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>
        <ActionBarSelectionTrigger count={2} />
        <ActionBarBody>
          <Button size="sm" variant="secondary">
            <PencilIcon />
            Edit
          </Button>
          <Button size="sm" variant="destructive">
            <Trash2Icon />
            Delete
          </Button>
        </ActionBarBody>
      </ActionBarContent>
    </ActionBar>
  );
};

export default Example;
