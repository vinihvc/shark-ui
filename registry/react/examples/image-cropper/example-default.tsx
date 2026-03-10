import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const ImageCropperDemo = () => (
  <ImageCropper className="aspect-video w-full max-w-lg">
    <ImageCropperImage alt="Crop me" src="https://github.com/vinihvc.png" />
    <ImageCropperSelection />
  </ImageCropper>
);

export default ImageCropperDemo;
