"use client";

import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80";

const Example = () => {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="flex w-full max-w-lg flex-col items-end gap-2">
      <ImageCropper onZoomChange={(e) => setZoom(e.zoom)} zoom={zoom}>
        <ImageCropperImage alt="Controlled zoom" src={IMAGE_SRC} />
        <ImageCropperSelection />
      </ImageCropper>
      <div className="flex gap-1">
        <Button
          aria-label="Zoom out"
          onClick={() => setZoom(Math.max(0, zoom - 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <ZoomOutIcon aria-hidden />
        </Button>
        <Button
          aria-label="Zoom in"
          onClick={() => setZoom(Math.min(3, zoom + 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <ZoomInIcon aria-hidden />
        </Button>
      </div>
    </div>
  );
};

export default Example;
