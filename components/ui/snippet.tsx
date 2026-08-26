"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import type React from "react";
import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { formatShadcnCommandDisplay } from "@/lib/shadcn-command";
import { cn } from "@/lib/utils";
import {
  Clipboard,
  ClipboardContext,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  type InputGroupProps,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

export interface SnippetOption {
  code: string | string[];
  icon?: React.ReactNode;
  label: string;
  value: string;
}

const toLines = (value: string | string[] | undefined) => {
  if (value === undefined) {
    return [""];
  }

  return Array.isArray(value) ? value : [value];
};

const toCopyString = (value: string | string[] | undefined) => {
  if (value === undefined) {
    return "";
  }

  return Array.isArray(value) ? value.join("\n") : value;
};

interface SnippetContextValue {
  fallbackLines: string[];
  items?: SnippetOption[];
  placeholder?: string;
  selectedOption?: SnippetOption;
  selectedValue?: string;
  setSelectedValue: (value: string) => void;
}

const SnippetContext = createContext<SnippetContextValue | null>(null);

const _useSnippet = () => {
  const context = useContext(SnippetContext);

  if (!context) {
    throw new Error("Snippet parts must be used within Snippet.");
  }

  return context;
};

interface SnippetProps
  extends Omit<
    React.ComponentProps<typeof Clipboard>,
    "value" | "children" | "defaultValue"
  > {
  /**
   * SnippetSelect, SnippetPrompt, SnippetCode, and SnippetCopy slots. When omitted,
   * `text` renders Code + Copy without a prompt.
   */
  children?: React.ReactNode;
  /**
   * Override the clipboard payload. Defaults to the selected option or `text`.
   */
  copyText?: string;
  /**
   * Uncontrolled selected option.
   */
  defaultValue?: string;
  /**
   * Options for SnippetSelect. Each entry has icon, label, and copy payload.
   */
  items?: SnippetOption[];
  /**
   * Called after the value is copied.
   */
  onCopy?: () => void;
  /**
   * Called when the selected option changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * Placeholder shown when the command is empty.
   */
  placeholder?: string;
  /**
   * Height of the snippet, matching Input Group.
   *
   * @default "md"
   */
  size?: InputGroupProps["size"];
  /**
   * The command to display. Pass an array for a short multi-line block.
   * Place `<SnippetPrompt />` inside `<SnippetCode />` for a leading `$` (visual only).
   */
  text?: string | string[];
  /**
   * Controlled selected option.
   */
  value?: string;
}

const SnippetCommand = (props: {
  isEmpty: boolean;
  isMultiline: boolean;
  lines: string[];
  placeholder?: string;
  prompt?: React.ReactNode;
}) => {
  const { isEmpty, isMultiline, lines, placeholder, prompt } = props;

  const displayLines = lines.map(formatShadcnCommandDisplay);

  if (isEmpty) {
    return (
      <span className="min-w-0 flex-1 truncate px-2 font-mono text-muted-foreground/64 text-sm">
        {placeholder}
      </span>
    );
  }

  if (isMultiline) {
    return (
      <pre className="m-0 min-w-0 flex-1 overflow-x-auto px-2 py-2 font-mono text-sm">
        <code className="flex flex-col gap-0.5">
          {displayLines.map((line) => (
            <span className="flex min-w-0 items-center gap-2" key={line}>
              {prompt}
              <span className="select-text">{line}</span>
            </span>
          ))}
        </code>
      </pre>
    );
  }

  return (
    <code className="flex min-w-0 flex-1 items-center gap-2 px-2 font-mono text-sm">
      {prompt}
      <span className="min-w-0 select-text truncate">{displayLines[0]}</span>
    </code>
  );
};

export const Snippet = (props: SnippetProps) => {
  const {
    text,
    items,
    placeholder,
    copyText,
    onCopy,
    onStatusChange,
    onValueChange,
    size = "md",
    className,
    translations,
    children,
    value,
    defaultValue,
    ...rest
  } = props;

  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const selectedValue = isControlled ? value : uncontrolledValue;

  const setSelectedValue = useCallback(
    (next: string) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }

      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );

  const selectedOption =
    items?.find((item) => item.value === selectedValue) ?? items?.[0];

  const fallbackLines = useMemo(() => toLines(text), [text]);
  const lines = selectedOption ? toLines(selectedOption.code) : fallbackLines;
  const isMultiline = lines.length > 1;
  const copyValue =
    copyText ??
    (selectedOption ? toCopyString(selectedOption.code) : toCopyString(text));

  const handleStatusChange = useCallback(
    (details: { copied: boolean }) => {
      onStatusChange?.(details);
      if (details.copied) {
        onCopy?.();
      }
    },
    [onCopy, onStatusChange]
  );

  const contextValue = useMemo(
    () => ({
      fallbackLines,
      items,
      placeholder,
      selectedOption,
      selectedValue: selectedOption?.value ?? selectedValue,
      setSelectedValue,
    }),
    [
      fallbackLines,
      items,
      placeholder,
      selectedOption,
      selectedValue,
      setSelectedValue,
    ]
  );

  const content =
    children ??
    (text === undefined ? null : (
      <>
        <SnippetCode />
        <SnippetCopy />
      </>
    ));

  return (
    <SnippetContext.Provider value={contextValue}>
      <Clipboard
        {...rest}
        className="w-full"
        data-slot="snippet"
        onStatusChange={handleStatusChange}
        rootClassName={cn("w-full", className)}
        value={copyValue}
      >
        <InputGroup
          className={cn(
            "w-full",
            "focus-within:border-input focus-within:ring-0",
            isMultiline && "h-auto"
          )}
          size={size}
        >
          {content}
        </InputGroup>
      </Clipboard>
    </SnippetContext.Provider>
  );
};

