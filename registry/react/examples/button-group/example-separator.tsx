import { Minus, Plus } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup>
    <Button clickEffect={false} size="icon-md" variant="secondary">
      <Minus />
    </Button>
    <ButtonGroupSeparator />
    <Button clickEffect={false} size="icon-md" variant="secondary">
      <Plus />
    </Button>
  </ButtonGroup>
);

export default Example;
