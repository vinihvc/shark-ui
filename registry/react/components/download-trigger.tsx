"use client";

import { DownloadTrigger as ArkDownloadTrigger } from "@ark-ui/react/download-trigger";
import type React from "react";

export const DownloadTrigger = (
  props: React.ComponentProps<typeof ArkDownloadTrigger>
) => {
  return <ArkDownloadTrigger data-slot="download-trigger" {...props} />;
};
