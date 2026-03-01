"use client";

import { Trash2Icon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadClearTrigger,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload className="w-full max-w-xs">
    <FileUploadClearTrigger asChild className="absolute top-2 right-2">
      <Button aria-label="Clear files" size="icon-sm" variant="ghost">
        <Trash2Icon />
      </Button>
    </FileUploadClearTrigger>
    <FileUploadDropzone className="w-full">
      <FileUploadDropzoneIcon />
      <FileUploadTitle>Drop files here</FileUploadTitle>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
