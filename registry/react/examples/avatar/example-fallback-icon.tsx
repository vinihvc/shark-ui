import { User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";

const Example = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Avatar>
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
    <Avatar size="sm">
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  </div>
);

export default Example;
