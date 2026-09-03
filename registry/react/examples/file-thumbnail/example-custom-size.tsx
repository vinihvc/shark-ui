import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

const Example = () => (
  <div className="flex flex-wrap items-end gap-6">
    <FileThumbnail
      className="*:data-[slot=file-thumbnail-badge]:-inset-s-2.5 *:data-[slot=file-thumbnail-badge]:bottom-2.5 *:data-[slot=file-thumbnail-sheet]:h-16 *:data-[slot=file-thumbnail-sheet]:w-12 *:data-[slot=file-thumbnail-badge]:px-2 *:data-[slot=file-thumbnail-badge]:py-1 *:data-[slot=file-thumbnail-badge]:text-xs"
      format="PDF"
    />
    <FileThumbnail
      className="*:data-[slot=file-thumbnail-badge]:-inset-s-3 *:data-[slot=file-thumbnail-sheet]:h-20 *:data-[slot=file-thumbnail-sheet]:w-15 *:data-[slot=file-thumbnail-badge]:px-2.5 *:data-[slot=file-thumbnail-badge]:py-1.5 *:data-[slot=file-thumbnail-badge]:text-sm"
      format="PDF"
    />
  </div>
);

export default Example;
