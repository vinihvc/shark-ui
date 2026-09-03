import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentRemove,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <AttachmentGroup className="w-full max-w-lg">
    {attachments.map((attachment) => (
      <Attachment key={attachment.name} orientation={attachment.orientation}>
        {attachment.variant === "file" ? (
          <AttachmentMedia format={attachment.format} variant="file" />
        ) : (
          <AttachmentMedia variant="image">
            <img alt="" height={104} src={attachment.src} width={104} />
          </AttachmentMedia>
        )}
        {attachment.variant === "file" ? (
          <AttachmentContent>
            <AttachmentTitle>{attachment.name}</AttachmentTitle>
            <AttachmentDescription>{attachment.meta}</AttachmentDescription>
          </AttachmentContent>
        ) : null}
        <AttachmentActions>
          <AttachmentRemove aria-label={`Remove ${attachment.name}`} />
        </AttachmentActions>
      </Attachment>
    ))}
  </AttachmentGroup>
);

const attachments = [
  {
    name: "brand-mark.png",
    orientation: "vertical",
    src: "/images/gradients/green-dark.svg",
    variant: "image",
  },
  {
    format: "pdf",
    meta: "PDF · 1.4 MB",
    name: "project-brief.pdf",
    orientation: "horizontal",
    variant: "file",
  },
  {
    format: "tsx",
    meta: "TSX · 12 KB",
    name: "attachment.tsx",
    orientation: "horizontal",
    variant: "file",
  },
] as const;

export default Example;
