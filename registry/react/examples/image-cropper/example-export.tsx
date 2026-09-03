"use client";

import { Button } from "@/registry/react/components/button";
import {
  ImageCropper,
  ImageCropperContext,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper className="aspect-video w-full max-w-lg">
    <ImageCropperImage alt="Crop me" src="/images/gradients/green-dark.svg" />
    <ImageCropperSelection />
    <ImageCropperContext>
      {(cropper) => (
        <Button
          className="absolute inset-e-3 bottom-3"
          onClick={async () => {
            const image = await cropper.getCroppedImage({
              maxSize: { height: 512, width: 512 },
            });
            const data = cropper.getCropData();

            if (!(image && data)) {
              return;
            }

            const url =
              typeof image === "string" ? image : URL.createObjectURL(image);
            const link = document.createElement("a");
            link.download = "crop.png";
            link.href = url;
            link.click();

            if (typeof image !== "string") {
              URL.revokeObjectURL(url);
            }
          }}
          size="sm"
        >
          Export
        </Button>
      )}
    </ImageCropperContext>
  </ImageCropper>
);

export default Example;
