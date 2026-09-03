import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper className="max-w-lg" maxZoom={2} minZoom={0.5}>
    <ImageCropperImage alt="Crop me" src="/images/gradients/green-dark.svg" />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
