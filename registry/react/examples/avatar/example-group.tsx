import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => {
  return (
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
        <AvatarImage alt="@irsyadadl" src="https://github.com/irsyadadl.png" />
        <AvatarFallback>IA</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
};

export default Example;
