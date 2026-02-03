import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Dialog closeOnInteractOutside={false}>
      <DialogTrigger asChild>
        <Button variant="outline">No close on outside click</Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader
          description="Clicking outside does not close this dialog. Press ESC or use the button to close."
          title="Stays on outside click"
        />
      </DialogContent>
    </Dialog>
    <Dialog closeOnEscape={false}>
      <DialogTrigger asChild>
        <Button variant="outline">No close on Escape</Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader
          description="Pressing Escape does not close this dialog. Click outside or use the close button."
          title="Escape disabled"
        />
      </DialogContent>
    </Dialog>
  </div>
);

export default Example;
