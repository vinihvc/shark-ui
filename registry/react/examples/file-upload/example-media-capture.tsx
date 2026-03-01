"use client";

import { CameraIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadList,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload capture="environment" className="w-full max-w-xs">
    <div className="flex justify-center">
      <FileUploadTrigger asChild>
        <Button variant="outline">
          <CameraIcon />
          Take a picture
        </Button>
      </FileUploadTrigger>
    </div>
    <FileUploadList />
  </FileUpload>
);

export default Example;
