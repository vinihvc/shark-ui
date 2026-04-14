import { Presence as ArkPresence } from "@ark-ui/solid/presence";
import type { ComponentProps } from "solid-js";

export const Presence = (props: ComponentProps<typeof ArkPresence>) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkPresence
      data-slot="presence"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};
