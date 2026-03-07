import {
  BoldIcon,
  BracesIcon,
  ImagePlusIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup>
    <ButtonGroup>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <ItalicIcon />
      </Button>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <BoldIcon />
      </Button>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <UnderlineIcon />
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <ImagePlusIcon />
      </Button>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <BracesIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
);

export default Example;
