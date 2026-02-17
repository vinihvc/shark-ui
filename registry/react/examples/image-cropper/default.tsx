import { ImageCropper } from "@/registry/react/components/image-cropper";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80";

const ImageCropperDemo = () => (
  <ImageCropper.Root>
    <ImageCropper.Viewport>
      <ImageCropper.Image alt="Crop me" src={IMAGE_SRC} />
      <ImageCropper.Selection>
        <ImageCropper.Handle position="n" />
        <ImageCropper.Handle position="e" />
        <ImageCropper.Handle position="s" />
        <ImageCropper.Handle position="w" />
        <ImageCropper.Handle position="ne" />
        <ImageCropper.Handle position="se" />
        <ImageCropper.Handle position="sw" />
        <ImageCropper.Handle position="nw" />
        <ImageCropper.Grid />
      </ImageCropper.Selection>
    </ImageCropper.Viewport>
  </ImageCropper.Root>
);

export default ImageCropperDemo;
