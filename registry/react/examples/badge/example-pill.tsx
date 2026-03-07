import { PlusIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";

const Example = () => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-wrap gap-2">
      <Badge pill size="sm">
        Badge
      </Badge>
      <Badge pill size="md">
        Badge
      </Badge>
      <Badge pill size="lg">
        Badge
      </Badge>
    </div>
    <div className="flex flex-wrap gap-2">
      <Badge pill size="sm">
        <PlusIcon />
        Badge
      </Badge>
      <Badge pill size="md">
        <PlusIcon />
        Badge
      </Badge>
      <Badge pill size="lg">
        <PlusIcon />
        Badge
      </Badge>
    </div>
  </div>
);

export default Example;
