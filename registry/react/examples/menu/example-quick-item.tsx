import {
  CopyIcon,
  HandIcon,
  MessageCircle,
  PencilIcon,
  RotateCwIcon,
  ShareIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuQuickItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-44">
      <MenuGroup heading="Actions">
        <MenuItem value="edit">
          <PencilIcon />
          Edit
        </MenuItem>
        <MenuItem value="add-action">
          <RotateCwIcon />
          Add Action
        </MenuItem>
        <MenuItem value="key-point">
          <HandIcon />
          Key Point
        </MenuItem>
        <MenuItem value="comment">
          <MessageCircle />
          Comment
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <div className="flex w-full gap-1">
        <MenuQuickItem className="min-w-0 flex-1" value="copy">
          <CopyIcon />
          Copy
        </MenuQuickItem>
        <MenuQuickItem className="min-w-0 flex-1" value="share">
          <ShareIcon />
          Share
        </MenuQuickItem>
      </div>
    </MenuContent>
  </Menu>
);

export default Example;
