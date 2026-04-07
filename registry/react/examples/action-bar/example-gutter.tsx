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

const gutters = ["24px", "32px"] as const;

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [gutter, setGutter] = React.useState<(typeof gutters)[number]>("24px");

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {gutters.map((value) => (
          <Button
            key={value}
            onClick={() => {
              setIsOpen(true);
              setGutter(value);
            }}
            variant={gutter === value && isOpen ? "secondary" : "outline"}
          >
            {`Gutter ${value}`}
          </Button>
        ))}
      </div>

      <ActionBar
        onOpenChange={setIsOpen}
        open={isOpen}
        positioning={{ gutter, placement: "bottom" }}
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
