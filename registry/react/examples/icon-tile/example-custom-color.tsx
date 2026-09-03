import { FolderIcon, LightbulbIcon, RocketIcon } from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-4">
    <IconTile
      aria-hidden="true"
      className="border-indigo-200 bg-indigo-100 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300"
    >
      <FolderIcon />
    </IconTile>
    <IconTile
      aria-hidden="true"
      className="border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300"
    >
      <LightbulbIcon />
    </IconTile>
    <IconTile
      aria-hidden="true"
      className="border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
    >
      <RocketIcon />
    </IconTile>
  </div>
);

export default Example;
