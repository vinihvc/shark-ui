"use client";

import { Portal } from "@ark-ui/react";
import {
  Toast as ArkToast,
  Toaster as ArkToaster,
  createToaster,
} from "@ark-ui/react/toast";
import {
  CircleAlert,
  CircleCheck,
  Loader,
  TriangleAlert,
  X,
} from "lucide-react";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const TOAST_ICONS: {
  [key: string]: React.ReactNode;
} = {
  loading: <Loader className="animate-spin" />,
  success: <CircleCheck />,
  error: <CircleAlert />,
  info: <React.Fragment />,
  warning: <TriangleAlert />,
};

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24,
  duration: 50_000,
});

export const useToast = () => toaster;

const toastVariants = tv({
  base: [
    "z-(--z-index) translate-x-(--x) translate-y-(--y)",
    "relative",
    "flex items-center gap-2",
    "w-full min-w-[356px] max-w-[420px] sm:max-w-[420px]",
    "px-4 py-3",
    "bg-card text-card-foreground",
    "rounded-lg border shadow-lg",
    "h-(--height)",
    "scale-(--scale) opacity-(--opacity)",
    "will-change-[translate,opacity,scale]",
    "transition-all duration-300",
    "ease-[cubic-bezier(0.21,1.02,0.73,1)]",
    "data-[state=closed]:transition-[translate,scale,opacity]",
    "data-[state=closed]:duration-[400ms,400ms,200ms]",
    "data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const Toaster = (props: ToasterProps) => {
  const {
    toaster: toasterInstance = toaster,
    showCloseButton = true,
    className,
    ...rest
  } = props;

  return (
    <Portal>
      <ArkToaster toaster={toasterInstance} {...rest}>
        {(toast) => {
          const ToastIcon = toast.type
            ? TOAST_ICONS[toast.type as keyof typeof TOAST_ICONS]
            : undefined;

          return (
            <ArkToast.Root
              className={cn(toastVariants(), className)}
              data-slot="toast"
            >
              {ToastIcon}

              <div className="flex flex-col gap-0.5">
                <ArkToast.Title
                  className="font-medium text-sm leading-none tracking-tight"
                  data-slot="toast-title"
                >
                  {toast.title}
                </ArkToast.Title>

                {toast.description && (
                  <ArkToast.Description
                    className="text-muted-foreground text-xs"
                    data-slot="toast-description"
                  >
                    {toast.description}
                  </ArkToast.Description>
                )}
              </div>

              {toast.action && (
                <ArkToast.ActionTrigger
                  data-slot="toast-action-trigger"
                  onClick={toast.action.onClick}
                >
                  {toast.action.label}
                </ArkToast.ActionTrigger>
              )}

              {showCloseButton && (
                <ArkToast.CloseTrigger asChild data-slot="toast-close-trigger">
                  <Button
                    className="absolute top-2 right-2 opacity-70 hover:opacity-100"
                    size="icon-sm"
                    variant="ghost"
                  >
                    <X />

                    <span className="sr-only">Close</span>
                  </Button>
                </ArkToast.CloseTrigger>
              )}
            </ArkToast.Root>
          );
        }}
      </ArkToaster>
    </Portal>
  );
};
