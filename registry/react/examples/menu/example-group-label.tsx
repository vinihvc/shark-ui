import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuGroup heading="Account">
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="billing">Billing</MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuGroup>
        <MenuGroupLabel>Support</MenuGroupLabel>
        <MenuItem value="docs">Docs</MenuItem>
        <MenuItem value="contact">Contact</MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default Example;
