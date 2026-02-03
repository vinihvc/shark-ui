import { Play, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup orientation="horizontal">
    <Button clickEffect={false} size="icon-md" variant="outline">
      <SkipBack />
    </Button>
    <Button clickEffect={false} size="icon-md" variant="outline">
      <Play />
    </Button>
    <Button clickEffect={false} size="icon-md" variant="outline">
      <SkipForward />
    </Button>
  </ButtonGroup>
);

export default Example;
