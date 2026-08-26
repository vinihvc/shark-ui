"use client";

import {
  Drawer as ArkDrawer,
  DrawerContext,
  useDrawerContext,
} from "@ark-ui/react/drawer";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const useDrawer = useDrawerContext;

interface DrawerModalContextProps {
  /**
   * Used internally to show or hide overlay
   *
   * @default true
   */
  modal?: boolean;
}

const DrawerModalContext = React.createContext({} as DrawerModalContextProps);

export const DrawerProvider = (
  props: React.ComponentProps<typeof ArkDrawer.Indent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkDrawer.Stack>
      <ArkDrawer.IndentBackground
        className={cn(
          "[--indent-opacity:calc(0.1*(1-var(--drawer-swipe-progress,0)))]",
          "fixed inset-0 z-50",
          "bg-background",
          "opacity-0",
          "pointer-events-none",
          "transition-opacity duration-300 ease-in",
          "data-[state=open]:opacity-(--indent-opacity)",
          "motion-reduce:transition-none!"
        )}
        data-slot="drawer-indent-background"
      />
      <ArkDrawer.Indent
        className={cn(
          "[--indent-radius:calc(1rem*(1-var(--drawer-swipe-progress,0)))]",
          "data-active:transform-[scale(calc(0.98+(0.02*var(--drawer-swipe-progress))))_translateY(calc(0.5rem*(1-var(--drawer-swipe-progress))))]",
          "transition-[border-radius,transform] duration-300 ease-in-out will-change-transform",
          "data-active:rounded-(--indent-radius)",
          "motion-reduce:transition-none!",
          className
        )}
        data-slot="drawer-indent"
        {...rest}
      >
        {children}
      </ArkDrawer.Indent>
    </ArkDrawer.Stack>
  );
};

export const Drawer = (props: React.ComponentProps<typeof ArkDrawer.Root>) => {
  const {
    modal = true,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <DrawerModalContext.Provider value={{ modal }}>
      <ArkDrawer.Root
        data-slot="drawer"
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </DrawerModalContext.Provider>
  );
};

export const DrawerTrigger = (
  props: React.ComponentProps<typeof ArkDrawer.Trigger>
) => <ArkDrawer.Trigger data-slot="drawer-trigger" {...props} />;

const drawerOverlayVariants = tv({
  base: [
    "[--bg:rgb(0_0_0/calc(0.32*(1-var(--drawer-swipe-progress,0))))] [--blur:calc(4px*(1-var(--drawer-swipe-progress,0)))]",
    "fixed inset-0 z-50",
    "bg-(--bg) backdrop-blur-(--blur)",
    "data-[has-nested=drawer]:pointer-events-none",
    "duration-200",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    "motion-reduce:animate-none!",
  ],
});

export const DrawerOverlay = (
  props: React.ComponentProps<typeof ArkDrawer.Backdrop>
) => {
  const { className, ...rest } = props;

  const { modal } = _useDrawerModal();

  if (!modal) {
    return null;
  }

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
    "[--bleed:--spacing(12)] [--inset:--spacing(0)]",
    "fixed inset-0 z-50 overflow-hidden",
    "flex w-screen items-end justify-center",
    "data-[has-nested=drawer]:pointer-events-none",
    "data-[swipe-direction=up]:items-start",
    "data-[swipe-direction=left]:items-stretch data-[swipe-direction=left]:justify-start",
    "data-[swipe-direction=right]:items-stretch data-[swipe-direction=right]:justify-end",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "",
      inset: [
        "px-(--inset) sm:[--inset:--spacing(4)]",
        "data-[swipe-direction=down]:pb-(--inset)",
        "data-[swipe-direction=up]:pt-(--inset)",
        "data-[swipe-direction=left]:pt-(--inset) data-[swipe-direction=left]:pb-(--inset)",
        "data-[swipe-direction=right]:pt-(--inset) data-[swipe-direction=right]:pb-(--inset)",
      ],
    },
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

