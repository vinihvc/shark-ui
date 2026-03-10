import {
  ArchiveIcon,
  CopyIcon,
  EllipsisIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarTrigger,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => {
  return (
    <ActionBar>
      <ActionBarTrigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBarTrigger>
      <ActionBarContent className="w-full max-w-xl">
        <ActionBarClose asChild>
          <Button size="icon-sm" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>
        <ActionBarSelectionTrigger count={3} />
        <ActionBarBody>
          <Menu positioning={{ placement: "top" }}>
            <MenuTrigger asChild>
              <Button size="sm" variant="secondary">
                <EllipsisIcon />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="archive">
                <ArchiveIcon />
                Archive
              </MenuItem>
              <MenuItem value="duplicate">
                <CopyIcon />
                Duplicate
              </MenuItem>
              <MenuItem value="delete" variant="destructive">
                <Trash2Icon />
                Delete
              </MenuItem>
            </MenuContent>
          </Menu>
        </ActionBarBody>
      </ActionBarContent>
    </ActionBar>
  );
};

export default Example;
