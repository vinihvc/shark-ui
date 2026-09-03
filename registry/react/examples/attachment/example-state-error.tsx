import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentRemove,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment className="max-w-sm" state="error">
    <AttachmentMedia format="xlsx" variant="file" />
    <AttachmentContent>
      <AttachmentTitle>forecast.xlsx</AttachmentTitle>
      <AttachmentDescription>Couldn’t upload. Try again.</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentRemove aria-label="Remove forecast.xlsx" />
    </AttachmentActions>
  </Attachment>
);

export default Example;
