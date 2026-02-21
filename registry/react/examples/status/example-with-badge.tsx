import { Badge } from "@/registry/react/components/badge";
import { Status } from "@/registry/react/components/status";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="outline">
      <Status size="sm" variant="success" />
      Online
    </Badge>
    <Badge variant="outline">
      <Status size="sm" variant="info" />
      In progress
    </Badge>
    <Badge variant="outline">
      <Status size="sm" variant="warning" />
      Pending
    </Badge>
    <Badge variant="outline">
      <Status size="sm" variant="destructive" />
      Offline
    </Badge>
  </div>
);

export default Example;
