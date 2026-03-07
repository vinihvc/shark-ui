import { CopyIcon, PencilIcon, ShareIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Actions</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuItem value="edit">
        <PencilIcon />
        Edit
      </MenuItem>
      <MenuItem value="copy">
        <CopyIcon />
        Copy
      </MenuItem>
      <MenuItem value="share">
        <ShareIcon />
        Share
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
