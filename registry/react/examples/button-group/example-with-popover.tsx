import { ChevronDown, GitFork, Plus } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <ButtonGroup>
    <Button variant="outline">
      <GitFork /> Fork
      <Badge size="sm" variant="secondary">
        42
      </Badge>
    </Button>
    <Popover positioning={{ placement: "bottom-end" }}>
      <PopoverTrigger asChild>
        <Button aria-label="Settings" size="icon-md" variant="outline">
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-80">
        <h4 className="px-3 py-1.5 font-medium text-sm">Existing forks</h4>
        <Separator className="my-0" />
        <p className="px-3 py-1.5 text-muted-foreground text-xs">
          You don't have any forks of this repository.
        </p>
        <Separator className="my-0" />
        <Button className="w-full justify-start rounded-t-none" variant="ghost">
          <Plus />
          Create a new fork
        </Button>
      </PopoverContent>
    </Popover>
  </ButtonGroup>
);

export default Example;
