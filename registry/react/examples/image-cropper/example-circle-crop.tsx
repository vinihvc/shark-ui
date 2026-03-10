import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper className="max-w-lg" cropShape="circle">
    <ImageCropperImage alt="Crop me" src="https://github.com/vinihvc.png" />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
