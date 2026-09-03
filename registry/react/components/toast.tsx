"use client";

import { Portal } from "@ark-ui/react/portal";
import {
  Toast as ArkToast,
  Toaster as ArkToaster,
  type CreateToasterReturn,
  createToaster,
  useToastContext,
} from "@ark-ui/react/toast";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Spinner } from "@/registry/react/components/spinner";

export const useToast = useToastContext;

export const toast = createToaster({
  max: 3,
  overlap: true,
  placement: "bottom-end",
});

type ToasterProps = Omit<
  React.ComponentProps<typeof ArkToaster>,
  "children"
> & {
  /**
   * Toaster instance
   */
  toaster?: CreateToasterReturn<React.ReactNode>;
};

export const Toaster = (props: ToasterProps) => {
  const { toaster: toasterInstance = toast, className, style, ...rest } = props;

  return (
    <Portal>
      <ArkToaster
        className={cn(
          "w-[calc(100%-var(--viewport-offset-left))] sm:w-(--width)",
          "data-[align=center]:left-[calc(var(--viewport-offset-right)/2)]!",
          "sm:data-[align=center]:w-full",
          className
        )}
        style={{ "--width": "356px", ...style } as React.CSSProperties}
        toaster={
          toasterInstance as React.ComponentProps<typeof ArkToaster>["toaster"]
        }
        {...rest}
      >
        {(toastItem) => <ToastItem toast={toastItem} />}
      </ArkToaster>
    </Portal>
  );
};

const TOAST_ICONS = {
  error: CircleAlertIcon,
  info: InfoIcon,
  loading: Spinner,
  success: CircleCheckIcon,
  warning: TriangleAlertIcon,
} as const;

interface ToastItemProps extends React.ComponentProps<typeof ArkToast.Root> {
  /**
   * The toast item data
   */
  toast: ArkToast.Options;
}

export const ToastItem = (props: ToastItemProps) => {
  const { toast: toastData, className, ...rest } = props;

  const ToastIcon = toastData.type
    ? TOAST_ICONS[toastData.type as keyof typeof TOAST_ICONS]
    : undefined;

  const isExplicitClosable = toastData.closable === false;

  return (
    <ArkToast.Root
      className={cn(
        "z-(--z-index) translate-x-(--x) translate-y-(--y)",
        "relative",
        "w-[calc(100%-var(--viewport-offset-left))] sm:w-(--width)",
        "px-3.5 py-3",
        "flex items-start justify-between gap-1.5",
        "bg-popover",
        "select-none text-card-foreground text-sm",
        "rounded-lg border shadow-lg/5",
        "scale-(--scale) opacity-(--opacity)",
        "transition-all duration-250 will-change-[translate,opacity,scale]",
        "ease-[cubic-bezier(0.21,1.02,0.73,1)]",
        "data-[state=closed]:transition-[translate,scale,opacity]",
        "data-[state=closed]:duration-[300ms,300ms,150ms]",
        "data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]",
        "motion-reduce:transition-none!",
        className
      )}
      data-slot="toast"
      {...rest}
    >
      <div className="flex items-start gap-1.5">
        <div
          className={cn(
            "in-data-[type=warning]:text-warning-foreground",
            "in-data-[type=success]:text-success-foreground",
            "in-data-[type=error]:text-destructive-foreground",
            "in-data-[type=info]:text-info-foreground",
            "[&_svg]:pointer-events-none [&_svg]:h-lh [&_svg]:w-4 [&_svg]:shrink-0"
          )}
          data-slot="toast-icon"
        >
          {ToastIcon ? <ToastIcon /> : null}
        </div>

        <div className="flex flex-col gap-0.5">
          <ArkToast.Title
            className="font-medium text-sm"
            data-slot="toast-title"
          >
            {toastData.title}
          </ArkToast.Title>

          {toastData.description && (
            <ArkToast.Description
              className="text-muted-foreground text-sm"
              data-slot="toast-description"
            >
              {toastData.description}
            </ArkToast.Description>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {toastData.action && (
          <ArkToast.ActionTrigger
            asChild
            data-slot="toast-action-trigger"
            onClick={toastData.action.onClick}
          >
            <Button size="sm" variant="secondary">
              {toastData.action.label}
            </Button>
          </ArkToast.ActionTrigger>
        )}

        {!isExplicitClosable && (
          <ArkToast.CloseTrigger asChild data-slot="toast-close-trigger">
            <Button
              aria-label="Close"
              className="opacity-64 hover:opacity-100"
              size="icon-xs"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </ArkToast.CloseTrigger>
        )}
      </div>
    </ArkToast.Root>
  );
};
