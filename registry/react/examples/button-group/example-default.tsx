import { ArrowLeftIcon, MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const ButtonGroupDemo = () => (
  <ButtonGroup>
    <ButtonGroup className="hidden sm:flex">
      <Button aria-label="Go Back" size="icon-md" variant="outline">
        <ArrowLeftIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">Snooze</Button>
      <Button aria-label="More Options" size="icon-md" variant="outline">
        <MoreHorizontalIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
);

export default ButtonGroupDemo;
