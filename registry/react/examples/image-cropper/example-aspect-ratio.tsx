import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper aspectRatio={16 / 9} className="max-w-lg">
    <ImageCropperImage alt="Crop me" src="/images/gradients/green-dark.svg" />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
