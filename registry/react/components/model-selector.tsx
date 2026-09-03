"use client";

import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxItem,
  ComboboxList,
  ComboboxPositioner,
  comboboxContentVariants,
  useCombobox,
} from "@/registry/react/components/combobox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

export const ModelSelector: ArkCombobox.RootComponent = (props) => {
  const { positioning, selectionBehavior = "replace", ...rest } = props;

  return (
    <Combobox
      positioning={{
        placement: "top-start",
        sameWidth: false,
        ...positioning,
      }}
      selectionBehavior={selectionBehavior}
      {...rest}
      data-slot="model-selector"
    />
  );
};

interface ModelSelectorTriggerProps
  extends Omit<React.ComponentProps<typeof Button>, "variant"> {
  /**
   * Whether to show the chevron icon.
   *
   * @default false
   */
  showTrigger?: boolean;
  /**
   * @default "outline"
   */
  variant?: "outline" | "ghost";
}

export const ModelSelectorTrigger = (props: ModelSelectorTriggerProps) => {
  const {
    showTrigger = false,
    size = "sm",
    variant = "outline",
    className,
    children,
    ...rest
  } = props;

  const { hasSelectedItems, valueAsString } = useCombobox();

  const label = children ?? (hasSelectedItems ? valueAsString : "Select model");

  const ariaLabel =
    rest["aria-label"] ?? (typeof label === "string" ? label : "Select model");

  return (
    <ArkCombobox.Trigger asChild focusable>
      <Button
        className={cn(
          "min-w-0 max-w-64",
          showTrigger && "justify-between",
          className
        )}
        data-slot="model-selector-trigger"
        size={size}
        variant={variant}
        {...rest}
        aria-label={ariaLabel}
      >
        <span
          className={cn(
            "min-w-0",
            "flex flex-1 items-center gap-2",
            "not-has-data-[slot=model-selector-name]:truncate"
          )}
        >
          {label}
        </span>
        {showTrigger ? (
          <ChevronsUpDownIcon
            aria-hidden="true"
            className="size-3.5 shrink-0 opacity-64"
          />
        ) : null}
      </Button>
    </ArkCombobox.Trigger>
  );
};

export const ModelSelectorContent = (
  props: React.ComponentProps<typeof ArkCombobox.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <ComboboxPositioner>
        <ArkCombobox.Content
          className={cn(comboboxContentVariants(), "w-52 p-2", className)}
          data-slot="model-selector-content"
          {...rest}
        >
          {children}
        </ArkCombobox.Content>
      </ComboboxPositioner>
    </Portal>
  );
};

export const ModelSelectorInput = (
  props: React.ComponentProps<typeof ArkCombobox.Input>
) => {
  const { className, ...rest } = props;

  return (
    <InputGroup
      className={cn("mb-2 rounded-xl bg-input/32", className)}
      data-slot="model-selector-input-group"
      size="md"
    >
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" className="opacity-64" />
      </InputGroupAddon>
      <ArkCombobox.Input asChild {...rest}>
        <InputGroupInput
          aria-label="Search models"
          data-slot="model-selector-input"
        />
      </ArkCombobox.Input>
    </InputGroup>
  );
};

export const ModelSelectorList = (
  props: React.ComponentProps<typeof ComboboxList>
) => {
  const { className, ...rest } = props;

  return (
    <ComboboxList
      className={cn("flex max-h-72 flex-col overflow-y-auto", className)}
      data-slot="model-selector-list"
      {...rest}
    />
  );
};

export const ModelSelectorEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxEmpty
      className={cn("py-6", className)}
      data-slot="model-selector-empty"
      {...rest}
    >
      {children || "No models found."}
    </ComboboxEmpty>
  );
};

export const ModelSelectorGroup = (
  props: React.ComponentProps<typeof ComboboxGroup>
) => <ComboboxGroup data-slot="model-selector-group" {...props} />;

export const ModelSelectorLabel = (
  props: React.ComponentProps<typeof ComboboxGroupLabel>
) => <ComboboxGroupLabel data-slot="model-selector-label" {...props} />;

export const ModelSelectorName = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("min-w-0 truncate text-sm", className)}
      data-slot="model-selector-name"
      {...rest}
    />
  );
};

export const ModelSelectorDescription = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "min-w-0",
        "truncate text-muted-foreground text-xs",
        className
      )}
      data-slot="model-selector-description"
      {...rest}
    />
  );
};

export const ModelSelectorItem = (
  props: React.ComponentProps<typeof ComboboxItem>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxItem
      className={cn(
        "has-data-[slot=model-selector-description]:py-2",
        className
      )}
      data-slot="model-selector-item"
      {...rest}
    >
      <span
        className={cn(
          "min-w-0 flex-1 text-start",
          "has-data-[slot=model-selector-name]:flex",
          "has-data-[slot=model-selector-name]:flex-col",
          "has-data-[slot=model-selector-description]:gap-y-0.5",
          "not-has-data-[slot=model-selector-name]:truncate"
        )}
      >
        {children}
      </span>
    </ComboboxItem>
  );
};
