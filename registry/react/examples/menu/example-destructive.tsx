import { CopyIcon, PencilIcon, Trash2Icon } from "lucide-react";
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
      <MenuItem value="edit">
        <PencilIcon />
        Edit
      </MenuItem>
      <MenuItem value="duplicate">
        <CopyIcon />
        Duplicate
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="delete" variant="destructive">
        <Trash2Icon />
        Delete
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
