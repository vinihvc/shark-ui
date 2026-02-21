import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";

const Example = () => (
  <Avatar size="lg">
    <AvatarFallback>
      <UserIcon />
    </AvatarFallback>
  </Avatar>
);

export default Example;
