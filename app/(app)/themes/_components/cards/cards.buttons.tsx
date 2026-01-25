"use client";

import { Plus } from "lucide-react";
import React from "react";
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
import { useToast } from "@/registry/react/components/toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const CardsButtons = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
    }, 5000);

    const timeoutId2 = setTimeout(() => {
      setIsLoading(false);
    }, 10_000);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, []);

  return (
    <Card>
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
                  <FieldLabel htmlFor="height">Height</FieldLabel>
                  <InputGroup>
                    <InputGroupInput defaultValue="25px" id="height" />
                    <InputGroupAddon align="inline-end">px</InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field orientation="horizontal">
                  <FieldLabel htmlFor="width">Width</FieldLabel>
                  <InputGroup>
                    <InputGroupInput defaultValue="100%" id="width" />
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
              <Button size="icon-md" variant="outline">
                <Plus />
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
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" placeholder="@vinihvc" />
              </Field>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Save changes</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Tooltip open={isLoading} positioning={{ placement: "bottom" }}>
          <TooltipTrigger asChild>
            <Button isLoading={isLoading} variant="destructive">
              Delete account
            </Button>
          </TooltipTrigger>
          <TooltipContent>I have isLoading state</TooltipContent>
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
        <Button variant="link"> Visit website</Button>
      </CardContent>
    </Card>
  );
};
