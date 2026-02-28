"use client";

import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload className="w-full max-w-xs" maxFiles={5}>
    <FileUploadDropzone>
      <FileUploadDropzoneIcon />
      <FileUploadTitle>Drop your files here</FileUploadTitle>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
