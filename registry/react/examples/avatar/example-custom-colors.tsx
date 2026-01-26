import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/registry/react/components/avatar";

const AvatarCustomColorsDemo = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarFallback className="bg-indigo-500">IN</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-pink-500">PK</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-sky-500">SK</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-purple-500">PR</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-amber-500">AM</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-emerald-500">EM</AvatarFallback>
    </Avatar>
  </AvatarGroup>
);

export default AvatarCustomColorsDemo;
