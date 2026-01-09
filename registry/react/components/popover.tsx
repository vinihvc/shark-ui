import { ark } from "@ark-ui/react";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "@/lib/utils";

export const Popover = (
  props: React.ComponentProps<typeof ArkPopover.Root>
) => {
  const {
    positioning = {
      placement: "top",
    },
    lazyMount = true,
    unmountOnExit = true,
    modal = true,
    ...rest
  } = props;

  return (
    <ArkPopover.Root
      data-slot="popover"
      lazyMount={lazyMount}
      modal={modal}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const PopoverTrigger = (
  props: React.ComponentProps<typeof ArkPopover.Trigger>
) => <ArkPopover.Trigger data-slot="popover-trigger" {...props} />;

interface PopoverContentProps
  extends React.ComponentProps<typeof ArkPopover.Content> {
  /**
   * Whether to show the arrow
   */
  showArrow?: boolean;
}

export const PopoverContent = (props: PopoverContentProps) => {
  const { showArrow, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkPopover.Positioner data-slot="popover-positioner">
        <ArkPopover.Content
          className={cn(
            "z-50",
            "w-auto",
            "bg-popover",
            "text-popover-foreground",
            "rounded-md border shadow-md",
            "outline-hidden",
            "origin-(--transform-origin)",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          data-slot="popover-content"
          {...rest}
        >
          {!!showArrow && <PopoverArrow />}

          {children}
        </ArkPopover.Content>
      </ArkPopover.Positioner>
    </Portal>
  );
};

export const PopoverArrow = (
  props: React.ComponentProps<typeof ArkPopover.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkPopover.Arrow
      data-slot="popover-arrow"
      style={
        {
          "--arrow-background": "var(--popover)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <ArkPopover.ArrowTip className="border-t border-l" />
    </ArkPopover.Arrow>
  );
};

interface PopoverHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the popover header
   */
  title?: string;
  /**
   * The description of the popover header
   */
  description?: string;
}

export const PopoverHeader = (props: PopoverHeaderProps) => {
  const { title, description, children, className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col gap-2 p-4 pb-0", className)}
      data-slot="popover-header"
      {...rest}
    >
      {!!title && <PopoverTitle>{title}</PopoverTitle>}
      {!!description && <PopoverDescription>{description}</PopoverDescription>}
      {!title && typeof children === "string" ? (
        <PopoverTitle>{children}</PopoverTitle>
      ) : (
        children
      )}
    </div>
  );
};

export const PopoverTitle = (
  props: React.ComponentProps<typeof ArkPopover.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPopover.Title
      className={cn(
        "font-semibold text-base leading-none tracking-tight",
        className
      )}
      data-slot="popover-title"
      {...rest}
    />
  );
};

export const PopoverDescription = (
  props: React.ComponentProps<typeof ArkPopover.Description>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPopover.Description
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="popover-description"
      {...rest}
    />
  );
};

export const PopoverBody = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("p-4", className)}
      data-slot="popover-body"
      {...rest}
    />
  );
};

export const PopoverFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("mt-4 flex flex-row-reverse gap-2 p-4", className)}
      data-slot="popover-footer"
      {...rest}
    />
  );
};

export const PopoverClose = (
  props: React.ComponentProps<typeof ArkPopover.CloseTrigger>
) => <ArkPopover.CloseTrigger data-slot="popover-close-trigger" {...props} />;
