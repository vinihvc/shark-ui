import { Search } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ButtonGroup className="w-full max-w-64">
    <Input placeholder="Search..." type="search" />
    <Button type="button" variant="outline">
      <Search />
    </Button>
  </ButtonGroup>
);

export default Example;
