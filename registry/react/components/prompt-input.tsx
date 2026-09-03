"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import { ArrowUpIcon, SquareIcon } from "lucide-react";
import type React from "react";
import { useLayoutEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTitle,
} from "@/registry/react/components/popover";
import { Spinner } from "@/registry/react/components/spinner";

export type PromptInputStatus = "error" | "ready" | "streaming" | "submitted";

export interface PromptInputSubmitDetail {
  event: React.SubmitEvent<HTMLFormElement>;
  text: string;
}

interface PromptInputContextValue {
  hasText: boolean;
  onStop?: () => void;
  setHasText: (hasText: boolean) => void;
  status: PromptInputStatus;
}

const [PromptInputProvider, usePromptInput] =
  createContext<PromptInputContextValue>({
    name: "PromptInputContext",
    providerName: "PromptInput",
  });

interface PromptInputProps
  extends Omit<React.ComponentProps<typeof ark.form>, "onSubmit"> {
  onStop?: () => void;
  onSubmit?: (detail: PromptInputSubmitDetail) => void;
  status?: PromptInputStatus;
}

export const PromptInput = (props: PromptInputProps) => {
  const {
    className,
    children,
    onStop,
    onSubmit,
    status = "ready",
    ...rest
  } = props;
  const [hasText, setHasText] = useState(false);

  return (
    <PromptInputProvider value={{ hasText, onStop, setHasText, status }}>
      <ark.form
        className={cn("w-full", className)}
        data-slot="prompt-input"
        data-status={status}
        onSubmit={(event) => {
          event.preventDefault();

          const textarea = event.currentTarget.querySelector("textarea");
          const text = textarea?.value.trim() ?? "";

          if (!text) {
            textarea?.focus();
            return;
          }

          onSubmit?.({ event, text });
        }}
        {...rest}
      >
        <InputGroup className="h-auto flex-col items-stretch rounded-2xl focus-within:border-input focus-within:ring-0">
          {children}
        </InputGroup>
      </ark.form>
    </PromptInputProvider>
  );
};

export const PromptInputHeader = (
  props: React.ComponentProps<typeof InputGroupAddon>
) => {
  const { className, ...rest } = props;

  return (
    <InputGroupAddon
      align="block-start"
      className={cn("flex-wrap gap-2", className)}
      data-slot="prompt-input-header"
      {...rest}
    />
  );
};

export const PromptInputFooter = (
  props: React.ComponentProps<typeof InputGroupAddon>
) => {
  const { className, ...rest } = props;

  return (
    <InputGroupAddon
      align="block-end"
      className={cn("min-h-8 justify-between gap-1 px-2 pb-2", className)}
      data-slot="prompt-input-footer"
      {...rest}
    />
  );
};

export const PromptInputTools = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex min-w-0 flex-1 items-center gap-1", className)}
      data-slot="prompt-input-tools"
      {...rest}
    />
  );
};

export const PromptInputTextarea = (
  props: React.ComponentProps<typeof InputGroupTextarea>
) => {
  const { className, defaultValue, onChange, onKeyDown, value, ...rest } =
    props;
  const { setHasText, status } = usePromptInput();

  useLayoutEffect(() => {
    setHasText(Boolean(String(value ?? defaultValue ?? "").trim()));
  }, [defaultValue, setHasText, value]);

  return (
    <InputGroupTextarea
      className={cn("min-h-12 px-3 pt-2 pb-1 leading-6", className)}
      data-slot="prompt-input-textarea"
      defaultValue={defaultValue}
      onChange={(event) => {
        setHasText(Boolean(event.target.value.trim()));
        onChange?.(event);
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);

        if (event.defaultPrevented) {
          return;
        }

        if (
          event.key !== "Enter" ||
          event.shiftKey ||
          event.nativeEvent.isComposing
        ) {
          return;
        }

        if (status === "streaming" || status === "submitted") {
          event.preventDefault();
          return;
        }

        event.preventDefault();
        event.currentTarget.form?.requestSubmit();
      }}
      value={value}
      {...rest}
    />
  );
};

export const PromptInputButton = (
  props: React.ComponentProps<typeof InputGroupButton>
) => {
  const { className, ...rest } = props;

  return (
    <InputGroupButton
      className={cn(
        "[--input-group-inner-radius:var(--radius-md)]",
        "rounded-md",
        className
      )}
      data-slot="prompt-input-button"
      {...rest}
    />
  );
};

export const PromptInputActions = (
  props: React.ComponentProps<typeof Popover>
) => {
  const { modal = false, positioning, ...rest } = props;

  return (
    <Popover
      data-slot="prompt-input-actions"
      modal={modal}
      positioning={{ placement: "top-start", ...positioning }}
      {...rest}
    />
  );
};

export const PromptInputActionsContent = (
  props: React.ComponentProps<typeof PopoverContent>
) => {
  const { className, children, ...rest } = props;

  return (
    <PopoverContent
      className={cn("w-56 gap-0 p-1.5", className)}
      data-slot="prompt-input-actions-content"
      {...rest}
    >
      <PopoverTitle className="sr-only">Add to prompt</PopoverTitle>
      {children}
    </PopoverContent>
  );
};

interface PromptInputActionProps extends React.ComponentProps<"button"> {
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export const PromptInputAction = (props: PromptInputActionProps) => {
  const {
    className,
    children,
    description,
    icon,
    type = "button",
    ...rest
  } = props;

  return (
    <PopoverClose asChild>
      <ark.button
        className={cn(
          "flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left",
          "outline-none transition-colors",
          "hover:bg-muted focus-visible:bg-muted",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        data-slot="prompt-input-action"
        type={type}
        {...rest}
      >
        {icon ? (
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
            {icon}
          </span>
        ) : null}
        <span className="min-w-0">
          <span className="block text-foreground text-sm">{children}</span>
          {description ? (
            <span className="mt-0.5 block text-muted-foreground text-xs leading-4">
              {description}
            </span>
          ) : null}
        </span>
      </ark.button>
    </PopoverClose>
  );
};

export const PromptInputSubmit = (
  props: React.ComponentProps<typeof InputGroupButton>
) => {
  const {
    className,
    children,
    disabled,
    onClick,
    size = "icon-sm",
    type,
    variant = "default",
    ...rest
  } = props;
  const { hasText, onStop, status } = usePromptInput();
  const isStreaming = status === "streaming";
  const isSubmitted = status === "submitted";
  const isDisabled = disabled ?? (isSubmitted || !(isStreaming || hasText));

  let submitIcon = <ArrowUpIcon aria-hidden="true" className="size-4" />;
  if (isSubmitted) {
    submitIcon = <Spinner />;
  } else if (isStreaming) {
    submitIcon = (
      <SquareIcon aria-hidden="true" className="size-3 fill-current" />
    );
  }

  return (
    <PromptInputButton
      aria-label={isStreaming ? "Stop generating" : "Send prompt"}
      className={cn("ms-auto rounded-full", className)}
      data-slot="prompt-input-submit"
      disabled={isDisabled}
      onClick={(event) => {
        if (isStreaming) {
          event.preventDefault();
          onStop?.();
        }
        onClick?.(event);
      }}
      size={size}
      type={isStreaming ? "button" : (type ?? "submit")}
      variant={variant}
      {...rest}
    >
      {children ?? submitIcon}
    </PromptInputButton>
  );
};
