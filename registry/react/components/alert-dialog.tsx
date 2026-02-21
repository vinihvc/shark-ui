import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
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
} from "@/registry/react/components/dialog";

export const AlertDialog = (props: React.ComponentProps<typeof Dialog>) => {
  return <Dialog data-slot="alert-dialog-root" role="alertdialog" {...props} />;
};

export const AlertDialogTrigger = (
  props: React.ComponentProps<typeof DialogTrigger>
) => {
  return <DialogTrigger data-slot="alert-dialog-trigger" {...props} />;
};

export const AlertDialogContent = (
  props: React.ComponentProps<typeof DialogContent>
) => {
  return (
    <DialogContent
      data-slot="alert-dialog-content"
      showCloseButton={false}
      {...props}
    />
  );
};

export const AlertDialogBody = (
  props: React.ComponentProps<typeof DialogBody>
) => {
  const { className, ...rest } = props;
  return (
    <DialogBody
      className={cn(
        "in-[[data-slot=alert-dialog-content]:has([data-slot=alert-dialog-header])]:pt-0",
        className
      )}
      data-slot="alert-dialog-body"
      {...rest}
    />
  );
};

export const AlertDialogHeader = (
  props: React.ComponentProps<typeof DialogHeader>
) => {
  return <DialogHeader data-slot="alert-dialog-header" {...props} />;
};

export const AlertDialogTitle = (
  props: React.ComponentProps<typeof DialogTitle>
) => {
  return <DialogTitle data-slot="alert-dialog-title" {...props} />;
};

export const AlertDialogDescription = (
  props: React.ComponentProps<typeof DialogDescription>
) => {
  return <DialogDescription data-slot="alert-dialog-description" {...props} />;
};

export const AlertDialogClose = (
  props: React.ComponentProps<typeof DialogClose>
) => {
  return <DialogClose data-slot="alert-dialog-close" {...props} />;
};

export const AlertDialogFooter = (
  props: React.ComponentProps<typeof DialogFooter>
) => {
  return <DialogFooter data-slot="alert-dialog-footer" {...props} />;
};

interface AlertDialogActionProps
  extends React.ComponentProps<typeof DialogClose> {
  /**
   * The variant of the action button
   *
   * @default "default"
   */
  variant?: "default" | "destructive";
}

export const AlertDialogAction = (props: AlertDialogActionProps) => {
  const { variant = "default", children, ...rest } = props;

  return (
    <DialogClose asChild data-slot="alert-dialog-action" {...rest}>
      <Button variant={variant}>{children}</Button>
    </DialogClose>
  );
};

export const AlertDialogCancel = (
  props: React.ComponentProps<typeof DialogClose>
) => {
  const { children, ...rest } = props;

  return (
    <DialogClose asChild data-slot="alert-dialog-cancel" {...rest}>
      <Button variant="outline">{children}</Button>
    </DialogClose>
  );
};
