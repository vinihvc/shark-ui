import { QrCode as ArkQrCode } from "@ark-ui/react/qr-code";
import type React from "react";
import { cn } from "@/lib/utils";

export const QrCode = (props: React.ComponentProps<typeof ArkQrCode.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkQrCode.Root
      className={cn(
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

export const QrCodeFrame = (
  props: React.ComponentProps<typeof ArkQrCode.Frame>
) => {
  const { className, ...rest } = props;

  return (
    <ArkQrCode.Frame
      className={cn(
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
      <ArkQrCode.Pattern className="fill-inherit" data-slot="qr-code-pattern" />
    </ArkQrCode.Frame>
  );
};

export const QrCodeOverlay = (
  props: React.ComponentProps<typeof ArkQrCode.Overlay>
) => {
  const { className, ...rest } = props;

  return (
    <ArkQrCode.Overlay
      className={cn(
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
  props: React.ComponentProps<typeof ArkQrCode.DownloadTrigger>
) => (
  <ArkQrCode.DownloadTrigger data-slot="qr-code-download-trigger" {...props} />
);
