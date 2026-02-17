import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";

const Example = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Avatar>
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    </Avatar>
    <Avatar size="sm">
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    </Avatar>
  </div>
);

export default Example;