// ::after bleed — https://ark-ui.com/docs/components/drawer#preventing-overdrag-gaps
const drawerContentVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "[--stack-peek:1.25rem]",
    "[--stack-scale:calc(1-(var(--nested-drawers,0)*var(--stack-step)))] [--stack-step:0.05]",
    "[--stack-height:calc(var(--drawer-frontmost-height,var(--drawer-height,0px))+var(--stack-peek))]",
    "[interpolate-size:allow-keywords]",
    "group/drawer",
    "relative",
    "touch-none",
    "z-[calc(50+var(--layer-index,0))]",
    "flex min-h-0 w-full flex-col",
    "data-[swipe-direction=down]:max-h-[96svh]",
    "data-[swipe-direction=up]:max-h-[96svh]",
    "data-nested-drawer-open:h-(--stack-height)",
    "data-nested-drawer-open:overflow-hidden",
    "data-nested-drawer-open:pointer-events-none",
    "bg-popover",
    "text-popover-foreground",
    "shadow-lg/5",
    "outline-none",
    "scale-(--stack-scale)",
    "not-data-nested-drawer-open:transition-[transform,scale,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
    "duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] data-nested-drawer-open:transition-[height,scale,translate]",
    "data-swiping:select-none data-swiping:transition-none data-swiping:duration-0",
    "data-dragging:transition-none",
    "data-nested-drawer-swiping:duration-0",
    "data-[swipe-direction=down]:origin-[center_bottom]",
    "data-[swipe-direction=up]:origin-[center_top]",
    "motion-reduce:animate-none! motion-reduce:transition-none!",
    "after:pointer-events-none after:absolute after:bg-inherit after:content-['']",
    "data-[swipe-direction=down]:rounded-t-2xl",
    "data-[swipe-direction=down]:-mb-[max(0,calc(var(--drawer-snap-point-offset-y,0)+clamp(0,1,var(--drawer-snap-point-offset-y,0)/1px)*var(--drawer-swipe-movement-y,0)))]",
    "data-[swipe-direction=down]:pb-[max(0px,calc(env(safe-area-inset-bottom,0px)+var(--drawer-snap-point-offset-y,0px)+clamp(0,1,var(--drawer-snap-point-offset-y,0px)/1px)*var(--drawer-swipe-movement-y,0px)))]",
    "data-[swipe-direction=down]:after:inset-inline-0 data-[swipe-direction=down]:after:top-full data-[swipe-direction=down]:after:h-(--bleed)",
    "data-[swipe-direction=down]:data-[state=open]:animate-drawer-slide-in-bottom",
    "data-[swipe-direction=down]:data-[state=closed]:animate-drawer-slide-out-bottom",
    "data-[swipe-direction=up]:rounded-b-2xl",
    "data-[swipe-direction=up]:pt-[env(safe-area-inset-top,0)]",
    "data-[swipe-direction=up]:after:inset-inline-0 data-[swipe-direction=up]:after:bottom-full data-[swipe-direction=up]:after:h-(--bleed)",
    "data-[swipe-direction=up]:data-[state=open]:animate-drawer-slide-in-top",
    "data-[swipe-direction=up]:data-[state=closed]:animate-drawer-slide-out-top",
    "data-[swipe-direction=left]:h-full data-[swipe-direction=left]:max-h-none data-[swipe-direction=left]:min-h-0 data-[swipe-direction=left]:w-full data-[swipe-direction=left]:max-w-md",
    "data-[swipe-direction=left]:rounded-e-2xl",
    "data-[swipe-direction=left]:ps-[env(safe-area-inset-left,0)]",
    "data-[swipe-direction=left]:after:inset-block-0 data-[swipe-direction=left]:after:inset-e-full data-[swipe-direction=left]:after:inset-inline-auto data-[swipe-direction=left]:after:h-auto data-[swipe-direction=left]:after:w-(--bleed)",
    "data-[swipe-direction=left]:data-[state=open]:animate-drawer-slide-in-left",
    "data-[swipe-direction=left]:data-[state=closed]:animate-drawer-slide-out-left",
    "data-[swipe-direction=right]:h-full data-[swipe-direction=right]:max-h-none data-[swipe-direction=right]:min-h-0 data-[swipe-direction=right]:w-full data-[swipe-direction=right]:max-w-md",
    "data-[swipe-direction=right]:rounded-s-2xl",
    "data-[swipe-direction=right]:pe-[env(safe-area-inset-right,0)]",
    "data-[swipe-direction=right]:after:inset-block-0 data-[swipe-direction=right]:after:inset-inline-auto data-[swipe-direction=right]:after:inset-s-full data-[swipe-direction=right]:after:h-auto data-[swipe-direction=right]:after:w-(--bleed)",
    "data-[swipe-direction=right]:data-[state=open]:animate-drawer-slide-in-right",
    "data-[swipe-direction=right]:data-[state=closed]:animate-drawer-slide-out-right",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "",
      inset: [
        "sm:rounded-2xl sm:border",
        "sm:**:data-[slot=drawer-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
      ],
    },
  },
});

type SnapPoint = number | string;

function needsFullHeightForSnapPoints(snapPoints: SnapPoint[]): boolean {
  if (snapPoints.length !== 1) {
    return true;
  }

  return snapPoints[0] !== 1;
}

interface DrawerContentProps
  extends React.ComponentProps<typeof ArkDrawer.Content>,
    VariantProps<typeof drawerContentVariants> {
  /**
   * Show the drag bar indicator
   *
   * @default true
   */
  showBar?: boolean;
  /**
   * Show close button at the top right corner
   *
   * @default false
   */
  showCloseButton?: boolean;
}

