"use client";

import {
  ImageCropper as ArkImageCropper,
  useImageCropper as useArkImageCropper,
} from "@ark-ui/react/image-cropper";
import type React from "react";
import { cn } from "@/lib/utils";

export const useImageCropper = useArkImageCropper;

interface ImageCropperProps
  extends React.ComponentProps<typeof ArkImageCropper.Root> {}

export const ImageCropper = (props: ImageCropperProps) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Root
      className={cn("flex flex-col gap-4 text-foreground", className)}
      data-slot="image-cropper"
      {...rest}
    />
  );
};

export const ImageCropperViewport = (
  props: React.ComponentProps<typeof ArkImageCropper.Viewport>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Viewport
      className={cn(
        "relative h-80 w-full overflow-hidden rounded-lg border bg-muted",
        className
      )}
      data-slot="image-cropper-viewport"
      {...rest}
    />
  );
};

export const ImageCropperImage = (
  props: React.ComponentProps<typeof ArkImageCropper.Image>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Image
      className={cn("max-w-none select-none", className)}
      data-slot="image-cropper-image"
      {...rest}
    />
  );
};

export const ImageCropperSelection = (
  props: React.ComponentProps<typeof ArkImageCropper.Selection>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Selection
      className={cn(
        "border-primary outline-none ring-2 ring-primary/50",
        className
      )}
      data-slot="image-cropper-selection"
      {...rest}
    />
  );
};

export const ImageCropperHandle = (
  props: React.ComponentProps<typeof ArkImageCropper.Handle>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Handle
      className={cn(
        "size-4 rounded-full border-2 border-primary bg-background outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      data-slot="image-cropper-handle"
      {...rest}
    />
  );
};

export const ImageCropperGrid = (
  props: React.ComponentProps<typeof ArkImageCropper.Grid>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Grid
      className={cn("divide-primary/50 border-primary/50", className)}
      data-slot="image-cropper-grid"
      {...rest}
    />
  );
};
