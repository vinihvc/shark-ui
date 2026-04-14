import { ClientOnly as ArkClientOnly } from "@ark-ui/solid/client-only";
import type { ComponentProps } from "solid-js";

export const ClientOnly = (props: ComponentProps<typeof ArkClientOnly>) => {
  return <ArkClientOnly data-slot="client-only" {...props} />;
};
