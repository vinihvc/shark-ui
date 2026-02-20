import { ark } from "@ark-ui/react/factory";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const statusVariants = tv({
  slots: {
    root: ["inline-flex items-center gap-2", "text-foreground text-sm"],
    indicator: ["shrink-0 rounded-full", "border-2 border-background"],
  },
  variants: {
    colorPalette: {
      gray: { indicator: "bg-muted-foreground" },
      red: { indicator: "bg-destructive" },
      orange: { indicator: "bg-orange-500" },
      yellow: { indicator: "bg-yellow-500" },
      green: { indicator: "bg-success" },
      teal: { indicator: "bg-teal-500" },
      blue: { indicator: "bg-info" },
      cyan: { indicator: "bg-cyan-500" },
      purple: { indicator: "bg-purple-500" },
      pink: { indicator: "bg-pink-500" },
    },
    size: {
      sm: {
        root: "gap-1.5 text-xs",
        indicator: "size-1.5",
      },
      md: {
        root: "gap-2 text-sm",
        indicator: "size-2",
      },
      lg: {
        root: "gap-2.5 text-base",
        indicator: "size-2.5",
      },
    },
  },
  defaultVariants: {
    colorPalette: "gray",
    size: "md",
  },
});

type StatusContextValue = VariantProps<typeof statusVariants>;

const StatusContext = React.createContext<StatusContextValue>({});

interface StatusRootProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof statusVariants> {}

export const StatusRoot = (props: StatusRootProps) => {
  const {
    colorPalette = "gray",
    size = "md",
    className,
    children,
    ...rest
  } = props;
  const { root } = statusVariants({ colorPalette, size });
  const context = React.useMemo(
    () => ({ colorPalette, size }),
    [colorPalette, size]
  );

  return (
    <StatusContext.Provider value={context}>
      <ark.div
        className={cn(root(), className)}
        data-color-palette={colorPalette}
        data-size={size}
        data-slot="status"
        {...rest}
      >
        {children}
      </ark.div>
    </StatusContext.Provider>
  );
};

export const StatusIndicator = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  const context = React.useContext(StatusContext);
  const { indicator } = statusVariants({
    colorPalette: context.colorPalette ?? "gray",
    size: context.size ?? "md",
  });

  return (
    <ark.div
      className={cn(indicator(), className)}
      data-slot="status-indicator"
      {...rest}
    />
  );
};

export const Status = {
  Root: StatusRoot,
  Indicator: StatusIndicator,
};
