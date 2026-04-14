import { ark } from "@ark-ui/solid/factory";
import { Select as ArkSelect, useSelectContext } from "@ark-ui/solid/select";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { inputVariants } from "@/registry/solid/components/input";

export const useSelect = useSelectContext;

export const SelectContext = ArkSelect.Context;

export const Select: ArkSelect.RootComponent = (props) => {
  const { lazyMount = true, unmountOnExit = true, children, ...rest } = props;

  return (
    <ArkSelect.Root
      data-slot="select"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      {children}

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
};

interface SelectTriggerProps
  extends ComponentProps<typeof ArkSelect.Trigger>,
    VariantProps<typeof inputVariants> {
  /**
   * Show clear trigger
   *
   * @default false
   */
  showClearTrigger?: boolean;
}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const {
    showClearTrigger = false,
    size = "md",
    class: className,
    children,
    ...rest
  } = props;

  return (
    <ArkSelect.Control data-slot="select-control">
      <ArkSelect.Trigger
        class={cn(
          inputVariants({ size }),
          "w-fit",
          "flex items-center gap-2",
          "text-sm",
          "data-placeholder-shown:text-muted-foreground/64",
          "data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/32",
          "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
          className
        )}
        data-slot="select-trigger"
        {...rest}
      >
        {children}

        <div class="ms-auto flex items-center gap-1 rtl:me-auto">
          {showClearTrigger && (
            <SelectClearTrigger>
              <XIcon />
            </SelectClearTrigger>
          )}
          <ArkSelect.Indicator data-slot="select-indicator">
            <ChevronsUpDownIcon />
          </ArkSelect.Indicator>
        </div>
      </ArkSelect.Trigger>
    </ArkSelect.Control>
  );
};

export const SelectValue = (
  props: ComponentProps<typeof ArkSelect.ValueText>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSelect.ValueText
      class={cn(
        "min-w-0",
        "flex items-center gap-2",
        "truncate text-nowrap",
        className
      )}
      {...rest}
    />
  );
};

export const SelectContent = (
  props: ComponentProps<typeof ArkSelect.Content>
) => {
  const { class: className, ...rest } = props;

  return (
    <>
      <ArkSelect.Positioner data-slot="select-positioner">
        <ArkSelect.Content
          class={cn(
            "z-50",
            "relative",
            "max-h-96 min-w-(--reference-width)",
            "p-1",
            "bg-popover",
            "text-popover-foreground",
            "rounded-xl border shadow-lg/5",
            "origin-(--transform-origin)",
            "outline-none",
            "overflow-y-auto",
            "duration-100",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in-0",
            "data-[state=open]:zoom-in-[98%]",
            "data-[placement=bottom]:slide-in-from-top-2",
            "data-[placement=left]:slide-in-from-end-2",
            "data-[placement=right]:slide-in-from-start-2",
            "data-[placement=top]:slide-in-from-bottom-2",
            className
          )}
          data-slot="select-content"
          {...rest}
        />
      </ArkSelect.Positioner>
    </>
  );
};

interface SelectGroupProps extends ComponentProps<typeof ArkSelect.ItemGroup> {
  /**
   * The heading of the group
   */
  heading?: string | React.ReactNode;
}

export const SelectGroup = (props: SelectGroupProps) => {
  const { heading, className, children, ...rest } = props;

  return (
    <ArkSelect.ItemGroup
      class={cn(className)}
      data-slot="select-group"
      {...rest}
    >
      {!!heading && <SelectGroupLabel>{heading}</SelectGroupLabel>}

      {children}
    </ArkSelect.ItemGroup>
  );
};

export const SelectGroupLabel = (
  props: ComponentProps<typeof ArkSelect.ItemGroupLabel>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSelect.ItemGroupLabel
      class={cn(
        "px-2 py-1.5",
        "font-semibold text-muted-foreground text-xs",
        className
      )}
      data-slot="select-group-label"
      {...rest}
    />
  );
};

export const SelectItem = (props: ComponentProps<typeof ArkSelect.Item>) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkSelect.Item
      class={cn(
        "relative",
        "w-full",
        "py-1.5 ps-2 pe-8",
        "flex items-center gap-2",
        "select-none text-base md:text-sm",
        "rounded-md",
        "cursor-default",
        "outline-hidden",
        "in-[[data-slot=select-content]:has([data-slot=select-group-label])]:ps-4",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted-foreground",
        className
      )}
      data-slot="select-item"
      {...rest}
    >
      <ArkSelect.ItemText
        class="flex w-full flex-1 items-center gap-2"
        data-slot="select-item-text"
      >
        {children}
      </ArkSelect.ItemText>

      <span class="absolute inset-e-2 flex size-4 items-center justify-center">
        <ArkSelect.ItemIndicator data-slot="select-item-indicator">
          <CheckIcon />
        </ArkSelect.ItemIndicator>
      </span>
    </ArkSelect.Item>
  );
};

export const SelectClearTrigger = (
  props: ComponentProps<typeof ArkSelect.ClearTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSelect.ClearTrigger
      aria-label="Clear selected value(s)"
      class={cn(
        "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        "transition-opacity",
        "opacity-64",
        "outline-none focus-visible:opacity-100",
        "hover:opacity-100",
        className
      )}
      data-slot="select-clear-trigger"
      {...rest}
    />
  );
};

export const SelectEmpty = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  const { empty } = useSelectContext();

  if (empty) {
    return (
      <ark.div
        class={cn(
          "px-2 py-1.5",
          "text-center text-muted-foreground text-sm",
          className
        )}
        role="presentation"
        {...rest}
      />
    );
  }

  return null;
};
