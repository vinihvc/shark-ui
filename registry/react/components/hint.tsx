"use client";

import { ark, Presence, type PresenceProps } from "@ark-ui/react";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

interface HintContextType {
  /**
   * Whether the hint is visible.
   */
  isVisible: boolean;
  /**
   * Set the visibility of the hint.
   */
  setIsVisible: (value: boolean) => void;
  /**
   * The id of the hint.
   *
   * @default "React.useId()"
   */
  id: string;
}

interface HintProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The side that the hint will appear from.
   *
   * @default "top"
   */
  side?: "top" | "bottom" | "left" | "right";
  /**
   * Spacing between the trigger and the hint.
   *
   * @default "1.5"
   */
  offset?: string;
}

const HintContext = React.createContext({} as HintContextType & HintProps);

export const Hint = (props: HintProps) => {
  const { side = "top", offset = "1.5", className, children, ...rest } = props;

  const hintId = `hint${React.useId()}`;

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <HintContext value={{ isVisible, side, setIsVisible, id: hintId }}>
      <ark.div
        aria-describedby={hintId}
        className={cn("relative inline-flex whitespace-nowrap", className)}
        data-side={side}
        data-slot="hint"
        data-state={isVisible ? "open" : "closed"}
        style={
          {
            "--offset": `calc(${offset} * var(--spacing))`,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </ark.div>
    </HintContext>
  );
};

export const HintTrigger = (props: React.ComponentProps<typeof ark.button>) => {
  const { className, children, ...rest } = props;

  const { isVisible, setIsVisible, id } = useHint();

  return (
    <ark.button
      aria-describedby={id}
      data-slot="hint-trigger"
      data-state={isVisible ? "open" : "closed"}
      onBlur={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...rest}
    >
      {children}
    </ark.button>
  );
};

const hintContentVariants = tv({
  base: [
    "absolute",
    "z-40 w-fit",
    "px-3 py-1.5",
    "bg-popover",
    "rounded-md border shadow-md/5",
    "text-foreground text-xs",
    "fade-in-0 zoom-in-95 animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out",
  ],
  variants: {
    side: {
      bottom: [
        "top-full left-1/2 -translate-x-1/2",
        "mt-(--offset)",
        "data-[state=open]:slide-in-from-top-5 origin-bottom",
      ],
      right: [
        "top-1/2 left-full ml-(--offset) -translate-y-1/2",
        "ml-(--offset)",
        "data-[state=open]:slide-in-from-left-5 origin-right",
      ],
      left: [
        "top-1/2 right-full mr-(--offset) -translate-y-1/2",
        "mr-(--offset)",
        "data-[state=open]:slide-in-from-right-5 origin-left",
      ],
      top: [
        "bottom-full left-1/2 mb-(--offset) -translate-x-1/2",
        "mb-(--offset)",
        "data-[state=open]:slide-in-from-bottom-5 origin-top",
      ],
    },
  },
  defaultVariants: {
    side: "top",
  },
});

interface HintContentProps
  extends React.ComponentProps<typeof ark.div>,
    Pick<PresenceProps, "lazyMount" | "unmountOnExit"> {
  /**
   * Whether to lazy mount the hint content.
   *
   * @default true
   */
  lazyMount?: boolean;
}

export const HintContent = (props: HintContentProps) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  const { side, isVisible, id } = useHint();

  return (
    <Presence
      asChild
      lazyMount={lazyMount}
      present={isVisible}
      unmountOnExit={unmountOnExit}
    >
      <ark.div
        className={cn(hintContentVariants({ side }), className)}
        data-side={side}
        data-slot="hint-content"
        data-state={isVisible ? "open" : "closed"}
        id={id}
        role="tooltip"
        {...rest}
      />
    </Presence>
  );
};

const useHint = () => {
  const context = React.use(HintContext);

  if (!context) {
    throw new Error("useHint must be used within a Hint");
  }

  return context;
};
