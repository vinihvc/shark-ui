import { CopyIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuItem value="profile">
        <UserIcon />
        Profile
        <MenuShortcut>⌘P</MenuShortcut>
      </MenuItem>
      <MenuItem value="settings">
        <SettingsIcon />
        Settings
        <MenuShortcut>⌘S</MenuShortcut>
      </MenuItem>
      <MenuItem value="copy">
        <CopyIcon />
        Copy
        <MenuShortcut>⌘C</MenuShortcut>
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="logout">
        <LogOutIcon />
        Log out
        <MenuShortcut>⇧⌘Q</MenuShortcut>
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
