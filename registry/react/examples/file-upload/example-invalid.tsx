import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  FileUpload,
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <Field className="mx-auto w-full max-w-xs" invalid>
    <FieldLabel>Attachments</FieldLabel>
    <FileUpload className="w-full" invalid>
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
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
    <FieldError>Upload a supported file type.</FieldError>
  </Field>
);

export default Example;
