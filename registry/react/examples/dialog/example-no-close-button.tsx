import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>

    <DialogContent showCloseButton={false}>
      <DialogHeader
        description="You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop."
        title="No close button"
      />
    </DialogContent>
  </Dialog>
);

export default Example;
