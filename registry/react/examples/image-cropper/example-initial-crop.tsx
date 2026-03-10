import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper
    className="max-w-lg"
    initialCrop={{
      x: 100,
      y: 80,
      width: 200,
      height: 150,
    }}
  >
    <ImageCropperImage alt="Crop me" src="https://github.com/vinihvc.png" />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
