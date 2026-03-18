"use client";

import { XIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadTitle,
  useFileUpload,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload accept="image/*" className="w-full max-w-xs">
    <FileUploadDropzone>
      <FileUploadDropzoneIcon />
      <FileUploadTitle>Drop files here</FileUploadTitle>
    </FileUploadDropzone>
    <CustomPreviewList />
  </FileUpload>
);

const CustomPreviewList = () => {
  const fileUpload = useFileUpload();

  const files = fileUpload.acceptedFiles;

  if (files.length === 0) {
    return null;
  }

  return (
    <FileUploadItemGroup className="grid grid-cols-4 gap-2">
      {files.map((file) => (
        <FileUploadItem file={file} key={file.name}>
          <FileUploadItemPreview
            className="size-auto w-full rounded-2xl"
            type="image/*"
          >
            <FileUploadItemPreviewImage />
          </FileUploadItemPreview>
          <FileUploadItemDeleteTrigger asChild>
            <Button className="absolute -top-2 -right-2" pill size="icon-xs">
              <XIcon />
            </Button>
          </FileUploadItemDeleteTrigger>
        </FileUploadItem>
      ))}
    </FileUploadItemGroup>
  );
};

export default Example;
