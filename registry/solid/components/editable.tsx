import {
  Editable as ArkEditable,
  useEditableContext,
} from "@ark-ui/solid/editable";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import {
  type ButtonProps,
  buttonVariants,
} from "@/registry/solid/components/button";

export const useEditable = useEditableContext;

export interface EditableProps extends ComponentProps<typeof ArkEditable.Root> {
  /**
   * The orientation of the editable
   */
  orientation?: "horizontal" | "vertical";
}

export const Editable = (props: EditableProps) => {
  const { orientation = "horizontal", className, ...rest } = props;

  return (
    <ArkEditable.Root
      class={cn(
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
  props: ComponentProps<typeof ArkEditable.Area>
) => {
  const { class: className, ...rest } = props;
  return (
    <ArkEditable.Area
      class={cn("w-full", className)}
      data-slot="editable-area"
      {...rest}
    />
  );
};

export interface EditableInputProps
  extends Omit<ComponentProps<typeof ArkEditable.Input>, "size"> {}

export const EditableInput = (props: EditableInputProps) => {
  const { class: className, ...rest } = props;

  return (
    <ArkEditable.Input
      class={cn("", className)}
      data-slot="editable-input"
      {...rest}
    />
  );
};

interface EditablePreviewProps
  extends ComponentProps<typeof ArkEditable.Preview> {
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
      class={cn(
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
  props: ComponentProps<typeof ArkEditable.Control>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkEditable.Control
      class={cn(
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
  props: ComponentProps<typeof ArkEditable.EditTrigger>
) => {
  return (
    <ArkEditable.EditTrigger data-slot="editable-edit-trigger" {...props} />
  );
};

export const EditableCancelTrigger = (
  props: ComponentProps<typeof ArkEditable.CancelTrigger>
) => {
  return (
    <ArkEditable.CancelTrigger data-slot="editable-cancel-trigger" {...props} />
  );
};

export const EditableSubmitTrigger = (
  props: ComponentProps<typeof ArkEditable.SubmitTrigger>
) => {
  return (
    <ArkEditable.SubmitTrigger data-slot="editable-submit-trigger" {...props} />
  );
};
