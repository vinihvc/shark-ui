"use client";

import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload className="w-full max-w-xs">
    <FileUploadDropzone className="[--space:--spacing(4)] md:[--space:--spacing(6)]">
      <FileUploadDropzoneIcon />
      <FileUploadTitle>Drop your files here</FileUploadTitle>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
