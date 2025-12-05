import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader
        description="Do you like it? This is a dialog example."
        title="Hello, I'm creating a new project"
      />
      <DialogFooter>
        <DialogClose asChild>
          <Button>Yes, I agree</Button>
        </DialogClose>

        <DialogClose asChild>
          <Button variant="outline">No, Exit</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default DialogDemo;
