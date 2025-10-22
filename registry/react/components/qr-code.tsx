import { QrCode as ArkQrCode } from "@ark-ui/react/qr-code";
import type React from "react";
import { cn } from "@/lib/utils";

export const QrCode = (props: React.ComponentProps<typeof ArkQrCode.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkQrCode.Root
      className={cn("bg-background text-foreground", className)}
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
      className={cn("size-full bg-white text-black", className)}
      {...rest}
    >
      <ArkQrCode.Pattern />
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
        "flex size-10 items-center justify-center rounded-full bg-background outline-2",
        className
      )}
      {...rest}
    />
  );
};

export const QrCodeDownloadTrigger = (
  props: React.ComponentProps<typeof ArkQrCode.DownloadTrigger>
) => <ArkQrCode.DownloadTrigger {...props} />;
