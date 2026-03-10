import { BellIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Float } from "@/registry/react/components/float";

const FloatDemo = () => (
  <div className="relative">
    <Button size="icon-lg" variant="outline">
      <BellIcon />
    </Button>
    <Float>
      <Badge pill size="sm" variant="default">
        9+
      </Badge>
    </Float>
  </div>
);

export default FloatDemo;
