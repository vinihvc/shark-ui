import { ark } from "@ark-ui/solid/factory";
import {
  FileUpload as ArkFileUpload,
  useFileUploadContext as useArkFileUploadContext,
} from "@ark-ui/solid/file-upload";
import { UploadIcon, XIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/solid/components/button";

export const useFileUpload = useArkFileUploadContext;

export const FileUpload = (
  props: ComponentProps<typeof ArkFileUpload.Root>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkFileUpload.Root
      class={cn(
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
  props: ComponentProps<typeof ArkFileUpload.Trigger>
) => <ArkFileUpload.Trigger data-slot="file-upload-trigger" {...props} />;

export const FileUploadDropzone = (
  props: ComponentProps<typeof ArkFileUpload.Dropzone>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFileUpload.Dropzone
      class={cn(
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
  props: ComponentProps<typeof ark.div>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ark.div
      class={cn(
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

export const FileUploadTitle = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("font-medium text-foreground text-sm", className)}
      data-slot="file-upload-title"
      {...rest}
    />
  );
};

export const FileUploadDescription = (
  props: ComponentProps<typeof ark.div>
) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("font-medium text-muted-foreground text-sm", className)}
      data-slot="file-upload-title"
      {...rest}
    />
  );
};

export const FileUploadHelper = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("text-muted-foreground text-xs", className)}
      data-slot="file-upload-dropzone-helper"
      {...rest}
    />
  );
};

export const FileUploadItemGroup = (
  props: ComponentProps<typeof ArkFileUpload.ItemGroup>
) => {
  return (
    <ArkFileUpload.ItemGroup data-slot="file-upload-item-group" {...props} />
  );
};

interface FileUploadListProps
  extends Omit<ComponentProps<typeof ArkFileUpload.Item>, "file"> {}

export const FileUploadList = (props: FileUploadListProps) => {
  const { class: className, ...rest } = props;

  const fileUpload = useFileUpload();

  const files = fileUpload.acceptedFiles;

  if (files.length === 0) {
    return null;
  }

  return (
    <FileUploadItemGroup class="flex flex-col gap-2">
      {files.map((file, index) => {
        const isImage = file.type.startsWith("image/");

        const extension = file.name.split(".").pop();

        return (
          <FileUploadItem
            class={cn(
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
              class="size-8"
              {...(isImage ? { type: "image/*" } : { type: ".*" })}
            >
              {isImage ? (
                <FileUploadItemPreviewImage />
              ) : (
                <span class="uppercase">{extension}</span>
              )}
            </FileUploadItemPreview>

            <div class="min-w-0 flex-1 overflow-hidden">
              <FileUploadItemName />
              <FileUploadItemSize />
            </div>

            <FileUploadItemDeleteTrigger asChild class="me-auto rtl:ms-auto">
              <Button
                class={cn(
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
  props: ComponentProps<typeof ArkFileUpload.Item>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFileUpload.Item
      class={cn("relative inline-flex", className)}
      data-slot="file-upload-item"
      {...rest}
    />
  );
};

export const FileUploadItemPreview = (
  props: ComponentProps<typeof ArkFileUpload.ItemPreview>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFileUpload.ItemPreview
      class={cn(
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
  props: ComponentProps<typeof ArkFileUpload.ItemPreviewImage>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFileUpload.ItemPreviewImage
      class={cn(
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
  props: ComponentProps<typeof ArkFileUpload.ItemName>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFileUpload.ItemName
      class={cn(
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
  props: ComponentProps<typeof ArkFileUpload.ItemSizeText>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFileUpload.ItemSizeText
      class={cn("text-muted-foreground text-xs", className)}
      data-slot="file-upload-item-size"
      {...rest}
    />
  );
};

export const FileUploadItemDeleteTrigger = (
  props: ComponentProps<typeof ArkFileUpload.ItemDeleteTrigger>
) => {
  return (
    <ArkFileUpload.ItemDeleteTrigger
      data-slot="file-upload-item-delete-trigger"
      {...props}
    />
  );
};

export const FileUploadClearTrigger = (
  props: ComponentProps<typeof ArkFileUpload.ClearTrigger>
) => {
  return (
    <ArkFileUpload.ClearTrigger
      data-slot="file-upload-clear-trigger"
      {...props}
    />
  );
};

export const FileUploadRootProvider = (
  props: ComponentProps<typeof ArkFileUpload.RootProvider>
) => (
  <ArkFileUpload.RootProvider
    data-slot="file-upload-root-provider"
    {...props}
  />
);
