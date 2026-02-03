import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => (
  <Avatar size="lg">
    <AvatarImage src="https://github.com/vinihvc.png" />
    <AvatarFallback>VV</AvatarFallback>
  </Avatar>
);

export default Example;
