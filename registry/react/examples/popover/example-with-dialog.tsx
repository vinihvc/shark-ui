import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader
        description="Open the popover from the button below to see it layered above the dialog."
        title="Popover inside dialog"
      />
      <DialogBody>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader
              description="You are all caught up!"
              title="Nested popover"
            />
          </PopoverContent>
        </Popover>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
