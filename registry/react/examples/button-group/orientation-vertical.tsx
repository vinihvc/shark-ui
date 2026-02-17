import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup orientation="vertical">
    <Button clickEffect={false} size="icon-md" variant="outline">
      <PlusIcon />
    </Button>
    <Button clickEffect={false} size="icon-md" variant="outline">
      <MinusIcon />
    </Button>
  </ButtonGroup>
);

export default Example;
