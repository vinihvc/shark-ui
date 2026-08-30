"use client";

import { FocusTrap as ArkFocusTrap } from "@ark-ui/react/focus-trap";
import type React from "react";

export const FocusTrap = (props: React.ComponentProps<typeof ArkFocusTrap>) => (
  <ArkFocusTrap data-slot="focus-trap" {...props} />
);
