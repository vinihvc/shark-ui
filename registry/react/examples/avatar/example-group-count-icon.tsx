import { User2 } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => (
  <AvatarGroup className="grayscale">
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
      <AvatarImage alt="@irsyadadl" src="https://github.com/irsyadadl.png" />
      <AvatarFallback>IA</AvatarFallback>
    </Avatar>

    <AvatarGroupCount>
      <User2 />
    </AvatarGroupCount>
  </AvatarGroup>
);

export default Example;
