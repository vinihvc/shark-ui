import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { Button } from "../../components/button";

const Example = () => (
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
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>IA</AvatarFallback>
    </Avatar>
    <Popover positioning={{ placement: "bottom-end" }}>
      <AvatarGroupCount>
        <PopoverTrigger asChild>
          <Button className="rounded-full" size="icon-md" variant="ghost">
            <AvatarGroupCount>+5</AvatarGroupCount>
          </Button>
        </PopoverTrigger>
      </AvatarGroupCount>

      <PopoverContent>
        <PopoverBody>
          <AvatarGroup>
            <Avatar>
              <AvatarFallback className="bg-indigo-500">SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-pink-500">VC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-sky-500">NJ</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-purple-500">RT</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-amber-500">TS</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  </AvatarGroup>
);

export default Example;
