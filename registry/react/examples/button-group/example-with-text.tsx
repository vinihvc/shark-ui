import { Plus } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup>
    <ButtonGroupText>Create user</ButtonGroupText>
    <Button clickEffect={false} size="icon-md" variant="secondary">
      <Plus />
    </Button>
  </ButtonGroup>
);

export default Example;
