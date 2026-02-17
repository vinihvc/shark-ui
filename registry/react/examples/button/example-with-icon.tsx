import { DownloadIcon, HeartIcon, PlusIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button>
      <PlusIcon />
      Add
    </Button>
    <Button variant="outline">
      <SettingsIcon />
      Settings
    </Button>
    <Button variant="secondary">
      <HeartIcon />
      Favorite
    </Button>
    <Button variant="ghost">
      <DownloadIcon />
      Download
    </Button>
  </div>
);

export default Example;
