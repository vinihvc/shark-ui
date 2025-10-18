import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { Button } from "../components/button";

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Hello, I'm creating a new project</DialogTitle>
        <DialogDescription>
          Do you like it? This is a dialog example.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="default">Yes, I agree</Button>
        </DialogClose>

        <DialogClose asChild>
          <Button variant="outline">No, Exit</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default DialogDemo;
