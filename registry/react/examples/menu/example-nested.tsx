import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuItem value="item-one">Item one</MenuItem>
      <MenuSub>
        <MenuSubTrigger>More</MenuSubTrigger>
        <MenuSubContent>
          <MenuItem value="sub-a">Sub item A</MenuItem>
          <MenuItem value="sub-b">Sub item B</MenuItem>
        </MenuSubContent>
      </MenuSub>
      <MenuItem value="item-two">Item two</MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
