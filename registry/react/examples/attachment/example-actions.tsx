import { DownloadIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentRemove,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <div className="flex justify-center">
    <Attachment orientation="horizontal">
      <AttachmentMedia format="pdf" variant="file" />
      <AttachmentContent>
        <AttachmentTitle>research-summary.pdf</AttachmentTitle>
        <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Download research-summary.pdf">
          <DownloadIcon aria-hidden="true" />
        </AttachmentAction>
        <AttachmentRemove aria-label="Remove research-summary.pdf" />
      </AttachmentActions>
    </Attachment>
  </div>
);

export default Example;
