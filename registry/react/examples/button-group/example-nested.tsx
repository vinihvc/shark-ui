import { Bold, Braces, ImagePlus, Italic, Underline } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup>
    <ButtonGroup>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <Italic />
      </Button>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <Bold />
      </Button>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <Underline />
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <ImagePlus />
      </Button>
      <Button clickEffect={false} size="icon-md" variant="outline">
        <Braces />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
);

export default Example;
