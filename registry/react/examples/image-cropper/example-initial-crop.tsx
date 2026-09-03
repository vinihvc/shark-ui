import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper
    className="max-w-lg"
    initialCrop={{
      height: 150,
      width: 200,
      x: 100,
      y: 80,
    }}
  >
    <ImageCropperImage alt="Crop me" src="/images/gradients/green-dark.svg" />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
