import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

const Example = () => (
  <div className="flex flex-wrap items-end gap-5">
    <FileThumbnail format=" pdf " />
    <FileThumbnail format=".JPG" />
    <FileThumbnail format="xlsx" />
    <FileThumbnail format="pptx" />
    <FileThumbnail format="zip" />
    <FileThumbnail />
  </div>
);

export default Example;
