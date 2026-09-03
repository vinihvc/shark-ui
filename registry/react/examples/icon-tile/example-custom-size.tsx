import { ImageIcon, Settings2Icon } from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-4">
    <IconTile aria-hidden="true" className="size-14" variant="default">
      <ImageIcon className="size-7" />
    </IconTile>
    <IconTile
      aria-hidden="true"
      className="[--icon-size:--spacing(7)] [--size:--spacing(14)]"
      variant="default"
    >
      <Settings2Icon />
    </IconTile>
  </div>
);

export default Example;
