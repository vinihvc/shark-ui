import { Drawer as ArkDrawer, useDrawerContext } from "@ark-ui/solid/drawer";
import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/solid/components/scroll-area";

export const useDrawer = useDrawerContext;

export const DrawerProvider = (
  props: ComponentProps<typeof ArkDrawer.Indent>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkDrawer.Stack>
      <ArkDrawer.IndentBackground
        class={cn(
          "[--indent-opacity:calc(0.1*(1-var(--drawer-swipe-progress,0)))]",
          "fixed inset-0 z-50",
          "bg-background",
          "opacity-0",
          "transition-opacity duration-300 ease-in",
          "data-[state=open]:opacity-(--indent-opacity)",
          "pointer-events-none"
        )}
        data-slot="drawer-indent-background"
      />
      <ArkDrawer.Indent
        class={cn(
          "[--indent-radius:calc(1rem*(1-var(--drawer-swipe-progress,0)))]",
          "data-active:transform-[scale(calc(0.98+(0.02*var(--drawer-swipe-progress))))_translateY(calc(0.5rem*(1-var(--drawer-swipe-progress))))]",
          "transition-[border-radius,transform] duration-300 ease-in-out will-change-transform",
          "data-active:rounded-(--indent-radius)",
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

export const Drawer = (props: ComponentProps<typeof ArkDrawer.Root>) => {
  const {
    // when is true, swipe return error, waiting fix
    lazyMount = false,
    unmountOnExit = false,
    //
    ...rest
  } = props;

  return (
    <ArkDrawer.Root
      data-slot="drawer"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const DrawerTrigger = (
  props: ComponentProps<typeof ArkDrawer.Trigger>
) => <ArkDrawer.Trigger data-slot="drawer-trigger" {...props} />;

const drawerOverlayVariants = tv({
  base: [
    "[--bg:rgb(0_0_0/calc(0.32*(1-var(--drawer-swipe-progress))))] [--blur:calc(4px*(1-var(--drawer-swipe-progress)))]",
    "fixed inset-0 z-50",
    "bg-(--bg) backdrop-blur-(--blur)",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
  ],
});

export const DrawerOverlay = (
  props: ComponentProps<typeof ArkDrawer.Backdrop>
) => {
  const { class: className, ...rest } = props;
  return (
    <ArkDrawer.Backdrop
      class={cn(drawerOverlayVariants(), className)}
      data-slot="drawer-backdrop"
      {...rest}
    />
  );
};

const drawerPositionerVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "flex items-end justify-center",
    "w-screen",
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
  extends ComponentProps<typeof ArkDrawer.Positioner>,
    VariantProps<typeof drawerPositionerVariants> {}

export const DrawerPositioner = (props: DrawerPositionerProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkDrawer.Positioner
      class={cn(drawerPositionerVariants({ variant }), className)}
      data-slot="drawer-positioner"
      {...rest}
    />
  );
};

const drawerContentVariants = tv({
  base: [
    "[--bleed:3rem] [--space:--spacing(4)]",
    "group/drawer",
    "relative",
    "z-[calc(50+var(--layer-index,0))]",
    "max-h-[calc(80vh+var(--bleed))] w-full",
    "-mb-(--bleed) pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))]",
    "bg-popover",
    "text-popover-foreground",
    "flex flex-col",
    "duration-300 ease-in-out will-change-transform",
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
        "size-full",
        "rounded-e-2xl",
      ],
      right: [
        "data-[state=open]:slide-in-from-right data-[state=open]:animate-in",
        "data-[state=closed]:slide-out-to-right data-[state=closed]:animate-out",
        "max-h-none max-w-md",
        "size-full",
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

const SWIPE_DIRECTION_TO_PLACEMENT = {
  start: "left",
  end: "right",
  up: "up",
  down: "down",
} as const;

interface DrawerContentProps
  extends ComponentProps<typeof ArkDrawer.Content>,
    VariantProps<typeof drawerContentVariants> {}

export const DrawerContent = (props: DrawerContentProps) => {
  const { variant = "default", className, children, ...rest } = props;

  return (
    <>
      <DrawerOverlay />
      <ArkDrawer.Context>
        {({ swipeDirection }) => (
          <DrawerPositioner variant={variant}>
            <ArkDrawer.Content
              class={cn(
                drawerContentVariants({
                  variant,
                  placement: SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection],
                }),
                className
              )}
              {...rest}
              data-slot="drawer-content"
            >
              <DrawerGrabber />

              {children}
            </ArkDrawer.Content>
          </DrawerPositioner>
        )}
      </ArkDrawer.Context>
    </>
  );
};

export const DrawerContentInner = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "flex flex-1 flex-col",
        "mx-auto w-full max-w-sm",
        "text-center",
        "transition-opacity duration-300",
        "group-data-[nested=drawer]/drawer:opacity-0 group-data-[nested=drawer]/drawer:data-[state=open]:opacity-100",
        className
      )}
      data-slot="drawer-content-inner"
      {...rest}
    />
  );
};

export const DrawerGrabber = (
  props: ComponentProps<typeof ArkDrawer.Grabber>
) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div class="p-(--space)">
      <ArkDrawer.Grabber
        class={cn(
          "h-1 w-12",
          "mx-auto",
          "hidden shrink-0",
          "bg-muted-foreground/32",
          "rounded-full",
          "touch-none",
          "group-data-[swipe-direction=down]/drawer:flex",
          className
        )}
        {...rest}
        data-slot="drawer-grabber"
      >
        <ArkDrawer.GrabberIndicator
          class="size-full rounded-full"
          data-slot="drawer-grabber-indicator"
        />
      </ArkDrawer.Grabber>
    </ark.div>
  );
};

interface DrawerHeaderProps extends ComponentProps<typeof ark.div> {
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
  const { class: className, title, description, children, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "flex flex-col gap-2",
        "p-(--space) pt-0",
        "in-[[data-slot=drawer-content]:has([data-slot=drawer-body])]:pb-3",
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

export const DrawerTitle = (props: ComponentProps<typeof ArkDrawer.Title>) => {
  const { class: className, ...rest } = props;
  return (
    <ArkDrawer.Title
      class={cn("font-semibold text-lg leading-none", className)}
      data-slot="drawer-title"
      {...rest}
    />
  );
};

export const DrawerDescription = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;
  return (
    <ark.div
      class={cn("text-muted-foreground text-sm", className)}
      data-slot="drawer-description"
      {...rest}
    />
  );
};

interface DrawerBodyProps extends ComponentProps<typeof ark.div> {
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
        class={cn(
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
  props: ComponentProps<typeof ArkDrawer.CloseTrigger>
) => <ArkDrawer.CloseTrigger data-slot="drawer-close" {...props} />;

export const DrawerFooter = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "**:data-[slot=drawer-content-inner]:flex-col-reverse **:data-[slot=drawer-content-inner]:gap-2",
        "flex flex-col-reverse gap-2",
        "sm:rounded-none",
        "px-(--space) py-4",
        "bg-muted/48",
        "border-t",
        className
      )}
      data-slot="drawer-footer"
      {...rest}
    />
  );
};
