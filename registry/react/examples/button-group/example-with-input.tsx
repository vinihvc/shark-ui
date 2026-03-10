import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ButtonGroup>
    <Input className="w-64" placeholder="Search..." type="search" />
    <Button variant="outline">
      <SearchIcon />
    </Button>
  </ButtonGroup>
);

export default Example;
