import { DownloadTrigger as ArkDownloadTrigger } from "@ark-ui/solid/download-trigger";
import type { ComponentProps } from "solid-js";

export const DownloadTrigger = (
  props: ComponentProps<typeof ArkDownloadTrigger>
) => {
  return <ArkDownloadTrigger data-slot="download-trigger" {...props} />;
};
