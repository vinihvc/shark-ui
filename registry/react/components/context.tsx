"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import { XIcon } from "lucide-react";
import type React from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  Button,
  type buttonVariants,
} from "@/registry/react/components/button";
import { CircularProgress } from "@/registry/react/components/circular-progress";
import { FormatNumber } from "@/registry/react/components/format";
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { Progress } from "@/registry/react/components/progress";

interface ContextValue {
  costLabel?: string;
  maxTokens: number;
  usedTokens: number;
}

const [ContextValueProvider, _useContextValue] = createContext<ContextValue>({
  name: "ContextValueContext",
  providerName: "Context",
});

interface ContextProps extends React.ComponentProps<typeof Popover> {
  costLabel?: string;
  maxTokens: number;
  usedTokens: number;
}

export const Context = (props: ContextProps) => {
  const { costLabel, maxTokens, usedTokens, modal = false, ...rest } = props;

  return (
    <ContextValueProvider value={{ costLabel, maxTokens, usedTokens }}>
      <Popover
        data-slot="context"
        modal={modal}
        positioning={{ placement: "top" }}
        {...rest}
      />
    </ContextValueProvider>
  );
};

export const ContextIcon = ({ className }: { className?: string }) => {
  const { maxTokens, usedTokens } = _useContextValue();

  const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;

  return (
    <CircularProgress
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
      size={16}
      thickness={2}
      value={usedPercent * 100}
    />
  );
};

interface ContextButtonProps
  extends React.ComponentProps<typeof PopoverTrigger>,
    VariantProps<typeof buttonVariants> {}

export const ContextTrigger = (props: ContextButtonProps) => {
  const {
    size = "sm",
    variant = "ghost",
    asChild: _,
    children,
    ...rest
  } = props;

  const { maxTokens, usedTokens } = _useContextValue();

  const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;

  const content = (
    <>
      <span>
        <span className="sr-only">Context used </span>
        <FormatNumber
          maximumFractionDigits={1}
          style="percent"
          value={usedPercent}
        />
      </span>
      <ContextIcon />
    </>
  );

  return (
    <PopoverTrigger asChild data-slot="context-trigger" {...rest}>
      <Button
        className="font-normal text-muted-foreground"
        size={size}
        variant={variant}
      >
        {children ?? content}
      </Button>
    </PopoverTrigger>
  );
};

export const ContextContent = (
  props: React.ComponentProps<typeof PopoverContent>
) => {
  const { className, ...rest } = props;

  return (
    <PopoverContent
      className={cn("w-72 gap-0 p-0 [--space:--spacing(2)]", className)}
      data-slot="context-content"
      {...rest}
    />
  );
};

interface ContextHeaderProps
  extends Omit<React.ComponentProps<typeof PopoverHeader>, "title"> {
  /**
   * The title of the context panel.
   */
  title?: string;
}

export const ContextHeader = (props: ContextHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <PopoverHeader
      className={cn("flex flex-col gap-2 border-b", className)}
      data-slot="context-header"
      {...rest}
    >
      {!!title && <ContextTitle>{title}</ContextTitle>}
      {!title && typeof children === "string" ? (
        <ContextTitle>{children}</ContextTitle>
      ) : (
        children
      )}
    </PopoverHeader>
  );
};

interface ContextTitleProps extends React.ComponentProps<typeof PopoverTitle> {
  /**
   * Show a close button beside the title.
   *
   * @default false
   */
  showCloseButton?: boolean;
}

export const ContextTitle = (props: ContextTitleProps) => {
  const { className, showCloseButton = false, ...rest } = props;

  return (
    <ark.div
      className="flex items-center justify-between gap-2"
      data-slot="context-title"
    >
      <PopoverTitle
        className={cn("font-normal text-muted-foreground text-xs", className)}
        {...rest}
      />

      {!!showCloseButton && (
        <PopoverClose asChild>
          <Button
            aria-label="Close"
            className="text-muted-foreground hover:text-foreground"
            pill
            size="icon-xs"
            type="button"
            variant="ghost"
          >
            <XIcon aria-hidden="true" className="size-3.5" />
          </Button>
        </PopoverClose>
      )}
    </ark.div>
  );
};

export const ContextMeter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  const { maxTokens, usedTokens } = _useContextValue();

  const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;

  return (
    <ark.div
      className={cn("flex flex-col gap-2", className)}
      data-slot="context-meter"
      {...rest}
    >
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="font-medium text-muted-foreground">
          <FormatNumber
            maximumFractionDigits={1}
            style="percent"
            value={usedPercent}
          />
        </span>
        <span className="text-muted-foreground tabular-nums">
          <FormatNumber notation="compact" value={usedTokens} /> /{" "}
          <FormatNumber notation="compact" value={maxTokens} />
        </span>
      </div>
      <Progress value={usedPercent * 100} />
    </ark.div>
  );
};

export const ContextBody = (
  props: React.ComponentProps<typeof PopoverBody>
) => {
  const { className, ...rest } = props;

  return (
    <PopoverBody
      className={cn("flex flex-col gap-2", className)}
      data-slot="context-body"
      {...rest}
    />
  );
};

export const ContextFooter = (
  props: React.ComponentProps<typeof PopoverFooter>
) => {
  const { children, className, ...rest } = props;

  const { costLabel } = _useContextValue();

  return (
    <PopoverFooter
      className={cn(
        "flex-row items-center justify-between sm:justify-between",
        "py-(--space)",
        "text-xs",
        className
      )}
      data-slot="context-footer"
      {...rest}
    >
      {children ?? (
        <>
          <span className="text-foreground">Total cost</span>
          <span className="font-medium text-muted-foreground tabular-nums">
            {costLabel ?? "-"}
          </span>
        </>
      )}
    </PopoverFooter>
  );
};

export interface ContextUsageRowProps
  extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the usage row.
   */
  title: string;
  /**
   * The number of tokens for the row.
   */
  value: number;
}

export const ContextUsageRow = (props: ContextUsageRowProps) => {
  const { className, title, value, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex items-center justify-between gap-2 text-xs",
        className
      )}
      {...rest}
    >
      <span className="text-foreground">{title}</span>
      <span className="text-muted-foreground tabular-nums">
        <FormatNumber notation="compact" value={value} />
      </span>
    </ark.div>
  );
};
