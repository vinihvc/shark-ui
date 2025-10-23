"use client";

import {
  FileUpload as ArkFileUpload,
  type FileUploadFileError,
} from "@ark-ui/react/file-upload";
import { Trash2 } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const ERROR_MESSAGES: Record<FileUploadFileError, string> = {
  TOO_MANY_FILES: "Too many files selected (max 3 allowed)",
  FILE_INVALID_TYPE: "Invalid file type (only images and PDFs allowed)",
  FILE_TOO_LARGE: "File too large (max 1MB)",
  FILE_TOO_SMALL: "File too small (min 1KB)",
  FILE_INVALID: "Invalid file",
  FILE_EXISTS: "File already exists",
};

export const FileUpload = (
  props: React.ComponentProps<typeof ArkFileUpload.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkFileUpload.Root
      className={cn("relative flex flex-col items-start gap-4", className)}
      {...rest}
    >
      {children}

      <ArkFileUpload.HiddenInput />
    </ArkFileUpload.Root>
  );
};

export const FileUploadTrigger = (
  props: React.ComponentProps<typeof ArkFileUpload.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.Trigger
      className={cn("cursor-pointer", className)}
      {...rest}
    />
  );
};

export const FileUploadDropzone = (
  props: React.ComponentProps<typeof ArkFileUpload.Dropzone>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.Dropzone
      className={cn(
        "p-6",
        "flex flex-col items-center justify-center gap-4",
        "rounded-md border-2 border-dashed",
        "cursor-pointer",
        "data-cover:absolute data-cover:inset-0 data-cover:flex data-cover:items-center data-cover:justify-center",
        "data-dragging:border-primary data-dragging:bg-primary/10",
        "data-invalid:border-destructive data-invalid:bg-destructive/10",
        className
      )}
      {...rest}
    />
  );
};

export const FileUploadLabel = (
  props: React.ComponentProps<typeof ArkFileUpload.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.Label
      className={cn("font-medium text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
};

export const FileUploadItemGroup = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemGroup>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemGroup
      className={cn("flex flex-col gap-2", className)}
      {...rest}
    />
  );
};

export const FileUploadContext = (
  props: React.ComponentProps<typeof ArkFileUpload.Context>
) => <ArkFileUpload.Context {...props} />;

export const FileUploadItem = (
  props: React.ComponentProps<typeof ArkFileUpload.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.Item
      className={cn(
        "relative",
        "flex flex-1 items-center gap-2",
        "p-2",
        "rounded-md border",
        "fade-in-0 slide-in-from-top-5 animate-in",
        className
      )}
      {...rest}
    />
  );
};

export const FileUploadItemPreview = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemPreview>
) => {
  const { className, ...rest } = props;

  return <ArkFileUpload.ItemPreview className={cn(className)} {...rest} />;
};

export const FileUploadItemPreviewImage = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemPreviewImage>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemPreviewImage
      className={cn("aspect-square h-10 rounded-md object-cover", className)}
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
      className={cn("line-clamp-1 min-w-0 truncate text-sm", className)}
      {...rest}
    />
  );
};

export const FileUploadItemSizeText = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemSizeText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemSizeText
      className={cn("text-muted-foreground text-xs", className)}
      {...rest}
    />
  );
};

export const FileUploadItemDeleteTrigger = (
  props: React.ComponentProps<typeof ArkFileUpload.ItemDeleteTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFileUpload.ItemDeleteTrigger
      className={cn(className)}
      {...rest}
      asChild
    >
      <Button size="icon-sm" variant="ghost">
        <Trash2 />
      </Button>
    </ArkFileUpload.ItemDeleteTrigger>
  );
};
