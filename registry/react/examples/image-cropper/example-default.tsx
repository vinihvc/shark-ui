import {
  ImageCropper,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
} from "@/registry/react/components/image-cropper";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80";

const ImageCropperDemo = () => (
  <ImageCropper>
    <ImageCropperViewport>
      <ImageCropperImage alt="Crop me" src={IMAGE_SRC} />
      <ImageCropperSelection>
        <ImageCropperHandle position="n" />
        <ImageCropperHandle position="e" />
        <ImageCropperHandle position="s" />
        <ImageCropperHandle position="w" />
        <ImageCropperHandle position="ne" />
        <ImageCropperHandle position="se" />
        <ImageCropperHandle position="sw" />
        <ImageCropperHandle position="nw" />
        <ImageCropperGrid axis="horizontal" />
      </ImageCropperSelection>
    </ImageCropperViewport>
  </ImageCropper>
);

export default ImageCropperDemo;
