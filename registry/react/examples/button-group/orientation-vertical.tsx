import { Minus, Plus } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup orientation="vertical">
    <Button clickEffect={false} size="icon-md" variant="outline">
      <Plus />
    </Button>
    <Button clickEffect={false} size="icon-md" variant="outline">
      <Minus />
    </Button>
  </ButtonGroup>
);

export default Example;
