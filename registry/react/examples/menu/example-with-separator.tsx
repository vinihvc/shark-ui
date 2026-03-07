import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
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
      <MenuItem value="new">New file</MenuItem>
      <MenuItem value="open">Open file</MenuItem>
      <MenuItem value="save">Save</MenuItem>
      <MenuSeparator />
      <MenuItem value="copy">Copy</MenuItem>
      <MenuItem value="paste">Paste</MenuItem>
      <MenuSeparator />
      <MenuItem value="preferences">Preferences</MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
