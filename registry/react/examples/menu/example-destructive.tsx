import { Copy, Pencil, Trash2 } from "lucide-react";
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
      <Button variant="outline">Actions</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuItem value="edit">
        <Pencil />
        Edit
      </MenuItem>
      <MenuItem value="duplicate">
        <Copy />
        Duplicate
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="delete" variant="destructive">
        <Trash2 />
        Delete
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
