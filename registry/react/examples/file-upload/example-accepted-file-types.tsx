import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload accept="image/png,image/jpeg" className="w-full max-w-xs">
    <FileUploadDropzone className="w-full">
      <FileUploadDropzoneIcon />
      <FileUploadTitle>Drop your images here</FileUploadTitle>
      <FileUploadHelper>
        Only PNG and JPEG formats are allowed.
      </FileUploadHelper>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
