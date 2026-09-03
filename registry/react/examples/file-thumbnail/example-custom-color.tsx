import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

const Example = () => (
  <div className="flex flex-wrap items-end gap-5">
    {files.map(({ className, format }) => (
      <FileThumbnail className={className} format={format} key={format} />
    ))}
  </div>
);

const files = [
  {
    className:
      "[&>[data-slot=file-thumbnail-badge]]:border-t-violet-800 [&>[data-slot=file-thumbnail-badge]]:bg-violet-700 [&>[data-slot=file-thumbnail-badge]]:text-white",
    format: "PSD",
  },
  {
    className:
      "[&>[data-slot=file-thumbnail-badge]]:border-t-cyan-800 [&>[data-slot=file-thumbnail-badge]]:bg-cyan-700 [&>[data-slot=file-thumbnail-badge]]:text-white",
    format: "FIG",
  },
  {
    className:
      "[&>[data-slot=file-thumbnail-badge]]:border-t-fuchsia-800 [&>[data-slot=file-thumbnail-badge]]:bg-fuchsia-700 [&>[data-slot=file-thumbnail-badge]]:text-white",
    format: "AI",
  },
] as const;

export default Example;
