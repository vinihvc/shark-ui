"use client";

import { FileTextIcon, PaperclipIcon } from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
import {
  Attachment,
  AttachmentContent,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const [value, setValue] = useState("Fix the email validator in helpers.ts");

  const handleSubmit = useCallback(() => {
    setValue("");
  }, []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(event.target.value),
    []
  );

  return (
    <FileUpload
      accept="image/*,.pdf,.txt"
      className="max-w-lg gap-0"
      maxFiles={4}
    >
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputHeader>
          <Attachment size="xs" state="done">
            <AttachmentMedia>
              <FileTextIcon aria-hidden="true" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>helpers.ts</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
        </PromptInputHeader>
        <PromptInputTextarea
          aria-label="Message"
          onChange={handleChange}
          placeholder="Ask about a file..."
          value={value}
        />
        <PromptInputFooter>
          <PromptInputTools>
            <FileUploadTrigger asChild>
              <PromptInputButton aria-label="Attach file" size="icon-xs">
                <PaperclipIcon aria-hidden="true" />
              </PromptInputButton>
            </FileUploadTrigger>
          </PromptInputTools>
          <PromptInputSubmit />
        </PromptInputFooter>
      </PromptInput>
    </FileUpload>
  );
};

export default Example;
