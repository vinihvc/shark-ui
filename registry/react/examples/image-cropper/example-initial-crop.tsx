import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80";

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
    <ImageCropperImage alt="Initial crop" src={IMAGE_SRC} />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
