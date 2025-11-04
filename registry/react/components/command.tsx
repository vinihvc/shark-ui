import {
  ComboboxContent,
  ComboboxItem,
  ComboboxItemText,
  ComboboxList,
} from "@ark-ui/react/combobox";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
} from "./combobox";

export const Command = <T,>(
  props: React.ComponentProps<typeof Combobox<T>>
) => {
  const { open = true, ...rest } = props;

  return (
    <Combobox
      className={cn(
        "flex flex-col",
        "size-full md:min-w-[450px]",
        "bg-popover",
        "text-popover-foreground",
        "rounded-lg border shadow-md",
        "overflow-hidden"
      )}
      data-scope="command"
      disableLayer
      inputBehavior="autohighlight"
      loopFocus={false}
      open={open}
      selectionBehavior="clear"
      {...rest}
    />
  );
};

export const CommandContent = (
  props: React.ComponentProps<typeof ComboboxContent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxContent
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden",
        className
      )}
      data-scope="command"
      {...rest}
    >
      <ComboboxList className="flex flex-col">{children}</ComboboxList>
    </ComboboxContent>
  );
};

export const CommandItem = (
  props: React.ComponentProps<typeof ComboboxItem>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxItem data-scope="command" persistFocus {...rest}>
      <ComboboxItemText
        className={cn(
          "relative",
          "flex items-center gap-2",
          "px-2 py-1.5",
          "select-none text-sm",
          "cursor-default",
          "outline-hidden",
          "rounded-sm",
          "data-disabled:pointer-events-none data-disabled:opacity-50",
          "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-scope="command"
      >
        {children}
      </ComboboxItemText>
    </ComboboxItem>
  );
};

export const CommandControl = (
  props: React.ComponentProps<typeof ComboboxControl>
) => <ComboboxControl data-scope="command" {...props} />;

export const CommandInput = (
  props: React.ComponentProps<typeof ComboboxInput>
) => {
  const { className, ...rest } = props;

  return (
    <div className="flex h-9 items-center gap-2 border-b px-3">
      <SearchIcon className="size-4 shrink-0 opacity-50" />

      <ComboboxInput
        className={cn(
          "h-10 w-full",
          "flex",
          "py-3",
          "bg-transparent",
          "text-sm",
          "outline-hidden",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export const CommandEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => {
  const { className, ...rest } = props;

  return (
    <ComboboxEmpty
      className={cn("py-6 text-center text-sm", className)}
      data-scope="command"
      {...rest}
    />
  );
};

interface CommandGroupProps
  extends React.ComponentProps<typeof ComboboxItemGroup> {
  /**
   * The heading of the group
   */
  heading?: string | React.ReactNode;
}

export const CommandGroup = (props: CommandGroupProps) => {
  const { heading, className, children, ...rest } = props;

  return (
    <ComboboxItemGroup
      className={cn(
        "overflow-hidden p-1 text-foreground data-empty:hidden",
        className
      )}
      data-scope="command"
      {...rest}
    >
      {heading && (
        <ComboboxItemGroupLabel
          className="px-2 py-1.5 font-medium text-muted-foreground text-xs"
          data-scope="command"
          {...props}
        >
          {heading}
        </ComboboxItemGroupLabel>
      )}

      {children}
    </ComboboxItemGroup>
  );
};

export const CommandShortcut = (props: React.ComponentProps<"span">) => {
  const { className, ...rest } = props;

  return (
    <span
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      data-part="shortcut"
      data-scope="command"
      {...rest}
    />
  );
};
