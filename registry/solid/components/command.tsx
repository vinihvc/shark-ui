import { Combobox as ArkCombobox } from "@ark-ui/solid/combobox";
import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { SearchIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  type ComboboxItem,
  ComboboxList,
  comboboxItemVariants,
} from "@/registry/solid/components/combobox";
import {
  Dialog,
  type DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPositioner,
  DialogTrigger,
  dialogContentVariants,
} from "@/registry/solid/components/dialog";
import type { InputProps } from "@/registry/solid/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/solid/components/input-group";
import { MenuShortcut } from "@/registry/solid/components/menu";
import { Separator } from "@/registry/solid/components/separator";

export const CommandDialog = Dialog;

export const CommandDialogTrigger = (
  props: ComponentProps<typeof DialogTrigger>
) => {
  return <DialogTrigger data-slot="command-dialog-trigger" {...props} />;
};

interface CommandDialogContentProps
  extends ComponentProps<typeof DialogContent> {
  /**
   * The description of the dialog
   *
   * @default "Search for a command to run..."
   */
  description?: string;
  /**
   * The title of the dialog
   *
   * @default "Command Palette"
   */
  title?: string;
}

export const CommandDialogContent = (props: CommandDialogContentProps) => {
  const {
    size = "lg",
    title = "Command Palette",
    description = "Search for a command to run...",
    class: className,
    children,
    ...rest
  } = props;

  return (
    <>
      <DialogOverlay />

      <DialogPositioner>
        <ArkDialog.Content
          class={cn(
            "max-sm:row-start-1",
            dialogContentVariants({ size }),
            "border-0 p-0",
            className
          )}
          data-slot="command-dialog-content"
          {...rest}
        >
          <DialogHeader
            class="sr-only"
            description={description}
            title={title}
          />

          {children}
        </ArkDialog.Content>
      </DialogPositioner>
    </>
  );
};

export const Command: ArkCombobox.RootComponent = (props) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <Combobox
      class={cn(
        "isolate",
        "flex min-h-0 flex-1 flex-col",
        "p-2",
        "bg-popover",
        "text-popover-foreground",
        "rounded-2xl border",
        className
      )}
      closeOnSelect={false}
      disableLayer
      inputBehavior="autohighlight"
      lazyMount={lazyMount}
      loopFocus={false}
      open
      selectionBehavior="clear"
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

interface CommandInputProps
  extends Omit<ComponentProps<typeof ArkCombobox.Input>, "size"> {
  /**
   * The size of the input
   *
   * @default "md"
   */
  size?: InputProps["size"];
}

export const CommandContent = (
  props: ComponentProps<typeof ArkCombobox.Content>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCombobox.Content
      class={cn(
        "flex flex-1 flex-col",
        "max-h-(--available-height) min-h-0",
        "outline-none",
        "overflow-auto",
        "scroll-pr-1 overscroll-contain",
        "[-webkit-scrollbar-track:--spacing(2)] [-webkit-scrollbar:--spacing(2)] [scrollbar-width:thin]",
        "[:not(.has-[+[data-slot=command-footer]])]:rounded-b-2xl [:not(.has-[+[data-slot=command-footer]])]:border-b",
        className
      )}
      data-slot="command-content"
      {...rest}
    />
  );
};

export const CommandInput = (props: CommandInputProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ComboboxControl class="mb-2">
      <InputGroup
        class={cn("rounded-xl bg-input/32", className)}
        size={size}
        {...rest}
      >
        <InputGroupAddon>
          <SearchIcon aria-hidden class="opacity-64" />
        </InputGroupAddon>
        <ArkCombobox.Input asChild data-slot="command-input">
          <InputGroupInput autoFocus />
        </ArkCombobox.Input>
      </InputGroup>
    </ComboboxControl>
  );
};

interface CommandListProps extends ComponentProps<typeof ComboboxList> {}

export const CommandList = (props: CommandListProps) => {
  const { class: className, ...rest } = props;

  return (
    <div class="max-h-72 min-h-0 flex-1">
      <ComboboxList
        class={cn("flex-1 pr-3", className)}
        data-slot="command-list"
        {...rest}
      />
    </div>
  );
};

export const CommandEmpty = (props: ComponentProps<typeof ComboboxEmpty>) => {
  const { class: className, children, ...rest } = props;

  return (
    <ComboboxEmpty
      class={cn("py-6 text-center text-sm", className)}
      data-slot="command-empty"
      {...rest}
    >
      {children || "No results found."}
    </ComboboxEmpty>
  );
};

export const CommandGroup = (props: ComponentProps<typeof ComboboxGroup>) => {
  return <ComboboxGroup data-slot="command-group" {...props} />;
};

export const CommandGroupLabel = (
  props: ComponentProps<typeof ComboboxGroupLabel>
) => {
  return <ComboboxGroupLabel data-slot="command-group-label" {...props} />;
};

export const CommandItem = (props: ComponentProps<typeof ComboboxItem>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCombobox.Item
      class={cn(comboboxItemVariants({ showIndicator: false }), className)}
      data-slot="command-item"
      persistFocus
      {...rest}
    />
  );
};

export const CommandSeparator = (props: ComponentProps<"div">) => {
  const { class: className, ...rest } = props;

  return (
    <Separator
      class={cn("my-2", className)}
      data-slot="command-separator"
      {...rest}
    />
  );
};

export const CommandShortcut = (props: ComponentProps<typeof MenuShortcut>) => {
  return <MenuShortcut data-slot="command-shortcut" {...props} />;
};

export const CommandFooter = (props: ComponentProps<"div">) => {
  const { class: className, ...rest } = props;

  return (
    <div
      class={cn(
        "z-10",
        "flex items-center justify-between gap-2",
        "-m-2 mt-2 px-4 py-3",
        "bg-muted/48",
        "text-muted-foreground text-xs",
        "rounded-b-[calc(var(--radius-2xl,1rem)-1px)] border-t",
        className
      )}
      data-slot="command-footer"
      {...rest}
    />
  );
};
