import {
  Avatar,
  AvatarFallback,
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
        <Avatar className="size-12">
          <AvatarImage
            alt="User avatar"
            className="grayscale"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
      </StateMedia>
      <StateTitle asChild>
        <h2>User Offline</h2>
      </StateTitle>
      <StateDescription>
        This user is currently offline. You can leave a message to notify them
        or try again later.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <Button size="sm">Leave Message</Button>
    </StateContent>
  </State>
);

export default Example;
