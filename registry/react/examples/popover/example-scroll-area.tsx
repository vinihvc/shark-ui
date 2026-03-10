import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const items = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
}));

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent className="h-80 w-72">
      <PopoverHeader title="Scrollable content" />
      <PopoverBody>
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li
              className="rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              key={item.id}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </PopoverBody>
      <PopoverFooter>
        <PopoverClose asChild>
          <Button>Close</Button>
        </PopoverClose>
      </PopoverFooter>
    </PopoverContent>
  </Popover>
);

export default Example;
