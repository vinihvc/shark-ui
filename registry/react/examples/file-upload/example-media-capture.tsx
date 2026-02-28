"use client";

import { Camera, FileIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadContext,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSize,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload capture="environment" className="w-full max-w-xs">
    <FileUploadTitle>Capture Photo</FileUploadTitle>
    <FileUploadTrigger asChild>
      <Button size="sm" variant="outline">
        <Camera className="size-4" />
        Open Camera
      </Button>
    </FileUploadTrigger>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem
              className="justify-between"
              file={file}
              key={file.name}
            >
              <div className="flex items-center gap-2">
                <FileUploadItemPreview type="image/*">
                  <FileUploadItemPreviewImage />
                </FileUploadItemPreview>
                <FileUploadItemPreview type=".*">
                  <FileIcon className="size-5 text-muted-foreground" />
                </FileUploadItemPreview>
                <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                  <FileUploadItemName asChild>
                    <span className="line-clamp-1 min-w-0 truncate text-sm">
                      {(file as File & { webkitRelativePath?: string })
                        .webkitRelativePath ?? file.name}
                    </span>
                  </FileUploadItemName>
                  <FileUploadItemSize />
                </div>
              </div>
              <FileUploadItemDeleteTrigger />
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
  </FileUpload>
);

export default Example;
