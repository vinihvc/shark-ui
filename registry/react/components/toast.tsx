"use client";

import { Portal } from "@ark-ui/react";
import {
  Toast as ArkToast,
  Toaster as ArkToaster,
  createToaster,
} from "@ark-ui/react/toast";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react";
import type React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Spinner } from "./spinner";

export const toast = createToaster({
  placement: "bottom-end",
  overlap: true,
  max: 3,
});

const toastVariants = tv({
  base: [
    "z-(--z-index) translate-x-(--x) translate-y-(--y)",
    "relative",
    "flex items-start justify-between gap-1.5",
    "w-full min-w-90 max-sm:min-w-72",
    "px-3.5 py-3",
    "bg-popover",
    "select-none text-card-foreground text-sm",
    "rounded-lg border shadow-lg/5",
    "h-(--height)",
    "scale-(--scale) opacity-(--opacity)",
    "transition-all duration-250 will-change-[translate,opacity,scale]",
    "ease-[cubic-bezier(0.21,1.02,0.73,1)]",
    "data-[state=closed]:transition-[translate,scale,opacity]",
    "data-[state=closed]:duration-[300ms,300ms,150ms]",
    "data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]",
  ],
});

interface ToasterProps
  extends Omit<
    React.ComponentProps<typeof ArkToaster>,
    "toaster" | "children"
  > {
  /**
   * Toaster instance
   */
  toaster?: ReturnType<typeof createToaster>;
}

export const Toaster = (props: ToasterProps) => {
  const { toaster: toasterInstance = toast, className, ...rest } = props;

  return (
    <Portal>
      <ArkToaster toaster={toasterInstance} {...rest}>
        {(toast) => <ToastItem toast={toast} />}
      </ArkToaster>
    </Portal>
  );
};

const TOAST_ICONS = {
  loading: <Spinner />,
  success: <CircleCheckIcon />,
  error: <CircleAlertIcon />,
  info: <InfoIcon />,
  warning: <TriangleAlertIcon />,
} as const;

interface ToastItemProps extends React.ComponentProps<typeof ArkToast.Root> {
  /**
   * The toast item data
   */
  toast: ArkToast.Options;
}

export const ToastItem = (props: ToastItemProps) => {
  const { toast, className, ...rest } = props;

  const ToastIcon = toast.type
    ? TOAST_ICONS[toast.type as keyof typeof TOAST_ICONS]
    : null;

  return (
    <ArkToast.Root
      className={cn(toastVariants(), className)}
      data-slot="toast"
      {...rest}
    >
      <div className="flex items-start gap-1.5">
        <div
          className={cn(
            "in-data-[type=warning]:text-warning",
            "in-data-[type=success]:text-success",
            "in-data-[type=error]:text-destructive",
            "in-data-[type=info]:text-info",
            "[&_svg]:pointer-events-none [&_svg]:h-lh [&_svg]:w-4 [&_svg]:shrink-0"
          )}
          data-slot="toast-icon"
        >
          {ToastIcon}
        </div>

        <div className="flex flex-col gap-0.5">
          <ArkToast.Title
            className="font-medium text-sm"
            data-slot="toast-title"
          >
            {toast.title}
          </ArkToast.Title>

          {toast.description && (
            <ArkToast.Description
              className="text-muted-foreground text-sm"
              data-slot="toast-description"
            >
              {toast.description}
            </ArkToast.Description>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {toast.action && (
          <ArkToast.ActionTrigger
            asChild
            data-slot="toast-action-trigger"
            onClick={toast.action.onClick}
          >
            <Button size="sm" variant="ghost">
              {toast.action.label}
            </Button>
          </ArkToast.ActionTrigger>
        )}

        {toast.closable && (
          <ArkToast.CloseTrigger asChild data-slot="toast-close-trigger">
            <Button
              className="opacity-64 hover:opacity-100"
              size="icon-sm"
              variant="ghost"
            >
              <XIcon />

              <span className="sr-only">Close</span>
            </Button>
          </ArkToast.CloseTrigger>
        )}
      </div>
    </ArkToast.Root>
  );
};