export const DrawerContent = (props: DrawerContentProps) => {
  const {
    variant = "default",
    showBar,
    showCloseButton = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <Portal>
      <DrawerOverlay />

      <DrawerContext>
        {({ snapPoints, swipeDirection }) => {
          const isVertical =
            swipeDirection === "down" || swipeDirection === "up";
          const fullHeight =
            isVertical && needsFullHeightForSnapPoints(snapPoints);

          return (
            <DrawerPositioner variant={variant}>
              <ArkDrawer.Content
                className={cn(
                  drawerContentVariants({ variant }),
                  fullHeight && "h-full",
                  className
                )}
                data-slot="drawer-content"
                {...rest}
              >
                <DrawerGrabber show={showBar} />

                {children}

                {!!showCloseButton && (
                  <DrawerClose asChild>
                    <Button
                      aria-label="Close"
                      className="absolute inset-e-4 top-4 opacity-64 hover:opacity-100 group-data-[swipe-direction=up]/drawer:top-[calc(1rem+env(safe-area-inset-top,0))]"
                      size="icon-sm"
                      variant="ghost"
                    >
                      <XIcon aria-hidden />
                    </Button>
                  </DrawerClose>
                )}
              </ArkDrawer.Content>
            </DrawerPositioner>
          );
        }}
      </DrawerContext>
    </Portal>
  );
};

interface DrawerGrabberProps
  extends React.ComponentProps<typeof ArkDrawer.Grabber> {
  /**
   * Whether to render the grabber for top and bottom drawers
   *
   * @default true
   */
  show?: boolean;
}

export const DrawerGrabber = (props: DrawerGrabberProps) => {
  const { show = true, className, ...rest } = props;

  if (!show) {
    return null;
  }

  return (
    <ArkDrawer.Grabber
      className={cn(
        "hidden shrink-0 cursor-grab touch-none select-none active:cursor-grabbing",
        "group-data-[swipe-direction=down]/drawer:flex group-data-[swipe-direction=down]/drawer:w-full group-data-[swipe-direction=down]/drawer:items-center group-data-[swipe-direction=down]/drawer:justify-center group-data-[swipe-direction=down]/drawer:py-5",
        "group-data-[swipe-direction=up]/drawer:z-10 group-data-[swipe-direction=up]/drawer:order-last group-data-[swipe-direction=up]/drawer:flex group-data-[swipe-direction=up]/drawer:w-full group-data-[swipe-direction=up]/drawer:items-center group-data-[swipe-direction=up]/drawer:justify-center group-data-[swipe-direction=up]/drawer:py-5",
        "group-data-nested-drawer-open/drawer:hidden",
        className
      )}
      data-slot="drawer-grabber"
      {...rest}
    >
      <ArkDrawer.GrabberIndicator
        className="h-1 w-10 rounded-full bg-muted-foreground/32 group-hover/drawer:bg-muted-foreground/48"
        data-slot="drawer-grabber-indicator"
      />
    </ArkDrawer.Grabber>
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

const drawerHeaderVariants = tv({
  base: [
    "shrink-0",
    "flex flex-col gap-2 text-center",
    "p-(--space)",
    "in-[[data-slot=drawer-content]:has([data-slot=drawer-body])]:pb-3",
    "group-data-[swipe-direction=down]/drawer:pt-0",
  ],
});

export const DrawerHeader = (props: DrawerHeaderProps) => {
  const { className, title, description, children, ...rest } = props;

  return (
    <ark.div
      className={cn(drawerHeaderVariants(), className)}
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
      className={cn(
        "text-center font-semibold text-lg leading-none",
        className
      )}
      data-slot="drawer-title"
      {...rest}
    />
  );
};

export const DrawerDescription = (
  props: React.ComponentProps<typeof ArkDrawer.Description>
) => {
  const { className, ...rest } = props;
  return (
    <ArkDrawer.Description
      className={cn("text-center text-muted-foreground text-sm", className)}
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
    <ScrollArea className="min-h-0 flex-1 touch-pan-y" scrollFade={scrollFade}>
      <ark.div
        className={cn(
          "p-(--space) text-center",
          "in-[[data-slot=drawer-content]:has([data-slot=drawer-header])]:pt-0",
          "group-data-[swipe-direction=down]/drawer:in-[[data-slot=drawer-content]:not(:has([data-slot=drawer-header]))]:pt-0",
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

const drawerFooterVariants = tv({
  base: [
    "shrink-0",
    "flex flex-col-reverse gap-2",
    "sm:rounded-none",
    "px-(--space) py-4",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      bare: "",
      default: "border-t bg-muted/48",
    },
  },
});

interface DrawerFooterProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof drawerFooterVariants> {}

export const DrawerFooter = (props: DrawerFooterProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      className={cn(drawerFooterVariants({ variant }), className)}
      data-slot="drawer-footer"
      {...rest}
    />
  );
};

const _useDrawerModal = () => {
  const context = React.useContext(DrawerModalContext);

  if (!context) {
    throw new Error("useDrawerModal must be used within a Drawer");
  }

  return context;
};
