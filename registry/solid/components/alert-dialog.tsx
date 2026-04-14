import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/solid/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/solid/components/dialog";

export const AlertDialog = (props: ComponentProps<typeof Dialog>) => {
  return <Dialog data-slot="alert-dialog-root" role="alertdialog" {...props} />;
};

export const AlertDialogTrigger = (
  props: ComponentProps<typeof DialogTrigger>
) => {
  return <DialogTrigger data-slot="alert-dialog-trigger" {...props} />;
};

export const AlertDialogContent = (
  props: ComponentProps<typeof DialogContent>
) => {
  return (
    <DialogContent
      data-slot="alert-dialog-content"
      showCloseButton={false}
      {...props}
    />
  );
};

export const AlertDialogBody = (props: ComponentProps<typeof DialogBody>) => {
  const { class: className, ...rest } = props;
  return (
    <DialogBody
      class={cn(
        "in-[[data-slot=alert-dialog-content]:has([data-slot=alert-dialog-header])]:pt-0",
        className
      )}
      data-slot="alert-dialog-body"
      {...rest}
    />
  );
};

export const AlertDialogHeader = (
  props: ComponentProps<typeof DialogHeader>
) => {
  return <DialogHeader data-slot="alert-dialog-header" {...props} />;
};

export const AlertDialogTitle = (props: ComponentProps<typeof DialogTitle>) => {
  return <DialogTitle data-slot="alert-dialog-title" {...props} />;
};

export const AlertDialogDescription = (
  props: ComponentProps<typeof DialogDescription>
) => {
  return <DialogDescription data-slot="alert-dialog-description" {...props} />;
};

export const AlertDialogClose = (props: ComponentProps<typeof DialogClose>) => {
  return <DialogClose data-slot="alert-dialog-close" {...props} />;
};

export const AlertDialogFooter = (
  props: ComponentProps<typeof DialogFooter>
) => {
  return <DialogFooter data-slot="alert-dialog-footer" {...props} />;
};

interface AlertDialogActionProps
  extends ComponentProps<typeof DialogClose>,
    Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @default "default"
   */
  variant?: "default" | "destructive";
}

export const AlertDialogAction = (props: AlertDialogActionProps) => {
  const { variant = "default", ...rest } = props;

  return (
    <DialogClose asChild data-slot="alert-dialog-action">
      <Button variant={variant} {...rest} />
    </DialogClose>
  );
};

interface AlertDialogCancelProps
  extends ComponentProps<typeof DialogClose>,
    Omit<ButtonProps, "variant"> {}

export const AlertDialogCancel = (props: AlertDialogCancelProps) => {
  return (
    <DialogClose asChild data-slot="alert-dialog-cancel">
      <Button variant="outline" {...props} />
    </DialogClose>
  );
};
