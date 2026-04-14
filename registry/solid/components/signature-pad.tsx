import {
  SignaturePad as ArkSignaturePad,
  useSignaturePadContext,
} from "@ark-ui/solid/signature-pad";
import { RotateCcw } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/solid/components/button";

export const useSignaturePad = useSignaturePadContext;

export const SignaturePad = (
  props: ComponentProps<typeof ArkSignaturePad.Root>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSignaturePad.Root
      class={cn(
        "h-40 min-h-40 w-full",
        "flex flex-col gap-1.5",
        "data-disabled:opacity-64 data-disabled:grayscale",
        className
      )}
      data-slot="signature-pad"
      {...rest}
    >
      <SignaturePadControl>
        <SignaturePadSegment />
        <SignaturePadClear />
        <SignaturePadGuide />
      </SignaturePadControl>
    </ArkSignaturePad.Root>
  );
};

const SignaturePadControl = (
  props: ComponentProps<typeof ArkSignaturePad.Control>
) => {
  const { class: className, ...rest } = props;
  return (
    <ArkSignaturePad.Control
      class={cn(
        "relative",
        "size-full min-h-0 min-w-0",
        "flex flex-col",
        "bg-muted/64",
        "rounded-xl border shadow-xs/5",
        "data-disabled:cursor-not-allowed",
        className
      )}
      data-slot="signature-pad-control"
      {...rest}
    />
  );
};

const SignaturePadSegment = (
  props: ComponentProps<typeof ArkSignaturePad.Segment>
) => {
  const { class: className, ...rest } = props;
  return (
    <ArkSignaturePad.Segment
      class={cn(
        "size-full",
        "min-h-0",
        "fill-foreground",
        "touch-none",
        className
      )}
      data-slot="signature-pad-segment"
      {...rest}
    />
  );
};

const SignaturePadClear = (
  props: ComponentProps<typeof ArkSignaturePad.ClearTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSignaturePad.ClearTrigger
      asChild
      class={cn(
        "absolute inset-e-2 top-2",
        "bg-muted",
        "text-muted-foreground",
        className
      )}
      data-slot="signature-pad-clear"
      {...rest}
    >
      <Button size="icon-md" variant="ghost">
        <RotateCcw />
      </Button>
    </ArkSignaturePad.ClearTrigger>
  );
};

const SignaturePadGuide = (
  props: ComponentProps<typeof ArkSignaturePad.Guide>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSignaturePad.Guide
      class={cn(
        "absolute inset-x-6 bottom-6",
        "border-input border-b-2 border-dashed",
        "pointer-events-none",
        className
      )}
      data-slot="signature-pad-guide"
      {...rest}
    />
  );
};
