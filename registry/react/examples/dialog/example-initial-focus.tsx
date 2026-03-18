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
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <Dialog initialFocusEl={() => inputRef.current}>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader
          description="The first input will be focused when the dialog opens."
          title="Edit Profile"
        />
        <DialogBody>
          <FieldGroup>
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="John Doe" ref={inputRef} />
            </Field>

            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input placeholder="john.doe@example.com" />
            </Field>
          </FieldGroup>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
