import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const sides = ["left", "top", "bottom", "right"] as const;

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {sides.map((side) => (
      <Menu key={side} positioning={{ placement: side }}>
        <MenuTrigger asChild>
          <Button className="capitalize" variant="outline">
            {side}
          </Button>
        </MenuTrigger>
        <MenuContent className="w-36">
          <MenuItem value="edit">Edit</MenuItem>
          <MenuItem value="copy">Copy</MenuItem>
          <MenuItem value="share">Share</MenuItem>
        </MenuContent>
      </Menu>
    ))}
  </div>
);

export default Example;
