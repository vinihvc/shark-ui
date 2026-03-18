"use client";

import { ark, Presence, type PresenceProps } from "@ark-ui/react";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

interface HintContextValue {
  /**
   * The id of the hint.
   *
   * @default "React.useId()"
   */
  id: string;
  /**
   * Whether the hint is visible.
   */
  isVisible: boolean;
  /**
   * The positioning of the action bar.
   */
  positioning: {
    /**
     * The offset from the edge in pixels.
     *
     * @default '16px'
     */
    offset?: string;
    /**
     * The placement of the action bar.
     *
     * @default "top"
     */
    placement?: "top" | "bottom" | "left" | "right";
  };
  /**
   * Set the visibility of the hint.
   */
  setIsVisible: (value: boolean) => void;
}

interface HintProps extends React.ComponentProps<typeof ark.div> {
  /**
   * Placement and offset of the hint.
   */
  positioning?: HintContextValue["positioning"];
}

const HintContext = React.createContext({} as HintContextValue);

const defaultPositioning = { placement: "top", offset: "10px" } as const;

export const Hint = (props: HintProps) => {
  const { positioning, className, children, ...rest } = props;

  const positioningValue = {
    ...defaultPositioning,
    ...positioning,
  };

  const hintId = `hint${React.useId()}`;

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <HintContext.Provider
      value={{
        isVisible,
        positioning: positioningValue,
        setIsVisible,
        id: hintId,
      }}
    >
      <ark.div
        aria-describedby={hintId}
        className={cn("relative inline-flex whitespace-nowrap", className)}
        data-placement={positioningValue.placement}
        data-slot="hint"
        data-state={isVisible ? "open" : "closed"}
        style={
          {
            "--offset": positioningValue.offset,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </ark.div>
    </HintContext.Provider>
  );
};

export const HintTrigger = (props: React.ComponentProps<typeof ark.button>) => {
  const { className, children, ...rest } = props;

  const { isVisible, setIsVisible, id } = _useHint();

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
    "z-50 w-fit",
    "px-3 py-1.5",
    "bg-foreground",
    "text-background text-xs",
    "rounded-lg shadow-md/5",
    "fade-in-0 zoom-in-[98%] animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
  ],
  variants: {
    placement: {
      bottom: [
        "top-full left-1/2 -translate-x-1/2",
        "mt-(--offset)",
        "data-[state=open]:slide-in-from-top-5 origin-bottom",
      ],
      right: [
        "start-full top-1/2 ms-(--offset) -translate-y-1/2",
        "ms-(--offset)",
        "data-[state=open]:slide-in-from-start-5 origin-end",
      ],
      left: [
        "end-full top-1/2 me-(--offset) -translate-y-1/2",
        "me-(--offset)",
        "data-[state=open]:slide-in-from-end-5 origin-start",
      ],
      top: [
        "bottom-full left-1/2 mb-(--offset) -translate-x-1/2",
        "mb-(--offset)",
        "data-[state=open]:slide-in-from-bottom-5 origin-top",
      ],
    },
  },
  defaultVariants: {
    placement: "top",
  },
});

interface HintContentProps
  extends React.ComponentProps<typeof ark.div>,
    Pick<PresenceProps, "lazyMount" | "unmountOnExit"> {}

export const HintContent = (props: HintContentProps) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    className,
    children,
    ...rest
  } = props;

  const { positioning, isVisible, id } = _useHint();

  return (
    <Presence
      asChild
      lazyMount={lazyMount}
      present={isVisible}
      unmountOnExit={unmountOnExit}
    >
      <ark.div
        className={cn(
          hintContentVariants({ placement: positioning.placement }),
          className
        )}
        data-placement={positioning.placement}
        data-slot="hint-content"
        data-state={isVisible ? "open" : "closed"}
        id={id}
        role="tooltip"
        {...rest}
      >
        {children}
        <HintArrow />
      </ark.div>
    </Presence>
  );
};

const hintArrowVariants = tv({
  base: "absolute rotate-225",
  variants: {
    placement: {
      bottom: ["-top-0.5 left-1/2 -translate-x-1/2"],
      top: ["-bottom-0.5 left-1/2 -translate-x-1/2"],
      right: ["-inset-s-0.5 top-1/2 -translate-y-1/2"],
      left: ["-inset-e-0.5 top-1/2 -translate-y-1/2"],
    },
  },
});

export const HintArrow = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  const { positioning } = _useHint();

  return (
    <ark.div
      className={cn(
        hintArrowVariants({ placement: positioning.placement }),
        className
      )}
      data-placement={positioning.placement}
      data-slot="hint-arrow"
      {...rest}
    >
      <ark.div className="size-2 bg-foreground" data-slot="hint-arrow-tip" />
    </ark.div>
  );
};

const _useHint = () => {
  const context = React.useContext(HintContext);

  if (!context) {
    throw new Error("useHint must be used within a Hint");
  }

  return context;
};
