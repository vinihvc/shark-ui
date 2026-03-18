"use client";

import { ExternalLinkIcon, PlusIcon, Trash2Icon } from "lucide-react";
import type React from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { toast } from "@/registry/react/components/toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const ButtonVariantsExample = (props: React.ComponentProps<"div">) => {
  return (
    <Card {...props}>
      <CardHeader
        description="Available in the following styles"
        title="Variants"
      />
      <CardContent className="flex flex-wrap gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button>Solid</Button>
          </PopoverTrigger>

          <PopoverContent className="w-80">
            <PopoverHeader
              description="This is a description of the Popover component"
              title="This is a Popover component"
            />

            <PopoverBody>
              <FieldGroup>
                <Field orientation="horizontal">
                  <FieldLabel>Height</FieldLabel>
                  <InputGroup>
                    <InputGroupInput defaultValue="25px" />
                    <InputGroupAddon align="inline-end">px</InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field orientation="horizontal">
                  <FieldLabel>Width</FieldLabel>
                  <InputGroup>
                    <InputGroupInput defaultValue="100%" />
                    <InputGroupAddon align="inline-end">px</InputGroupAddon>
                  </InputGroup>
                </Field>
              </FieldGroup>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Dialog>
          <ButtonGroup>
            <Button variant="outline">Outline</Button>
            <DialogTrigger asChild>
              <Button aria-label="Add" size="icon-md" variant="outline">
                <PlusIcon aria-hidden />
              </Button>
            </DialogTrigger>
          </ButtonGroup>

          <DialogContent>
            <DialogHeader
              description="It will be used to identify you across your devices"
              title="Update username"
            />
            <DialogBody>
              <Field>
                <FieldLabel>Username</FieldLabel>
                <Input placeholder="@vinihvc" />
              </Field>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Tooltip positioning={{ placement: "bottom" }}>
          <TooltipTrigger asChild>
            <Button variant="destructive">
              <Trash2Icon /> Destructive
            </Button>
          </TooltipTrigger>
          <TooltipContent>I'm a tooltip</TooltipContent>
        </Tooltip>

        <Clipboard value="something">
          <ClipboardTrigger asChild>
            <Button variant="secondary">
              <ClipboardIndicator />
              Secondary
            </Button>
          </ClipboardTrigger>
        </Clipboard>
        <Button
          onClick={() =>
            toast.create({
              id: "easter-egg",
              title: "You found the easter egg!",
              description: "Congratulations!",
              type: "success",
            })
          }
          variant="ghost"
        >
          {" "}
          Ghost
        </Button>
        <Button variant="link">
          {" "}
          Link <ExternalLinkIcon aria-hidden />
        </Button>
      </CardContent>
    </Card>
  );
};
