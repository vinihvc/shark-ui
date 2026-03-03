import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80";

const ImageCropperDemo = () => (
  <ImageCropper className="aspect-video w-full max-w-lg">
    <ImageCropperImage alt="Crop me" src={IMAGE_SRC} />
    <ImageCropperSelection />
  </ImageCropper>
);

export default ImageCropperDemo;
