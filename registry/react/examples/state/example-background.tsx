import { BellIcon, RefreshCcwIcon } from "lucide-react";
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
  <State className="h-full bg-gradient-to-b from-30% from-muted/50 to-background">
    <StateHeader>
      <StateMedia variant="icon">
        <BellIcon aria-hidden="true" />
      </StateMedia>
      <StateTitle asChild>
        <h2>No Notifications</h2>
      </StateTitle>
      <StateDescription>
        You&apos;re all caught up. New notifications will appear here.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <Button size="sm" variant="outline">
        <RefreshCcwIcon aria-hidden="true" />
        Refresh
      </Button>
    </StateContent>
  </State>
);

export default Example;
