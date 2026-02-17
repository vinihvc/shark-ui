"use client";

import { DownloadTrigger as ArkDownloadTrigger } from "@ark-ui/react/download-trigger";
import type React from "react";
import { cn } from "@/lib/utils";

const downloadTriggerClass = cn(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-transparent px-4 py-2 font-medium text-foreground text-sm transition-colors",
  "hover:bg-muted",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "[&_svg]:size-4"
);

const DownloadTrigger = (
  props: React.ComponentProps<typeof ArkDownloadTrigger>
) => {
  const { className, ...rest } = props;
  return (
    <ArkDownloadTrigger
      className={cn(downloadTriggerClass, className)}
      data-slot="download-trigger"
      {...rest}
    />
  );
};

export { DownloadTrigger };
