import { Badge } from "@/registry/react/components/badge";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge variant="destructive">
      <Spinner />
      Deleting
    </Badge>
    <Badge variant="outline">
      Generating <Spinner />
    </Badge>
  </div>
);

export default Example;
