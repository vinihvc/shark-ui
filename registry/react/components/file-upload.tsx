"use client";

import { ark } from "@ark-ui/react/factory";
import {
  FileUpload as ArkFileUpload,
  useFileUploadContext as useArkFileUploadContext,
} from "@ark-ui/react/file-upload";
import { UploadIcon, XIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const useFileUpload = useArkFileUploadContext;

export const FileUpload = (
  props: React.ComponentProps<typeof ArkFileUpload.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkFileUpload.Root
      className={cn(
        "group/file-upload",
        "relative",
        "flex flex-col justify-center gap-4",
        className
      )}
      data-slot="file-upload"
      {...rest}
    >
      {children}

      <ArkFileUpload.HiddenInput />
    </ArkFileUpload.Root>
  );
};

export const FileUploadTrigger = (
  props: React.ComponentProps<typeof ArkFileUpload.Trigger>
) => <ArkFileUpload.Trigger data-slot="file-upload-trigger" {...props} />;

export const FileUploadDropzone = (
  props: React.ComponentProps<typeof ArkFileUpload.Dropzone>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.Dropzone
      className={cn(
        "[--space:--spacing(8)]",
        "p-(--space)",
        "flex flex-col items-center justify-center gap-2",
        "text-center",
        "rounded-2xl border-2 border-input border-dashed",
        "cursor-pointer",
        "data-cover:absolute data-cover:inset-0 data-cover:flex data-cover:items-center data-cover:justify-center",
        "data-dragging:border-primary data-dragging:bg-primary/10",
        "data-invalid:border-destructive dark:data-invalid:border-destructive-foreground",
        className
      )}
      data-slot="file-upload-dropzone"
      {...rest}
    />
  );
};

export const FileUploadDropzoneIcon = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "p-3",
        "bg-muted/48",
        "text-muted-foreground",
        "rounded-full border",
        "group-data-dragging/file-upload:border-primary/24 group-data-dragging/file-upload:bg-primary/5 group-data-dragging/file-upload:text-primary",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="file-upload-dropzone-icon"
      {...rest}
    >
      {children || <UploadIcon />}
    </ark.div>
  );
};

export const FileUploadTitle = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("font-medium text-foreground text-sm", className)}
      data-slot="file-upload-title"
      {...rest}
    />
  );
};

export const FileUploadDescription = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("font-medium text-muted-foreground text-sm", className)}
      data-slot="file-upload-title"
      {...rest}
    />
  );
};

export const FileUploadHelper = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="file-upload-dropzone-helper"
      {...rest}
    />
  );
};

export const FileUploadItemGroup = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemGroup>
) => {
  return (
    <ArkFileUpload.ItemGroup data-slot="file-upload-item-group" {...props} />
  );
};

interface FileUploadListProps
  extends Omit<React.ComponentProps<typeof ArkFileUpload.Item>, "file"> {}

export const FileUploadList = (props: FileUploadListProps) => {
  const { className, ...rest } = props;

  const fileUpload = useFileUpload();

  const files = fileUpload.acceptedFiles;

  if (files.length === 0) {
    return null;
  }

  return (
    <FileUploadItemGroup className="flex flex-col gap-2">
      {files.map((file, index) => {
        const isImage = file.type.startsWith("image/");

        const extension = file.name.split(".").pop();

        return (
          <FileUploadItem
            className={cn(
              "flex-1 items-start justify-start gap-4",
              "bg-card",
              "p-2",
              "rounded-xl border",
              "fade-in-0 slide-in-from-top-5 animate-in",
              className
            )}
            file={file}
            key={`${file.name}-${index}`}
            {...rest}
          >
            <FileUploadItemPreview
              className="size-8"
              {...(isImage ? { type: "image/*" } : { type: ".*" })}
            >
              {isImage ? (
                <FileUploadItemPreviewImage />
              ) : (
                <span className="uppercase">{extension}</span>
              )}
            </FileUploadItemPreview>

            <div className="min-w-0 flex-1 overflow-hidden">
              <FileUploadItemName />
              <FileUploadItemSize />
            </div>

            <FileUploadItemDeleteTrigger
              asChild
              className="me-auto rtl:ms-auto"
            >
              <Button
                className={cn(
                  "rounded-lg",
                  "hover:bg-destructive/10 hover:text-destructive",
                  "dark:hover:bg-destructive-foreground/10 dark:hover:text-destructive-foreground"
                )}
                size="icon-xs"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </FileUploadItemDeleteTrigger>
          </FileUploadItem>
        );
      })}
    </FileUploadItemGroup>
  );
};

export const FileUploadItem = (
  props: React.ComponentProps<typeof ArkFileUpload.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.Item
      className={cn("relative inline-flex", className)}
      data-slot="file-upload-item"
      {...rest}
    />
  );
};

export const FileUploadItemPreview = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemPreview>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemPreview
      className={cn(
        "flex shrink-0 items-center justify-center",
        "font-semibold text-[0.5rem] text-primary",
        "bg-primary/10",
        "select-none",
        "rounded-full",
        className
      )}
      data-slot="file-upload-item-preview"
      {...rest}
    />
  );
};

export const FileUploadItemPreviewImage = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemPreviewImage>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemPreviewImage
      className={cn(
        "aspect-square size-full",
        "object-cover",
        "rounded-lg",
        className
      )}
      data-slot="file-upload-item-preview-image"
      {...rest}
    />
  );
};

export const FileUploadItemName = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemName>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemName
      className={cn(
        "truncate font-medium text-xs",
        "min-w-0",
        "overflow-hidden",
        className
      )}
      data-slot="file-upload-item-name"
      {...rest}
    />
  );
};

export const FileUploadItemSize = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemSizeText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemSizeText
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="file-upload-item-size"
      {...rest}
    />
  );
};

export const FileUploadItemDeleteTrigger = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemDeleteTrigger>
) => {
  return (
    <ArkFileUpload.ItemDeleteTrigger
      data-slot="file-upload-item-delete-trigger"
      {...props}
    />
  );
};

export const FileUploadClearTrigger = (
  props: React.ComponentProps<typeof ArkFileUpload.ClearTrigger>
) => {
  return (
    <ArkFileUpload.ClearTrigger
      data-slot="file-upload-clear-trigger"
      {...props}
    />
  );
};

export const FileUploadRootProvider = (
  props: React.ComponentProps<typeof ArkFileUpload.RootProvider>
) => (
  <ArkFileUpload.RootProvider
    data-slot="file-upload-root-provider"
    {...props}
  />
);
