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

const Example = () => (
  <Dialog modal={false}>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader
        description="This is a non-modal dialog. You can interact with elements outside the dialog."
        title="Non-Modal Dialog"
      />
      <DialogBody>
        <p className="text-muted-foreground text-sm">
          Non-modal dialogs allow interaction with elements outside the dialog.
          Focus trapping and scroll prevention are disabled.
        </p>
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
