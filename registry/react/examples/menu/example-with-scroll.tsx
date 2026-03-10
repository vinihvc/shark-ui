import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
];

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="max-h-60 min-w-40">
      {items.map((label, index) => (
        <MenuItem key={label} value={`item-${index + 1}`}>
          {label}
        </MenuItem>
      ))}
    </MenuContent>
  </Menu>
);

export default Example;
