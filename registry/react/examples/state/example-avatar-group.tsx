import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

const Example = () => (
  <State>
    <StateHeader>
      <StateMedia>
        <AvatarGroup className="**:data-[slot=avatar]:size-12 **:data-[slot=avatar]:grayscale">
          <Avatar>
            <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              alt="@maxleiter"
              src="https://github.com/maxleiter.png"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              alt="@evilrabbit"
              src="https://github.com/evilrabbit.png"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </StateMedia>
      <StateTitle asChild>
        <h2>No Team Members</h2>
      </StateTitle>
      <StateDescription>
        Invite your team to collaborate on this project.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <Button size="sm">
        <PlusIcon aria-hidden="true" />
        Invite Members
      </Button>
    </StateContent>
  </State>
);

export default Example;
