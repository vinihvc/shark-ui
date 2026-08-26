"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import type React from "react";
import { createContext, useCallback, useContext } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  usePopover,
} from "@/registry/react/components/popover";

interface ModelSelectorValue {
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string) => void;
  open?: boolean;
  value?: string;
}

const ModelSelectorContext = createContext<ModelSelectorValue>({});

const useModelSelector = () => useContext(ModelSelectorContext);

interface ModelSelectorProps extends React.ComponentProps<typeof Popover> {
  onValueChange?: (value: string) => void;
  value?: string;
}

export const ModelSelector = (props: ModelSelectorProps) => {
  const { children, onOpenChange, onValueChange, open, value, ...rest } = props;

  return (
    <ModelSelectorContext.Provider
      value={{ onOpenChange, onValueChange, open, value }}
    >
      <Popover
        data-slot="model-selector"
        onOpenChange={onOpenChange}
        open={open}
        {...rest}
      >
        {children}
      </Popover>
    </ModelSelectorContext.Provider>
  );
};

export const ModelSelectorTrigger = (
  props: React.ComponentProps<typeof Button>
) => {
  const { children, className, ...rest } = props;

  return (
    <PopoverTrigger asChild>
      <Button
        className={cn(
          "min-w-0 max-w-56 justify-between gap-2 font-normal",
          className
        )}
        data-slot="model-selector-trigger"
        size="sm"
        type="button"
        variant="outline"
        {...rest}
      >
        <span className="truncate">{children}</span>
        <ChevronsUpDownIcon
          aria-hidden="true"
          className="size-3.5 shrink-0 opacity-64"
        />
      </Button>
    </PopoverTrigger>
  );
};

export const ModelSelectorContent = (
  props: React.ComponentProps<typeof PopoverContent>
) => {
  const { className, ...rest } = props;

  return (
    <PopoverContent
      align="start"
      className={cn("w-64 gap-0 p-1", className)}
      data-slot="model-selector-content"
      {...rest}
    />
  );
};

export const ModelSelectorInput = (props: React.ComponentProps<"input">) => {
  const { className, ...rest } = props;

  return (
    <input
      className={cn(
        "mb-1 h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/32",
        className
      )}
      data-slot="model-selector-input"
      type="search"
      {...rest}
    />
  );
};

export const ModelSelectorList = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex max-h-64 flex-col gap-1 overflow-y-auto", className)}
      data-slot="model-selector-list"
      role="listbox"
      {...rest}
    />
  );
};

export const ModelSelectorEmpty = (props: React.ComponentProps<"div">) => {
  const { className, children = "No models found.", ...rest } = props;

  return (
    <div
      className={cn(
        "px-2 py-6 text-center text-muted-foreground text-sm",
        className
      )}
      data-slot="model-selector-empty"
      {...rest}
    >
      {children}
    </div>
  );
};

export const ModelSelectorGroup = (props: React.ComponentProps<"fieldset">) => {
  const { className, ...rest } = props;

  return (
    <fieldset
      className={cn("m-0 flex flex-col gap-0.5 border-0 p-0", className)}
      data-slot="model-selector-group"
      {...rest}
    />
  );
};

export const ModelSelectorLabel = (props: React.ComponentProps<"legend">) => {
  const { className, ...rest } = props;

  return (
    <legend
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs",
        className
      )}
      data-slot="model-selector-label"
      {...rest}
    />
  );
};

interface ModelSelectorItemProps
  extends Omit<React.ComponentProps<"button">, "value"> {
  value: string;
}

const ModelSelectorItemButton = (props: ModelSelectorItemProps) => {
  const { children, className, onClick, value, ...rest } = props;
  const { onOpenChange, onValueChange, value: selected } = useModelSelector();
  const popover = usePopover();
  const isSelected = selected === value;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onValueChange?.(value);
      popover.setOpen(false);
      onOpenChange?.(false);
      onClick?.(event);
    },
    [onClick, onOpenChange, onValueChange, popover, value]
  );

  return (
    <button
      aria-selected={isSelected}
      className={cn(
        "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-start text-sm outline-none hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
        isSelected && "bg-accent/60",
        className
      )}
      data-slot="model-selector-item"
      onClick={handleClick}
      role="option"
      type="button"
      {...rest}
    >
      <span className="min-w-0 flex-1 truncate">{children}</span>
      <CheckIcon
        aria-hidden="true"
        className={cn(
          "size-3.5 shrink-0",
          isSelected ? "opacity-100" : "opacity-0"
        )}
      />
    </button>
  );
};

export const ModelSelectorItem = (props: ModelSelectorItemProps) => (
  <ModelSelectorItemButton {...props} />
);
