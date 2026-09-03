import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

const Example = () => (
  <div className="flex flex-wrap items-end gap-5">
    <FileThumbnail format="pdf" tone="warning" />
    <FileThumbnail format="pdf" tone="info" />
    <FileThumbnail format="zip" tone="success" />
  </div>
);

export default Example;
