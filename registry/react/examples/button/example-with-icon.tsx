import { Download, Heart, Plus, Settings } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button>
      <Plus />
      Add
    </Button>
    <Button variant="outline">
      <Settings />
      Settings
    </Button>
    <Button variant="secondary">
      <Heart />
      Favorite
    </Button>
    <Button variant="ghost">
      <Download />
      Download
    </Button>
  </div>
);

export default Example;
