"use client";

import { Trash2Icon, XIcon } from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/registry/react/components/action-bar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const projects = [
  { id: "1", name: "Project Alpha" },
  { id: "2", name: "Project Beta" },
  { id: "3", name: "Project Gamma" },
];

const Example = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const isOpen = selectedIds.length > 0;

  const handleClose = () => {
    setSelectedIds([]);
  };

  const handleDialogOpenChange = (details: { open: boolean }) => {
    setDialogOpen(details.open);
    if (!details.open) {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (
    id: string,
    details: { checked?: boolean | "indeterminate" }
  ) => {
    if (details.checked === true) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };

  return (
    <ActionBar onOpenChange={(open) => !open && handleClose()} open={isOpen}>
      <Dialog onOpenChange={handleDialogOpenChange} open={dialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Delete projects</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader
            description="Select the projects you want to delete."
            title="Delete projects"
          />
          <DialogBody>
            <div className="flex flex-col gap-3">
              {projects.map((project) => {
                const isSelected = selectedIds.includes(project.id);
                return (
                  <label
                    className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-muted/50"
                    key={project.id}
                  >
                    <Checkbox
                      aria-label={`Select ${project.name}`}
                      checked={isSelected}
                      onCheckedChange={(details) =>
                        handleSelectRow(project.id, details)
                      }
                    />
                    <span className="font-medium">{project.name}</span>
                  </label>
                );
              })}
            </div>
          </DialogBody>
          {isOpen && (
            <DialogFooter className="flex-row gap-2 border-t pt-4">
              <div
                className="flex w-full items-center gap-2 rounded-xl border bg-popover p-4"
                role="toolbar"
              >
                <ActionBarClose asChild>
                  <Button size="icon-sm" variant="ghost">
                    <XIcon />
                  </Button>
                </ActionBarClose>
                <ActionBarSeparator />
                <ActionBarSelectionTrigger count={selectedIds.length} />
                <div className="ml-auto">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive">
                        <Trash2Icon />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader
                        description="This action cannot be undone."
                        title="Are you sure?"
                      />
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            setSelectedIds([]);
                            setDialogOpen(false);
                          }}
                          variant="destructive"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </ActionBar>
  );
};

export default Example;
