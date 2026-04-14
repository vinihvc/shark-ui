import { Format as ArkFormat } from "@ark-ui/solid/format";
import type { ComponentProps } from "solid-js";

export const FormatByte = (props: ComponentProps<typeof ArkFormat.Byte>) => {
  return <ArkFormat.Byte data-slot="format-byte" {...props} />;
};

export const FormatNumber = (
  props: ComponentProps<typeof ArkFormat.Number>
) => {
  return <ArkFormat.Number data-slot="format-number" {...props} />;
};

export const FormatRelativeTime = (
  props: ComponentProps<typeof ArkFormat.RelativeTime>
) => {
  return <ArkFormat.RelativeTime data-slot="format-relative-time" {...props} />;
};
