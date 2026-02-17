import { PlayIcon, SkipBackIcon, SkipForwardIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup orientation="horizontal">
    <Button clickEffect={false} size="icon-md" variant="outline">
      <SkipBackIcon />
    </Button>
    <Button clickEffect={false} size="icon-md" variant="outline">
      <PlayIcon />
    </Button>
    <Button clickEffect={false} size="icon-md" variant="outline">
      <SkipForwardIcon />
    </Button>
  </ButtonGroup>
);

export default Example;
