import {
  ImageCropper as ArkImageCropper,
  useImageCropper as useArkImageCropper,
} from "@ark-ui/solid/image-cropper";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useImageCropper = useArkImageCropper;

interface ImageCropperProps
  extends ComponentProps<typeof ArkImageCropper.Root> {}

export const ImageCropper = (props: ImageCropperProps) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkImageCropper.Root
      class={cn(
        "[--cropper-accent:var(--color-white)] [--cropper-handler-size:--spacing(2)] [--cropper-handler-width:--spacing(1)]",
        "relative",
        "w-full",
        "aspect-video",
        className
      )}
      data-slot="image-cropper"
      {...rest}
    >
      <ArkImageCropper.Viewport
        class={cn("size-full", "overflow-hidden")}
        data-slot="image-cropper-viewport"
      >
        {children}
      </ArkImageCropper.Viewport>
    </ArkImageCropper.Root>
  );
};

export const ImageCropperImage = (
  props: ComponentProps<typeof ArkImageCropper.Image>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkImageCropper.Image
      class={cn(
        "absolute top-0 left-0",
        "size-full object-contain",
        "select-none",
        "backface-hidden",
        "pointer-events-none",
        "origin-center",
        className
      )}
      data-slot="image-cropper-image"
      {...rest}
    />
  );
};

interface ImageCropperSelectionProps
  extends ComponentProps<typeof ArkImageCropper.Selection> {
  /**
   * The axis of the grid to show.
   *
   * @default "both"
   */
  axis?: "horizontal" | "vertical" | "both";
}

export const ImageCropperSelection = (props: ImageCropperSelectionProps) => {
  const { axis = "both", className, children, ...rest } = props;

  return (
    <ArkImageCropper.Selection
      class={cn(
        "shadow-[0_0_0_9999px_rgb(0_0_0/0.5)]",
        "border-2 border-white/64",
        "backface-visibility-hidden",
        "cursor-move",
        "data-[shape=circle]:rounded-full",
        "outline-none focus-visible:border-(--cropper-accent)",
        "data-disabled:cursor-default",
        "data-dragging:cursor-grabbing data-dragging:border-white/84",
        className
      )}
      data-slot="image-cropper-selection"
      {...rest}
    >
      {children}

      {(axis === "horizontal" || axis === "both") && (
        <ImageCropperGrid axis="horizontal" />
      )}
      {(axis === "vertical" || axis === "both") && (
        <ImageCropperGrid axis="vertical" />
      )}

      <ImageCropperHandle position="n" />
      <ImageCropperHandle position="e" />
      <ImageCropperHandle position="s" />
      <ImageCropperHandle position="w" />
      <ImageCropperHandle position="ne" />
      <ImageCropperHandle position="se" />
      <ImageCropperHandle position="sw" />
      <ImageCropperHandle position="nw" />
    </ArkImageCropper.Selection>
  );
};

export const ImageCropperHandle = (
  props: ComponentProps<typeof ArkImageCropper.Handle>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkImageCropper.Handle
      class={cn(
        "absolute flex touch-none items-center justify-center",
        "h-[calc(var(--cropper-handler-size)+8px)] w-[calc(var(--cropper-handler-size)+8px)]",
        "data-disabled:hidden",
        "data-[position=ne]:cursor-nesw-resize data-[position=nw]:cursor-nwse-resize",
        "data-[position=se]:cursor-nwse-resize data-[position=sw]:cursor-nesw-resize",
        "data-[position=n]:cursor-ns-resize data-[position=s]:cursor-ns-resize",
        "data-[position=e]:cursor-ew-resize data-[position=w]:cursor-ew-resize",
        "border-(--cropper-accent)",
        "[&>span]:bg-(--cropper-accent) [&>span]:shadow-[0_1px_3px_rgb(0_0_0/0.3)]",
        "data-[position=nw]:hover:**:scale-110 [&[data-position=nw]_*]:size-(--cropper-handler-size) [&[data-position=nw]_*]:border-t-[length:(--cropper-handler-width)] [&[data-position=nw]_*]:border-l-[length:(--cropper-handler-width)] [&[data-position=nw]_*]:bg-(--cropper-accent)",
        "data-[position=ne]:hover:**:scale-110 [&[data-position=ne]_*]:size-(--cropper-handler-size) [&[data-position=ne]_*]:border-t-[length:(--cropper-handler-width)] [&[data-position=ne]_*]:border-r-[length:(--cropper-handler-width)] [&[data-position=ne]_*]:bg-(--cropper-accent)",
        "data-[position=se]:hover:**:scale-110 [&[data-position=se]_*]:size-(--cropper-handler-size) [&[data-position=se]_*]:border-r-[length:(--cropper-handler-width)] [&[data-position=se]_*]:border-b-[length:(--cropper-handler-width)] [&[data-position=se]_*]:bg-(--cropper-accent)",
        "data-[position=sw]:hover:**:scale-110 [&[data-position=sw]_*]:size-(--cropper-handler-size) [&[data-position=sw]_*]:border-b-[length:(--cropper-handler-width)] [&[data-position=sw]_*]:border-l-[length:(--cropper-handler-width)] [&[data-position=sw]_*]:bg-(--cropper-accent)",
        "[&[data-position=n]_*]: data-[position=n]:hover:**:opacity-100 [&[data-position=n]_*]:size-1.5 [&[data-position=n]_*]:opacity-0",
        "data-[position=s]:hover:**:opacity-100 [&[data-position=s]_*]:size-1.5 [&[data-position=s]_*]:bg-(--cropper-accent) [&[data-position=s]_*]:opacity-0",
        "data-[position=e]:hover:**:opacity-100 [&[data-position=e]_*]:size-1.5 [&[data-position=e]_*]:bg-(--cropper-accent) [&[data-position=e]_*]:opacity-0",
        "data-[position=w]:hover:**:opacity-100 [&[data-position=w]_*]:size-1.5 [&[data-position=w]_*]:bg-(--cropper-accent) [&[data-position=w]_*]:opacity-0",
        className
      )}
      data-slot="image-cropper-handle"
      {...rest}
    >
      <span aria-hidden class="block size-(--cropper-handler-size)" />
    </ArkImageCropper.Handle>
  );
};

export const ImageCropperGrid = (
  props: ComponentProps<typeof ArkImageCropper.Grid>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkImageCropper.Grid
      class={cn(
        "absolute",
        "opacity-0",
        "pointer-events-none",
        "transition-opacity duration-200",
        "data-[axis=horizontal]:inset-[33.33%_0] data-[axis=horizontal]:border-white/40 data-[axis=horizontal]:border-t data-[axis=horizontal]:border-b",
        "data-[axis=vertical]:inset-0_[33.33%] data-[axis=vertical]:border-white/40 data-[axis=vertical]:border-r data-[axis=vertical]:border-l",
        "data-dragging:opacity-100",
        "data-panning:opacity-100",
        className
      )}
      data-slot="image-cropper-grid"
      {...rest}
    />
  );
};
