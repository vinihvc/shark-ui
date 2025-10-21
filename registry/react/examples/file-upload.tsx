"use client";

import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const FileUploadDemo = () => (
  <FileUpload className="h-40 w-full items-center" maxFiles={4}>
    <FileUploadDropzone>
      <FileUploadLabel>Drop files here or click to upload</FileUploadLabel>

      <FileUploadTrigger asChild>
        <Button>Upload</Button>
      </FileUploadTrigger>
    </FileUploadDropzone>

    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem
              className="justify-between"
              file={file}
              key={file.name}
            >
              <div className="flex items-center justify-between gap-2">
                <FileUploadItemPreview type="image/*">
                  <FileUploadItemPreviewImage />
                </FileUploadItemPreview>

                <FileUploadItemPreview type="application/pdf">
                  <div data-type="pdf">PDF</div>
                </FileUploadItemPreview>

                <div className="flex flex-col gap-1">
                  <FileUploadItemName />
                  <FileUploadItemSizeText />
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

export default FileUploadDemo;
