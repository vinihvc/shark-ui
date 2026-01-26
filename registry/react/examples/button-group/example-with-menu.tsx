import { Ban, MoreHorizontalIcon, Share2, Star } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <ButtonGroup>
    <Button variant="outline">
      <Star />
      Subscribe
    </Button>
    <Menu positioning={{ placement: "bottom-end" }}>
      <MenuTrigger asChild>
        <Button aria-label="More Options" size="icon-md" variant="outline">
          <MoreHorizontalIcon />
        </Button>
      </MenuTrigger>
      <MenuContent className="w-48">
        <MenuGroup>
          <MenuItem value="share">
            <Share2 /> Share Profile
          </MenuItem>
          <MenuItem value="share">
            <Ban />
            Report
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  </ButtonGroup>
);

export default Example;
