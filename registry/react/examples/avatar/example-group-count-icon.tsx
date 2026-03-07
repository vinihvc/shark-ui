import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
      <AvatarFallback>VV</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        alt="@segunadebayo"
        src="https://github.com/segunadebayo.png"
      />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        alt="@pasqualevitiello"
        src="https://github.com/pasqualevitiello.png"
      />
      <AvatarFallback>PV</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>IA</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>
      <PlusIcon />
    </AvatarGroupCount>
  </AvatarGroup>
);

export default Example;
