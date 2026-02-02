"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/registry/react/components/dialog";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../../components/alert-dialog";

const DialogConfirmationDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const [pendingClose, setPendingClose] = React.useState(false);

  const handleOpenChange = (e: { open: boolean }) => {
    if (!e.open && hasUnsavedChanges && !pendingClose) {
      setShowConfirmDialog(true);
      return;
    }
    setIsOpen(e.open);
    if (e.open) {
      setShowConfirmDialog(false);
      setPendingClose(false);
    }
  };

  const handleConfirmClose = () => {
    setPendingClose(true);
    setHasUnsavedChanges(false);
    setIsOpen(false);
    setShowConfirmDialog(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>

      <Dialog
        onEscapeKeyDown={(e) => {
          if (hasUnsavedChanges) {
            e.preventDefault();
            setShowConfirmDialog(true);
          }
        }}
        onInteractOutside={(e) => {
          if (hasUnsavedChanges) {
            e.preventDefault();
            setShowConfirmDialog(true);
          }
        }}
        onOpenChange={handleOpenChange}
        open={isOpen}
      >
        <DialogContent>
          <DialogHeader
            description="Make changes to see the confirmation dialog"
            title="Edit Project"
          />
          <DialogBody>
            <Field>
              <FieldLabel>Project Name</FieldLabel>
              <Input
                onChange={() => setHasUnsavedChanges(true)}
                placeholder="Enter project name"
              />
            </Field>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={() => {
                setHasUnsavedChanges(false);
                setIsOpen(false);
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog
        onOpenChange={(e) => {
          if (!e.open) {
            setShowConfirmDialog(false);
          }
        }}
        open={showConfirmDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader
            description="You have unsaved changes. Are you sure you want to close?"
            title="Unsaved Changes"
          />
          <AlertDialogFooter>
            <AlertDialogClose asChild>
              <Button
                onClick={() => setShowConfirmDialog(false)}
                variant="outline"
              >
                Cancel
              </Button>
            </AlertDialogClose>
            <Button onClick={handleConfirmClose}>Discard changes</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DialogConfirmationDemo;
