"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Upload images</FieldLabel>
    <FileUpload className="w-full" maxFiles={2}>
      <FileUploadDropzone>
        <FileUploadDropzoneIcon />
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
  </Field>
);

export default Example;
