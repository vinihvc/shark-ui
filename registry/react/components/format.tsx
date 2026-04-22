"use client";

import { Format as ArkFormat } from "@ark-ui/react/format";

export const FormatByte = (
  props: React.ComponentProps<typeof ArkFormat.Byte>
) => <ArkFormat.Byte data-slot="format-byte" {...props} />;

export const FormatNumber = (
  props: React.ComponentProps<typeof ArkFormat.Number>
) => <ArkFormat.Number data-slot="format-number" {...props} />;

export const FormatRelativeTime = (
  props: React.ComponentProps<typeof ArkFormat.RelativeTime>
) => <ArkFormat.RelativeTime data-slot="format-relative-time" {...props} />;
