import { PaperclipIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadList,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload maxFiles={3}>
    <div className="flex justify-center">
      <FileUploadTrigger asChild>
        <Button variant="outline">
          <PaperclipIcon />
          Browse files
        </Button>
      </FileUploadTrigger>
    </div>
    <FileUploadList />
  </FileUpload>
);

export default Example;
