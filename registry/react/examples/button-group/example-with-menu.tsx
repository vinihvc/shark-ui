import {
  BanIcon,
  BookmarkIcon,
  CloudDownloadIcon,
  MoreHorizontalIcon,
  Share2Icon,
  StarIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <ButtonGroup>
    <Button variant="outline">
      <StarIcon />
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
            <Share2Icon /> Share
          </MenuItem>
          <MenuItem value="watch-later">
            <BookmarkIcon /> Watch later
          </MenuItem>
          <MenuItem value="download">
            <CloudDownloadIcon /> Download
          </MenuItem>
          <MenuSeparator />
          <MenuItem value="report" variant="destructive">
            <BanIcon />
            Report
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  </ButtonGroup>
);

export default Example;
