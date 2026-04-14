import { QrCode as ArkQrCode, useQrCodeContext } from "@ark-ui/solid/qr-code";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useQrCode = useQrCodeContext;

export const QrCode = (props: ComponentProps<typeof ArkQrCode.Root>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkQrCode.Root
      class={cn(
        "[--qr-code-overlay-size:calc(var(--qr-code-size)/4)] [--qr-code-size:--spacing(32)]",
        "relative",
        "w-fit",
        "flex shrink-0 flex-col gap-4",
        className
      )}
      data-slot="qr-code"
      {...rest}
    />
  );
};

export const QrCodeFrame = (props: ComponentProps<typeof ArkQrCode.Frame>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkQrCode.Frame
      class={cn(
        "size-(--qr-code-size)",
        "bg-white",
        "fill-black",
        "rounded-md",
        "overflow-hidden",
        className
      )}
      data-slot="qr-code-frame"
      {...rest}
    >
      <ArkQrCode.Pattern class="fill-inherit" data-slot="qr-code-pattern" />
    </ArkQrCode.Frame>
  );
};

export const QrCodeOverlay = (
  props: ComponentProps<typeof ArkQrCode.Overlay>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkQrCode.Overlay
      class={cn(
        "absolute inset-0",
        "size-(--qr-code-overlay-size)",
        "flex items-center justify-center",
        "bg-black",
        "text-white",
        "rounded-full",
        "p-2",
        "[&_svg,img]:size-full [&_svg,img]:object-contain",
        className
      )}
      data-slot="qr-code-overlay"
      {...rest}
    />
  );
};

export const QrCodeDownload = (
  props: ComponentProps<typeof ArkQrCode.DownloadTrigger>
) => (
  <ArkQrCode.DownloadTrigger data-slot="qr-code-download-trigger" {...props} />
);
