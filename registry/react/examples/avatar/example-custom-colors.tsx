import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/registry/react/components/avatar";

const Example = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarFallback className="bg-indigo-600 text-indigo-50">
        IN
      </AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-pink-600 text-pink-50">PK</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-sky-600 text-sky-50">SK</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-purple-600 text-purple-50">
        PR
      </AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-amber-600 text-amber-50">AM</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback className="bg-emerald-600 text-emerald-50">
        EM
      </AvatarFallback>
    </Avatar>
  </AvatarGroup>
);

export default Example;
