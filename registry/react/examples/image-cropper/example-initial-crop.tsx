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
    <ImageCropperImage
      alt="Crop me"
      src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
