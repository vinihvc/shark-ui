"use client";

import { ark } from "@ark-ui/react";
import { Drawer as ArkDrawer } from "@ark-ui/react/drawer";
import { Portal } from "@ark-ui/react/portal";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const DrawerProvider = (
  props: React.ComponentProps<typeof ArkDrawer.Root>
) => {
  const { children, ...rest } = props;

  return (
    <ArkDrawer.Stack {...rest}>
      <ArkDrawer.IndentBackground
        className={cn(
          "absolute inset-0",
          "bg-black dark:bg-gray-300",
          "pointer-events-none"
        )}
        data-slot="drawer-indent-background"
      />
      <ArkDrawer.Indent
        className={cn(
          "[--indent-progress:var(--drawer-swipe-progress)]",
          "[--indent-radius:calc(1rem*(1-var(--indent-progress)))]",
          "[--indent-transition:calc(1-clamp(0,calc(var(--drawer-swipe-progress)*100000),1))]",
          "relative min-h-[320px]",
          "border border-border bg-background p-4 text-foreground",
          "[transition:transform_0.4s_cubic-bezier(0.32,0.72,0,1),border-radius_0.25s_cubic-bezier(0.32,0.72,0,1)]",
          "origin-[center_top] will-change-transform",
          "transform-[scale(1)_translateY(0)]",
          "duration-[calc(400ms*var(--indent-transition)),calc(250ms*var(--indent-transition))]",
          "data-active:transform-[scale(calc(0.98+(0.02*var(--indent-progress))))_translateY(calc(0.5rem*(1-var(--indent-progress))))]",
          "data-active:rounded-tl-(--indent-radius)",
          "data-active:rounded-tr-(--indent-radius)"
        )}
        data-slot="drawer-indent"
      >
        {children}
      </ArkDrawer.Indent>
    </ArkDrawer.Stack>
  );
};

export const Drawer = (props: React.ComponentProps<typeof ArkDrawer.Root>) => (
  <ArkDrawer.Root data-slot="drawer" {...props} />
);

export const DrawerTrigger = (
  props: React.ComponentProps<typeof ArkDrawer.Trigger>
) => <ArkDrawer.Trigger data-slot="drawer-trigger" {...props} />;

const drawerOverlayVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "bg-black/32 backdrop-blur-sm",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
  ],
});

export const DrawerOverlay = (
  props: React.ComponentProps<typeof ArkDrawer.Backdrop>
) => {
  const { className, ...rest } = props;
  return (
    <ArkDrawer.Backdrop
      className={cn(drawerOverlayVariants(), className)}
      data-slot="drawer-backdrop"
      {...rest}
    />
  );
};

const drawerPositionerVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "flex items-end justify-center",
    "has-data-[swipe-direction=up]:items-start",
    "has-data-[swipe-direction=left]:items-stretch has-data-[swipe-direction=left]:justify-start",
    "has-data-[swipe-direction=right]:items-stretch has-data-[swipe-direction=right]:justify-end",
  ],
  variants: {
    variant: {
      default: "",
      inset: "sm:p-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface DrawerPositionerProps
  extends React.ComponentProps<typeof ArkDrawer.Positioner>,
    VariantProps<typeof drawerPositionerVariants> {}

export const DrawerPositioner = (props: DrawerPositionerProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkDrawer.Positioner
      className={cn(drawerPositionerVariants({ variant }), className)}
      data-slot="drawer-positioner"
      {...rest}
    />
  );
};

const drawerContentVariants = tv({
  base: [
    "[--bleed:3rem]",
    "[--space:--spacing(5)]",
    "group/drawer",
    "z-[calc(50+var(--layer-index,0))]",
    "-mb-(--bleed) box-border max-h-[calc(80vh+var(--bleed))] w-full",
    "rounded-t-2xl outline-1 outline-border",
    "bg-popover px-6 py-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))]",
    "overflow-y-auto overscroll-contain text-popover-foreground",
    "relative flex flex-col will-change-transform",
    "duration-300 ease-in-out",
    "data-swiping:select-none",
    "-translate-y-[calc(1.25rem*var(--nested-layer-count))]",
    "scale-[calc(1-0.1*var(--nested-layer-count))] opacity-[calc(1-0.1*var(--nested-layer-count))]",
    "data-[nested=drawer]:data-[state=closed]:slide-in-from-bottom-10 data-[nested=drawer]:data-[state=open]:slide-in-from-bottom-10 data-[has-nested=drawer]:origin-top",
  ],
  variants: {
    placement: {
      up: [
        "data-[state=open]:slide-in-from-top data-[state=open]:animate-in",
        "data-[state=closed]:slide-out-to-top data-[state=closed]:animate-out",
        "rounded-b-2xl",
      ],
      down: [
        "data-[state=closed]:slide-out-to-bottom data-[state=closed]:animate-out",
        "data-[state=open]:slide-in-from-bottom data-[state=open]:animate-in",
        "rounded-t-2xl",
      ],
      left: [
        "data-[state=open]:slide-in-from-left data-[state=open]:animate-in",
        "data-[state=closed]:slide-out-to-left data-[state=closed]:animate-out",
        "max-h-none max-w-md",
        "h-full w-full",
        "rounded-e-2xl",
      ],
      right: [
        "data-[state=open]:slide-in-from-right data-[state=open]:animate-in",
        "data-[state=closed]:slide-out-to-right data-[state=closed]:animate-out",
        "max-h-none max-w-md",
        "h-full w-full",
        "rounded-s-2xl",
      ],
    },
    variant: {
      default: "",
      inset: [
        "sm:rounded-2xl sm:border",
        "sm:**:data-[slot=drawer-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
      ],
    },
  },
  defaultVariants: {
    placement: "down",
    variant: "default",
  },
});

interface DrawerContentProps
  extends React.ComponentProps<typeof ArkDrawer.Content>,
    VariantProps<typeof drawerContentVariants> {}

export const DrawerContent = (props: DrawerContentProps) => {
  const { variant = "default", className, children, ...rest } = props;

  return (
    <Portal>
      <DrawerOverlay />
      <ArkDrawer.Context>
        {(drawer) => (
          <DrawerPositioner variant={variant}>
            <ArkDrawer.Content
              className={cn(
                drawerContentVariants({
                  variant,
                  placement: drawer.swipeDirection,
                }),
                className
              )}
              data-slot="drawer-content"
              {...rest}
            >
              <ArkDrawer.Grabber
                className={cn(
                  "h-1 w-12",
                  "mx-auto mb-4",
                  "hidden shrink-0",
                  "bg-muted-foreground/32",
                  "rounded-full",
                  "group-data-[swipe-direction=down]/drawer:flex",
                  "cursor-grab touch-none active:cursor-grabbing"
                )}
                data-slot="drawer-grabber"
              >
                <ArkDrawer.GrabberIndicator
                  className="size-full rounded-full"
                  data-slot="drawer-grabber-indicator"
                />
              </ArkDrawer.Grabber>

              {children}
            </ArkDrawer.Content>
          </DrawerPositioner>
        )}
      </ArkDrawer.Context>
    </Portal>
  );
};

interface DrawerHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The description of the drawer
   */
  description?: string;
  /**
   * The title of the drawer
   */
  title?: string;
}

export const DrawerHeader = (props: DrawerHeaderProps) => {
  const { className, title, description, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-col gap-2 p-(--space) in-[[data-slot=drawer-content]:has([data-slot=drawer-body])]:pb-3",
        className
      )}
      data-slot="drawer-header"
      {...rest}
    >
      {!!title && <DrawerTitle>{title}</DrawerTitle>}

      {!!description && <DrawerDescription>{description}</DrawerDescription>}

      {!title && typeof children === "string" ? (
        <DrawerTitle>{children}</DrawerTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const DrawerTitle = (
  props: React.ComponentProps<typeof ArkDrawer.Title>
) => {
  const { className, ...rest } = props;
  return (
    <ArkDrawer.Title
      className={cn("font-semibold text-lg leading-none", className)}
      data-slot="drawer-title"
      {...rest}
    />
  );
};

export const DrawerDescription = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="drawer-description"
      {...rest}
    />
  );
};

interface DrawerBodyProps extends React.ComponentProps<typeof ark.div> {
  /**
   * Add a fade effect to the scroll area
   *
   * @default false
   */
  scrollFade?: boolean;
}

export const DrawerBody = (props: DrawerBodyProps) => {
  const { scrollFade = false, className, ...rest } = props;

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        className={cn(
          "flex-1",
          "p-(--space)",
          "overflow-auto",
          "in-[[data-slot=drawer-content]:has([data-slot=drawer-header])]:pt-0",
          "in-[[data-slot=drawer-content]:has([data-slot=drawer-footer]:not(.border-t))]:pb-1",
          className
        )}
        data-slot="drawer-body"
        {...rest}
      />
    </ScrollArea>
  );
};

export const DrawerClose = (
  props: React.ComponentProps<typeof ArkDrawer.CloseTrigger>
) => <ArkDrawer.CloseTrigger data-slot="drawer-close" {...props} />;

export const DrawerFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-col-reverse gap-2",
        "sm:rounded-none",
        "px-(--space) py-4",
        "bg-muted/72",
        "border-t",
        className
      )}
      data-slot="drawer-footer"
      {...rest}
    />
  );
};
