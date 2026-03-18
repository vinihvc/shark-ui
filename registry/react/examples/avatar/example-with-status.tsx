import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => (
  <div className="flex flex-row flex-wrap items-center gap-2">
    <Avatar>
      <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
      <AvatarFallback>VV</AvatarFallback>
      <AvatarBadge variant="success" />
    </Avatar>

    <Avatar>
      <AvatarImage
        alt="@segunadebayo"
        src="https://github.com/segunadebayo.png"
      />
      <AvatarFallback>SA</AvatarFallback>
      <AvatarBadge variant="warning" />
    </Avatar>

    <Avatar>
      <AvatarImage
        alt="@pasqualevitiello"
        src="https://github.com/pasqualevitiello.png"
      />
      <AvatarFallback>PV</AvatarFallback>
      <AvatarBadge variant="destructive" />
    </Avatar>
  </div>
);

export default Example;
