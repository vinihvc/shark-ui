import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80";

const Example = () => (
  <ImageCropper className="max-w-lg" fixedCropArea>
    <ImageCropperImage alt="Fixed crop area" src={IMAGE_SRC} />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
