import {
  ArrowUpRight,
  DownloadIcon,
  HeartIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button>
      <PlusIcon aria-hidden="true" />
      Add
    </Button>
    <Button variant="outline">
      <SettingsIcon aria-hidden="true" />
      Settings
    </Button>
    <Button variant="secondary">
      <HeartIcon aria-hidden="true" />
      Favorite
    </Button>
    <Button variant="ghost">
      <DownloadIcon aria-hidden="true" />
      Download
    </Button>
    <Button variant="link">
      Visit website
      <ArrowUpRight aria-hidden="true" />
    </Button>
  </div>
);

export default Example;
