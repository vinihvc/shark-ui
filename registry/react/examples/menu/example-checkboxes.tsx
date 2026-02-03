import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuGroup heading="Appearance">
        <MenuCheckboxItem checked value="save">
          Status bar
        </MenuCheckboxItem>
        <MenuCheckboxItem checked={false} value="notifications">
          Activity bar
        </MenuCheckboxItem>
        <MenuCheckboxItem checked={false} disabled value="dark-mode">
          Panel
        </MenuCheckboxItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default Example;
