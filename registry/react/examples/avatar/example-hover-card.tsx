import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const Example = () => (
  <AvatarGroup>
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button pill size="icon-lg" variant="ghost">
          <Avatar size="lg">
            <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-max">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-sm">Vinicius Vicentini</h4>
            <p className="text-muted-foreground text-sm">@vinihvc</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button pill size="icon-lg" variant="ghost">
          <Avatar size="lg">
            <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="w-max">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-sm">Shadcn</h4>
            <p className="text-muted-foreground text-sm">@shadcn</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </AvatarGroup>
);

export default Example;
