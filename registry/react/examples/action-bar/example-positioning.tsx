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
  const [placement, setPlacement] = React.useState<Placement>("bottom");

  const handleOpenChange = (nextPlacement: Placement) => {
    setIsOpen(true);
    setPlacement(nextPlacement);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => handleOpenChange("bottom-start")}
          variant="outline"
        >
          Bottom Start
        </Button>
        <Button onClick={() => handleOpenChange("bottom")} variant="outline">
          Bottom
        </Button>
        <Button
          onClick={() => handleOpenChange("bottom-end")}
          variant="outline"
        >
          Bottom End
        </Button>
      </div>

      <ActionBar
        onOpenChange={setIsOpen}
        open={isOpen}
        positioning={{ placement }}
      >
        <ActionBarContent aria-label="Bulk actions">
          <ActionBarValue count={5} />
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

type Placement = "bottom" | "bottom-start" | "bottom-end";

export default Example;
