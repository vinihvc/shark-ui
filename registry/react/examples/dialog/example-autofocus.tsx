"use client";

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

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>
    <DialogContent showCloseButton={false}>
      <DialogHeader
        description="Focus skips the close control and lands on the email field."
        title="Autofocus"
      />
      <DialogBody>
        <FieldGroup>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input placeholder="Jane Doe" />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input data-autofocus placeholder="jane@example.com" type="email" />
          </Field>
        </FieldGroup>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button data-no-autofocus variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>Save</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
