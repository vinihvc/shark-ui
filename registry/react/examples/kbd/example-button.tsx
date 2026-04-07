import { SaveIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => (
  <Button variant="outline">
    <SaveIcon />
    Save
    <KbdGroup className="translate-x-0.5">
      <Kbd variant="outline">Ctrl+S</Kbd>
    </KbdGroup>
  </Button>
);

export default Example;
