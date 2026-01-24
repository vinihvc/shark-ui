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
        <AvatarFallback>VV</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          alt="@pasqualevitiello"
          src="https://github.com/pasqualevitiello.png"
        />
        <AvatarFallback>VV</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage alt="@irsyadadl" src="https://github.com/irsyadadl.png" />
        <AvatarFallback>VV</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
};

export default Example;
