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
  <FileUpload className="mx-auto w-full max-w-xs" readOnly>
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
      <FileUploadHelper>This uploader is read-only.</FileUploadHelper>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
