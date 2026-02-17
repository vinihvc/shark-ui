"use client";

import { ImageCropper as ArkImageCropper } from "@ark-ui/react/image-cropper";
import type React from "react";
import { cn } from "@/lib/utils";

const imageCropperRootClass = cn("flex flex-col gap-4 text-foreground");

const imageCropperViewportClass = cn(
  "relative h-80 w-full overflow-hidden rounded-lg border bg-muted"
);

const imageCropperImageClass = cn("max-w-none select-none");

const imageCropperSelectionClass = cn(
  "border-primary outline-none ring-2 ring-primary/50"
);

const imageCropperHandleClass = cn(
  "size-4 rounded-full border-2 border-primary bg-background outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
);

const imageCropperGridClass = cn("divide-primary/50 border-primary/50");

interface ImageCropperRootProps
  extends React.ComponentProps<typeof ArkImageCropper.Root> {
  className?: string;
}

const ImageCropperRoot = (props: ImageCropperRootProps) => {
  const { className, ...rest } = props;
  return (
    <ArkImageCropper.Root
      className={cn(imageCropperRootClass, className)}
      data-slot="image-cropper"
      {...rest}
    />
  );
};

const ImageCropperViewport = (
  props: React.ComponentProps<typeof ArkImageCropper.Viewport>
) => {
  const { className, ...rest } = props;
  return (
    <ArkImageCropper.Viewport
      className={cn(imageCropperViewportClass, className)}
      data-slot="image-cropper-viewport"
      {...rest}
    />
  );
};

const ImageCropperImage = (
  props: React.ComponentProps<typeof ArkImageCropper.Image>
) => {
  const { className, ...rest } = props;
  return (
    <ArkImageCropper.Image
      className={cn(imageCropperImageClass, className)}
      data-slot="image-cropper-image"
      {...rest}
    />
  );
};

const ImageCropperSelection = (
  props: React.ComponentProps<typeof ArkImageCropper.Selection>
) => {
  const { className, ...rest } = props;
  return (
    <ArkImageCropper.Selection
      className={cn(imageCropperSelectionClass, className)}
      data-slot="image-cropper-selection"
      {...rest}
    />
  );
};

const ImageCropperHandle = (
  props: React.ComponentProps<typeof ArkImageCropper.Handle>
) => {
  const { className, ...rest } = props;
  return (
    <ArkImageCropper.Handle
      className={cn(imageCropperHandleClass, className)}
      data-slot="image-cropper-handle"
      {...rest}
    />
  );
};

const ImageCropperGrid = (
  props: React.ComponentProps<typeof ArkImageCropper.Grid>
) => {
  const { className, ...rest } = props;
  return (
    <ArkImageCropper.Grid
      className={cn(imageCropperGridClass, className)}
      data-slot="image-cropper-grid"
      {...rest}
    />
  );
};

export const ImageCropper = {
  Root: ImageCropperRoot,
  Viewport: ImageCropperViewport,
  Image: ImageCropperImage,
  Selection: ImageCropperSelection,
  Handle: ImageCropperHandle,
  Grid: ImageCropperGrid,
  Context: ArkImageCropper.Context,
  RootProvider: ArkImageCropper.RootProvider,
};

export { useImageCropper } from "@ark-ui/react/image-cropper";
