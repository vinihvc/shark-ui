"use client";

import { ClientOnly as ArkClientOnly } from "@ark-ui/react/client-only";

export const ClientOnly = (
  props: React.ComponentProps<typeof ArkClientOnly>
) => <ArkClientOnly data-slot="client-only" {...props} />;