const SnippetMenuItem = (props: { item: SnippetOption }) => {
  const { item } = props;

  const { selectedValue, setSelectedValue } = _useSnippet();
  const isSelected = selectedValue === item.value;

  const handleSelect = useCallback(() => {
    setSelectedValue(item.value);
  }, [item.value, setSelectedValue]);

  return (
    <MenuItem
      className="gap-2 pe-2"
      data-slot="snippet-select-item"
      onSelect={handleSelect}
      value={item.value}
    >
      {item.icon}
      {item.label}
      {isSelected ? (
        <CheckIcon className="ms-auto size-3.5 text-foreground" />
      ) : (
        <span className="ms-auto size-3.5 shrink-0" />
      )}
    </MenuItem>
  );
};

interface SnippetSelectProps {
  className?: string;
  /**
   * Accessible label for the option trigger.
   *
   * @default "Choose command"
   */
  triggerLabel?: string;
}

export const SnippetSelect = (props: SnippetSelectProps) => {
  const { className, triggerLabel = "Choose command" } = props;

  const { items, selectedOption } = _useSnippet();

  if (!items || items.length === 0) {
    return null;
  }

  const triggerOption =
    items.find((item) => item.value === selectedOption?.value) ?? items[0];

  return (
    <InputGroupAddon
      align="inline-start"
      className={cn(
        "cursor-default gap-1 ps-0.5 pe-0",
        "has-[>button]:ms-0",
        className
      )}
      data-slot="snippet-select"
    >
      <Menu positioning={{ gutter: 4, placement: "bottom-start" }}>
        <MenuTrigger asChild>
          <InputGroupButton
            aria-label={triggerLabel}
            className="h-6.5 gap-1 rounded-md ps-1! pe-0.5! text-foreground"
          >
            {triggerOption?.icon}
            <ChevronsUpDownIcon className="size-2.5 shrink-0 text-muted-foreground" />
          </InputGroupButton>
        </MenuTrigger>
        <MenuContent className="min-w-40">
          {items.map((item) => (
            <SnippetMenuItem item={item} key={item.value} />
          ))}
        </MenuContent>
      </Menu>
      <span aria-hidden="true" className="h-4 w-px shrink-0 bg-border" />
    </InputGroupAddon>
  );
};

export const SnippetPrompt = () => (
  <span
    aria-hidden="true"
    className="text-muted-foreground"
    data-slot="snippet-prompt"
  >
    $
  </span>
);

const isSnippetPrompt = (child: React.ReactNode) =>
  isValidElement(child) && child.type === SnippetPrompt;

export const SnippetCode = (props: React.ComponentProps<"div">) => {
  const { children, className, ...rest } = props;

  const { fallbackLines, selectedOption, placeholder } = _useSnippet();

  const lines = selectedOption ? toLines(selectedOption.code) : fallbackLines;

  const isEmpty = lines.every((line) => line.length === 0);

  const isMultiline = lines.length > 1;

  if (children !== undefined) {
    const childArray = Children.toArray(children);
    const prompt = childArray.find(isSnippetPrompt);
    const content = childArray.filter((child) => !isSnippetPrompt(child));
    const usesAutoCommand = content.length === 0;

    if (usesAutoCommand) {
      return (
        <div
          className={cn("flex min-w-0 flex-1", className)}
          data-slot="snippet-code"
          {...rest}
        >
          <SnippetCommand
            isEmpty={isEmpty}
            isMultiline={isMultiline}
            lines={lines}
            placeholder={placeholder}
            prompt={prompt}
          />
        </div>
      );
    }

    return (
      <code
        className={cn(
          "flex min-w-0 flex-1 items-center gap-2 px-2 font-mono text-sm",
          className
        )}
        data-slot="snippet-code"
        {...rest}
      >
        {children}
      </code>
    );
  }

  return (
    <div
      className={cn("flex min-w-0 flex-1", className)}
      data-slot="snippet-code"
      {...rest}
    >
      <SnippetCommand
        isEmpty={isEmpty}
        isMultiline={isMultiline}
        lines={lines}
        placeholder={placeholder}
      />
    </div>
  );
};

export const SnippetCopy = (
  props: React.ComponentProps<typeof InputGroupAddon>
) => {
  const { className, ...rest } = props;

  const handleCopyMouseDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    []
  );

  return (
    <InputGroupAddon
      align="inline-end"
      className={cn("pe-1.5 has-[>button]:me-0", className)}
      data-slot="snippet-copy"
      {...rest}
    >
      <ClipboardTrigger asChild>
        <InputGroupButton onMouseDown={handleCopyMouseDown} size="icon-xs">
          <ClipboardIndicator />
        </InputGroupButton>
      </ClipboardTrigger>
      <ClipboardContext>
        {(clipboard) => (
          <span aria-live="polite" className="sr-only" role="status">
            {clipboard.copied ? "Copied" : ""}
          </span>
        )}
      </ClipboardContext>
    </InputGroupAddon>
  );
};
