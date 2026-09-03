import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

const Example = () => (
  <div className="flex flex-wrap items-end gap-5">
    {formats.map((format) => (
      <FileThumbnail format={format} key={format} />
    ))}
  </div>
);

const formats = [
  "apng",
  "avif",
  "bmp",
  "gif",
  "heic",
  "ico",
  "jpeg",
  "jpg",
  "png",
  "svg",
  "tif",
  "tiff",
  "webp",
] as const;

export default Example;
