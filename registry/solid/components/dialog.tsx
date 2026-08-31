import { Dialog as ArkDialog, useDialogContext } from "@ark-ui/solid/dialog";
import { ark } from "@ark-ui/solid/factory";
import { Portal } from "solid-js/web";
import {
  createContext,
  Show,
  splitProps,
  useContext,
  type ComponentProps,
  type JSX,
} from "solid-js";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./_shark/button.contract";
import {
  dialogContentVariants,
  dialogOverlayVariants,
} from "./_shark/dialog.contract";

export { useDialogContext as useDialog };
export {
  dialogContentVariants,
  dialogOverlayVariants,
} from "./_shark/dialog.contract";

const DialogPresentationContext = createContext({ modal: true });

export const Dialog = (props: ComponentProps<typeof ArkDialog.Root>) => {
  const [local, rest] = splitProps(props, [
    "modal",
    "lazyMount",
    "unmountOnExit",
    "children",
  ]);
  return (
    <DialogPresentationContext.Provider value={{ modal: local.modal ?? true }}>
      <ArkDialog.Root
        {...rest}
        lazyMount={local.lazyMount ?? true}
        modal={local.modal ?? true}
        unmountOnExit={local.unmountOnExit ?? true}
      >
        {local.children}
      </ArkDialog.Root>
    </DialogPresentationContext.Provider>
  );
};

export const DialogTrigger = (
  props: ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="dialog-trigger" {...props} />;

export const DialogOverlay = (
  props: ComponentProps<typeof ArkDialog.Backdrop>
) => {
  const presentation = useContext(DialogPresentationContext);
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <Show when={presentation.modal}>
      <ArkDialog.Backdrop
        {...rest}
        class={cn(dialogOverlayVariants(), local.class)}
        data-slot="dialog-overlay"
      />
    </Show>
  );
};

export const DialogPositioner = (
  props: ComponentProps<typeof ArkDialog.Positioner>
) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkDialog.Positioner
      {...rest}
      class={cn(
        "fixed inset-0 z-50",
        "h-svh w-screen",
        "grid grid-rows-[1fr_auto_3fr] justify-items-center",
        "p-4",
        local.class
      )}
      data-slot="dialog-positioner"
    />
  );
};

interface DialogContentProps
  extends ComponentProps<typeof ArkDialog.Content>,
    VariantProps<typeof dialogContentVariants> {
  bottomStickOnMobile?: boolean;
  showCloseButton?: boolean;
}

export const DialogContent = (props: DialogContentProps) => {
  const [local, rest] = splitProps(props, [
    "showCloseButton",
    "bottomStickOnMobile",
    "size",
    "class",
    "children",
  ]);
  const mobile = () => local.bottomStickOnMobile ?? true;
  return (
    <Portal>
      <DialogOverlay />
      <DialogPositioner
        class={cn(
          mobile() && "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12"
        )}
      >
        <ArkDialog.Content
          {...rest}
          class={cn(
            dialogContentVariants({
              bottomStickOnMobile: mobile(),
              size: local.size ?? "md",
            }),
            local.class
          )}
          data-slot="dialog-content"
        >
          {local.children}
          <Show when={local.showCloseButton ?? true}>
            <ArkDialog.CloseTrigger
              aria-label="Close"
              class={cn(
                buttonVariants({ size: "icon-sm", variant: "ghost" }),
                "absolute inset-e-2 top-2 opacity-64 hover:opacity-100"
              )}
              data-slot="dialog-close-trigger"
            >
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                />
              </svg>
            </ArkDialog.CloseTrigger>
          </Show>
        </ArkDialog.Content>
      </DialogPositioner>
    </Portal>
  );
};

interface DialogBodyProps extends ComponentProps<typeof ark.div> {
  scrollFade?: boolean;
}

export const DialogBody = (props: DialogBodyProps) => {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  return (
    <ark.div
      {...rest}
      class={cn(
        "min-h-0 flex-1 overflow-y-auto",
        local.scrollFade &&
          "[mask-image:linear-gradient(to_bottom,transparent,black_1rem,black_calc(100%-1rem),transparent)]",
        "p-(--space)",
        "in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-0",
        "in-[[data-slot=dialog-content]:has([data-slot=dialog-footer]:not(.border-t))]:pb-1",
        local.class
      )}
      data-slot="dialog-body"
    />
  );
};

interface DialogHeaderProps extends ComponentProps<typeof ark.div> {
  description?: string;
  title?: string;
}

export const DialogHeader = (props: DialogHeaderProps) => {
  const [local, rest] = splitProps(props, [
    "class",
    "title",
    "description",
    "children",
  ]);
  return (
    <ark.div
      {...rest}
      class={cn(
        "shrink-0",
        "p-(--space)",
        "flex flex-col gap-2",
        "in-[[data-slot=dialog-content]:has([data-slot=dialog-body])]:pb-3",
        local.class
      )}
      data-slot="dialog-header"
    >
      <Show when={local.title}>
        <DialogTitle>{local.title}</DialogTitle>
      </Show>
      <Show when={local.description}>
        <DialogDescription>{local.description}</DialogDescription>
      </Show>
      <Show when={!local.title}>{local.children}</Show>
    </ark.div>
  );
};

export const DialogTitle = (props: ComponentProps<typeof ArkDialog.Title>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkDialog.Title
      {...rest}
      class={cn("font-heading font-semibold text-lg leading-none", local.class)}
      data-slot="dialog-title"
    />
  );
};

export const DialogDescription = (
  props: ComponentProps<typeof ArkDialog.Description>
) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkDialog.Description
      {...rest}
      class={cn("text-muted-foreground text-sm", local.class)}
      data-slot="dialog-description"
    />
  );
};

export const DialogClose = (
  props: ComponentProps<typeof ArkDialog.CloseTrigger>
) => <ArkDialog.CloseTrigger data-slot="dialog-close-trigger" {...props} />;

export const DialogFooter = (props: ComponentProps<typeof ark.div>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.div
      {...rest}
      class={cn(
        "shrink-0",
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        "sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
        "px-(--space) py-4",
        "bg-muted/48",
        "border-t",
        local.class
      )}
      data-slot="dialog-footer"
    />
  );
};
