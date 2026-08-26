import { FileSearchIcon, XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/registry/react/components/attachment";
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
  <Dialog>
    <Attachment>
      <AttachmentMedia>
        <FileSearchIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>research-summary.pdf</AttachmentTitle>
        <AttachmentDescription>Open preview dialog</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove research-summary.pdf">
          <XIcon aria-hidden="true" />
        </AttachmentAction>
      </AttachmentActions>
      <DialogTrigger asChild>
        <AttachmentTrigger aria-label="Preview research-summary.pdf" />
      </DialogTrigger>
    </Attachment>
    <DialogContent>
      <DialogHeader title="research-summary.pdf" />
      <DialogBody className="text-muted-foreground text-sm">
        Preview of the uploaded PDF. Actions on the card stay clickable while
        this trigger covers the rest of the surface.
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
