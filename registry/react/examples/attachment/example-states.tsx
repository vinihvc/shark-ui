import { CheckIcon, ClockIcon, FileTextIcon, XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Attachment state="idle">
      <AttachmentMedia>
        <ClockIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>selected-file.pdf</AttachmentTitle>
        <AttachmentDescription>Ready to upload</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment state="uploading">
      <AttachmentMedia>
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-system.zip</AttachmentTitle>
        <AttachmentDescription>Uploading · 64%</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment state="processing">
      <AttachmentMedia>
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>market-research.pdf</AttachmentTitle>
        <AttachmentDescription>Processing document</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment state="error">
      <AttachmentMedia>
        <FileTextIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
        <AttachmentDescription>Upload failed. Try again.</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove financial-model.xlsx">
          <XIcon aria-hidden="true" />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
    <Attachment state="done">
      <AttachmentMedia>
        <CheckIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>uploaded-report.pdf</AttachmentTitle>
        <AttachmentDescription>Uploaded · 1.8 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  </div>
);

export default Example;
