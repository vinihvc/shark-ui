import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <div className="w-full max-w-sm">
    <Popover>
      <div className="flex items-center gap-2">
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverAnchor asChild>
          <Input className="w-full" placeholder="john@doe.com" />
        </PopoverAnchor>
        <PopoverContent className="w-56">
          <PopoverHeader
            description="We'll send you a link to reset your password."
            title="Enter your email"
          />
        </PopoverContent>
      </div>
    </Popover>
  </div>
);

export default Example;
