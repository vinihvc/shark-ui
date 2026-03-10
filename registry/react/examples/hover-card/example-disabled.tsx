import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const Example = () => (
  <HoverCard disabled>
    <HoverCardTrigger asChild>
      <Button variant="link">Hover here</Button>
    </HoverCardTrigger>
    <HoverCardContent>IT WILL NOT OPEN</HoverCardContent>
  </HoverCard>
);

export default Example;
