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

const offsets = ["24px", "32px"] as const;

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [offset, setOffset] = React.useState<(typeof offsets)[number]>("24px");

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {offsets.map((value) => (
          <Button
            key={value}
            onClick={() => {
              setIsOpen(true);
              setOffset(value);
            }}
            variant={offset === value && isOpen ? "secondary" : "outline"}
          >
            {`Offset ${value}`}
          </Button>
        ))}
      </div>

      <ActionBar
        onOpenChange={setIsOpen}
        open={isOpen}
        positioning={{ offset, placement: "bottom" }}
      >
        <ActionBarContent className="w-full max-w-md">
          <ActionBarClose asChild>
            <Button size="icon-sm" variant="ghost">
              <XIcon />
            </Button>
          </ActionBarClose>
          <ActionBarSelectionTrigger count={3} />
        </ActionBarContent>
      </ActionBar>
    </>
  );
};

export default Example;
