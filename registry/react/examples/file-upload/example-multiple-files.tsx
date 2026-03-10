"use client";

import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <FileUpload className="mx-auto w-full max-w-xs" maxFiles={5}>
    <FileUploadDropzone>
      <FileUploadDropzoneIcon />
      <FileUploadTitle>Drop files here</FileUploadTitle>
      <div className="flex items-center justify-center gap-2">
        <Separator />
        <FileUploadDescription>or</FileUploadDescription>
        <Separator />
      </div>
      <FileUploadTrigger asChild>
        <Button>Browse files</Button>
      </FileUploadTrigger>
      <FileUploadHelper>
        You can upload up to 5 files at a time.
      </FileUploadHelper>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
