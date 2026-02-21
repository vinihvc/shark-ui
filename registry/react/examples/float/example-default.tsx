import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Float } from "@/registry/react/components/float";

const FloatDemo = () => (
  <div className="relative">
    <Avatar className="size-16">
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <Float placement="bottom-end">
      <Badge className="rounded-full px-1.5" size="sm" variant="default">
        New
      </Badge>
    </Float>
  </div>
);

export default FloatDemo;
