"use client";

import { Portal } from "@ark-ui/react/portal";
import {
  Toast as ArkToast,
  Toaster as ArkToaster,
  createToaster,
  type ToastStatusChangeDetails,
  useToastContext,
} from "@ark-ui/react/toast";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Spinner } from "@/registry/react/components/spinner";

export const useToast = useToastContext;

const toastVariants = tv({
  base: [
    "z-(--z-index) translate-x-(--x) translate-y-(--y)",
    "relative",
    "h-(--height) w-full min-w-90 max-w-fit max-sm:min-w-72",
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
  ],
});

interface ToasterProps
  extends Omit<ComponentProps<typeof ArkToaster>, "toaster" | "children"> {
  /**
   * Toaster instance
   */
  toaster?: ReturnType<typeof createToaster>;
}

export const Toaster = (props: ToasterProps) => {
  const { toaster: toasterInstance = baseToaster, className, ...rest } = props;

  return (
    <Portal>
      <ArkToaster toaster={toasterInstance} {...rest}>
        {(toastItem) => <ToastItem toast={toastItem} />}
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

interface ToastItemProps extends ComponentProps<typeof ArkToast.Root> {
  /**
   * The toast item data
   */
  toast: ArkToast.Options;
}

export const ToastItem = (props: ToastItemProps) => {
  const { toast: toastData, className, ...rest } = props;

  const ToastIcon = toastData.type
    ? TOAST_ICONS[toastData.type as keyof typeof TOAST_ICONS]
    : null;

  const toastKey = (toastData as { meta?: { toastKey?: string } }).meta
    ?.toastKey;

  return (
    <ArkToast.Root
      className={cn(toastVariants(), className)}
      data-slot="toast"
      {...(toastKey && { "data-toast-key": toastKey })}
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

        {toastData.closable && (
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

const activeToasts = new Map<string, string>();

const getToastKey = (
  options: Pick<BaseToastOptions, "id" | "title" | "description">
): string => {
  const id = options.id ?? "";
  const title = String(options.title ?? "");
  const description = String(options.description ?? "");
  const uniqueKey = `${id}-${title}-${description}`;

  return `toast-${btoa(uniqueKey).slice(0, 16).replace(/\+/g, "-").replace(/\//g, "_")}`;
};

const animateExistingToast = (toastKey: string, type?: string): void => {
  const element = document.querySelector(`[data-toast-key="${toastKey}"]`);

  if (!element) {
    return;
  }

  if (type === "error") {
    element.animate(ERROR_ANIMATION_KEYS, {
      duration: 400,
      easing: "ease-out",
    });
  } else {
    element.animate(ANIMATION_KEYS, { duration: 300, easing: "ease-in" });
  }
};

type BaseToastOptions = Parameters<typeof baseToaster.create>[0];

const createWithDedupe = (options: BaseToastOptions) => {
  const { id, meta, onStatusChange, ...rest } = options;

  if (id === undefined || id === "") {
    return baseToaster.create({ ...rest, meta, onStatusChange });
  }

  const toastKey = getToastKey(options);
  const existingId = activeToasts.get(toastKey);

  if (existingId) {
    const element = document.querySelector(`[data-toast-key="${toastKey}"]`);
    if (element) {
      animateExistingToast(toastKey, options.type);
      return existingId;
    }
    activeToasts.delete(toastKey);
  }

  const toastId = baseToaster.create({
    ...rest,
    id,
    meta: { ...(meta && typeof meta === "object" ? meta : {}), toastKey },
    onStatusChange: (details: ToastStatusChangeDetails) => {
      if (details.status === "unmounted") {
        activeToasts.delete(toastKey);
      }
      onStatusChange?.(details);
    },
  });

  activeToasts.set(toastKey, toastId);

  return toastId;
};

const baseToaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  pauseOnPageIdle: true,
});

export const toast = {
  ...baseToaster,
  create: (options: BaseToastOptions) => createWithDedupe({ ...options }),
  success: (options: BaseToastOptions) =>
    createWithDedupe({ ...options, type: "success" }),
  error: (options: BaseToastOptions) =>
    createWithDedupe({ ...options, type: "error" }),
  warning: (options: BaseToastOptions) =>
    createWithDedupe({ ...options, type: "warning" }),
  info: (options: BaseToastOptions) =>
    createWithDedupe({ ...options, type: "info" }),
  loading: (options: BaseToastOptions) =>
    createWithDedupe({ ...options, type: "loading" }),
};

export const ERROR_ANIMATION_KEYS: Keyframe[] = [
  { transform: "translateX(0)" },
  { transform: "translateX(-4px)" },
  { transform: "translateX(4px)" },
  { transform: "translateX(-2px)" },
  { transform: "translateX(2px)" },
  { transform: "translateX(0)" },
];

export const ANIMATION_KEYS: Keyframe[] = [
  { transform: "scale(1)" },
  { transform: "scale(0.98)" },
  { transform: "scale(1.02)" },
  { transform: "scale(1)" },
];
