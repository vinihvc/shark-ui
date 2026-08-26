"use client";

import { SendIcon, SquareIcon } from "lucide-react";
import type React from "react";
import { createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";
import { Spinner } from "@/registry/react/components/spinner";

export type PromptInputStatus = "error" | "ready" | "streaming" | "submitted";

export interface PromptInputSubmitDetail {
  event: React.FormEvent<HTMLFormElement>;
  text: string;
}

interface PromptInputContextValue {
  onStop?: () => void;
  status: PromptInputStatus;
}

const PromptInputContext = createContext<PromptInputContextValue>({
  status: "ready",
});

const usePromptInput = () => useContext(PromptInputContext);

interface PromptInputProps
  extends Omit<React.ComponentProps<"form">, "onSubmit"> {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textarea = event.currentTarget.querySelector("textarea");
    const text = textarea?.value.trim() ?? "";

    if (!text) {
      textarea?.focus();
      return;
    }

    onSubmit?.({ event, text });
  };

  return (
    <PromptInputContext.Provider value={{ onStop, status }}>
      <form
        className={cn("w-full", className)}
        data-slot="prompt-input"
        data-status={status}
        onSubmit={handleSubmit}
        {...rest}
      >
        <InputGroup className="h-auto flex-col items-stretch">
          {children}
        </InputGroup>
      </form>
    </PromptInputContext.Provider>
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
      className={cn("justify-between", className)}
      data-slot="prompt-input-footer"
      {...rest}
    />
  );
};

export const PromptInputTools = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex min-w-0 flex-1 items-center gap-1", className)}
      data-slot="prompt-input-tools"
      {...rest}
    />
  );
};

export const PromptInputTextarea = (
  props: React.ComponentProps<typeof InputGroupTextarea>
) => {
  const { className, onKeyDown, ...rest } = props;
  const { status } = usePromptInput();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
  };

  return (
    <InputGroupTextarea
      className={cn("min-h-24", className)}
      data-slot="prompt-input-textarea"
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

export const PromptInputButton = InputGroupButton;

export const PromptInputSubmit = (
  props: React.ComponentProps<typeof InputGroupButton>
) => {
  const { className, children, onClick, type, ...rest } = props;
  const { onStop, status } = usePromptInput();
  const isStreaming = status === "streaming";
  const isSubmitted = status === "submitted";

  let submitIcon = <SendIcon aria-hidden="true" className="size-4" />;
  if (isSubmitted) {
    submitIcon = <Spinner />;
  } else if (isStreaming) {
    submitIcon = (
      <SquareIcon aria-hidden="true" className="size-3 fill-current" />
    );
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isStreaming) {
      event.preventDefault();
      onStop?.();
    }
    onClick?.(event);
  };

  return (
    <InputGroupButton
      aria-label={isStreaming ? "Stop generating" : "Send message"}
      className={cn("ms-auto", className)}
      data-slot="prompt-input-submit"
      disabled={isSubmitted}
      onClick={handleClick}
      size="icon-sm"
      type={isStreaming ? "button" : (type ?? "submit")}
      variant="default"
      {...rest}
    >
      {children ?? submitIcon}
    </InputGroupButton>
  );
};
