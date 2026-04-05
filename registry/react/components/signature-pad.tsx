"use client";

import {
  SignaturePad as ArkSignaturePad,
  useSignaturePadContext,
} from "@ark-ui/react/signature-pad";
import { RotateCcw } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const useSignaturePad = useSignaturePadContext;

export const SignaturePad = (
  props: React.ComponentProps<typeof ArkSignaturePad.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSignaturePad.Root
      className={cn(
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
  props: React.ComponentProps<typeof ArkSignaturePad.Control>
) => {
  const { className, ...rest } = props;
  return (
    <ArkSignaturePad.Control
      className={cn(
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
  props: React.ComponentProps<typeof ArkSignaturePad.Segment>
) => {
  const { className, ...rest } = props;
  return (
    <ArkSignaturePad.Segment
      className={cn(
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
  props: React.ComponentProps<typeof ArkSignaturePad.ClearTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSignaturePad.ClearTrigger
      asChild
      className={cn(
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
  props: React.ComponentProps<typeof ArkSignaturePad.Guide>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSignaturePad.Guide
      className={cn(
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
