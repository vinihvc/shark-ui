"use client";

import {
  Editable as ArkEditable,
  useEditableContext,
} from "@ark-ui/react/editable";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  type ButtonProps,
  buttonVariants,
} from "@/registry/react/components/button";

export const useEditable = useEditableContext;

export interface EditableProps
  extends React.ComponentProps<typeof ArkEditable.Root> {
  /**
   * The orientation of the editable
   */
  orientation?: "horizontal" | "vertical";
}

export const Editable = (props: EditableProps) => {
  const { orientation = "horizontal", className, ...rest } = props;

  return (
    <ArkEditable.Root
      className={cn(
        "group/editable",
        "relative",
        "w-full",
        "data-[orientation=vertical]:items-end",
        "flex items-center gap-2",
        className
      )}
      data-orientation={orientation}
      data-slot="editable"
      {...rest}
    />
  );
};

export const EditableArea = (
  props: React.ComponentProps<typeof ArkEditable.Area>
) => {
  const { className, ...rest } = props;
  return (
    <ArkEditable.Area
      className={cn("w-full", className)}
      data-slot="editable-area"
      {...rest}
    />
  );
};

export interface EditableInputProps
  extends Omit<React.ComponentProps<typeof ArkEditable.Input>, "size"> {}

export const EditableInput = (props: EditableInputProps) => {
  const { className, ...rest } = props;

  return (
    <ArkEditable.Input
      className={cn("", className)}
      data-slot="editable-input"
      {...rest}
    />
  );
};

interface EditablePreviewProps
  extends React.ComponentProps<typeof ArkEditable.Preview> {
  /**
   * The size of the preview
   *
   * @default "md"
   */
  size?: ButtonProps["size"];
  /**
   * The variant of the preview
   *
   * @default "outline"
   */
  variant?: ButtonProps["variant"];
}

export const EditablePreview = (props: EditablePreviewProps) => {
  const { variant = "outline", size = "md", className, ...rest } = props;

  return (
    <ArkEditable.Preview
      className={cn(
        buttonVariants({ variant, size, clickEffect: false }),
        "w-full justify-start",
        "px-3",
        "whitespace-pre-wrap font-normal text-base sm:text-sm",
        "dark:hover:bg-input/32",
        "data-placeholder-shown:text-muted-foreground",
        "in-[[data-slot=editable-area]:has(textarea)]:items-start",
        className
      )}
      data-slot="editable-preview"
      {...rest}
    />
  );
};

export const EditableControl = (
  props: React.ComponentProps<typeof ArkEditable.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkEditable.Control
      className={cn(
        "group-data-[orientation=vertical]/editable:flex-col",
        "inline-flex items-center gap-2",
        className
      )}
      data-slot="editable-control"
      {...rest}
    />
  );
};

export const EditableEditTrigger = (
  props: React.ComponentProps<typeof ArkEditable.EditTrigger>
) => <ArkEditable.EditTrigger data-slot="editable-edit-trigger" {...props} />;

export const EditableCancelTrigger = (
  props: React.ComponentProps<typeof ArkEditable.CancelTrigger>
) => (
  <ArkEditable.CancelTrigger data-slot="editable-cancel-trigger" {...props} />
);

export const EditableSubmitTrigger = (
  props: React.ComponentProps<typeof ArkEditable.SubmitTrigger>
) => (
  <ArkEditable.SubmitTrigger data-slot="editable-submit-trigger" {...props} />
);
