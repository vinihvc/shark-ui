"use client";

import { Presence as ArkPresence } from "@ark-ui/react/presence";
import type React from "react";

export const Presence = (props: React.ComponentProps<typeof ArkPresence>) => {
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
