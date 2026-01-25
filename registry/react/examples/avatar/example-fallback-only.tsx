import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/registry/react/components/avatar";

const Example = () => (
  <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
    <Avatar>
      <AvatarFallback>VV</AvatarFallback>
    </Avatar>

    <AvatarGroup>
      <Avatar>
        <AvatarFallback className="bg-indigo-500">SA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-pink-500">PV</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-sky-500">SA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-purple-500">CN</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  </div>
);

export default Example;
