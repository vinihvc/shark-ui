"use client";

import {
  ArchiveIcon,
  DownloadIcon,
  PencilIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarValue,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

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
        <ActionBarContent aria-label="Bulk actions">
          <ActionBarValue count={3} />
          <ActionBarSeparator />
          <ActionBarBody>
            <Button variant="ghost">
              <PencilIcon />
              <span className="max-sm:sr-only">Edit</span>
            </Button>
            <Button variant="ghost">
              <DownloadIcon />
              <span className="max-sm:sr-only">Export</span>
            </Button>
            <Button variant="ghost">
              <ArchiveIcon />
              <span className="max-sm:sr-only">Archive</span>
            </Button>
            <ActionBarSeparator />
            <Button variant="destructive">
              <Trash2Icon />
              <span className="max-sm:sr-only">Delete</span>
            </Button>
          </ActionBarBody>
          <ActionBarSeparator />
          <ActionBarClose asChild>
            <Button size="icon-md" variant="ghost">
              <XIcon />
            </Button>
          </ActionBarClose>
        </ActionBarContent>
      </ActionBar>
    </>
  );
};

const gutters = ["24px", "32px"] as const;

export default Example;
