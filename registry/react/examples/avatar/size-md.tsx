import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => (
  <Avatar size="md">
    <AvatarImage src="https://github.com/vinihvc.png" />
    <AvatarFallback>VV</AvatarFallback>
  </Avatar>
);

export default Example;
