import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => (
  <div className="flex flex-wrap gap-4">
    <Avatar className="rounded-none">
      <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
      <AvatarFallback>VV</AvatarFallback>
    </Avatar>

    <Avatar className="rounded-md">
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

    <Avatar className="rounded-lg">
      <AvatarImage
        alt="@segunadebayo"
        src="https://github.com/segunadebayo.png"
      />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>

    <Avatar className="rounded-xl">
      <AvatarImage
        alt="@pasqualevitiello"
        src="https://github.com/pasqualevitiello.png"
      />
      <AvatarFallback>PV</AvatarFallback>
    </Avatar>
  </div>
);

export default Example;
