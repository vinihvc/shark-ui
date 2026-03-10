import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper
    className="max-w-lg"
    maxHeight={160}
    maxWidth={280}
    minHeight={80}
    minWidth={80}
  >
    <ImageCropperImage alt="Crop me" src="https://github.com/vinihvc.png" />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
