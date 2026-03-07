import { MapPinIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const HoverCardDemo = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link">Hover here</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/vinihvc.png" />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <a
            className="font-medium text-sm underline underline-offset-4"
            href="https://github.com/vinihvc"
            rel="noopener"
            target="_blank"
          >
            @vinihvc
          </a>

          <p className="text-muted-foreground text-sm">Frontend Developer</p>

          <p className="flex items-center gap-1 text-muted-foreground text-xs">
            <MapPinIcon className="size-4" />
            Joined in 2016
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default HoverCardDemo;
