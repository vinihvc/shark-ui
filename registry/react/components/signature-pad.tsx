"use client";

import { SignaturePad as ArkSignaturePad } from "@ark-ui/react/signature-pad";
import { RotateCcw } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

const signaturePadRootClass = cn(
  "flex w-80 flex-col gap-1.5 text-foreground [--height:10rem] [--width:20rem]",
  "data-disabled:opacity-50 data-disabled:grayscale"
);

const signaturePadLabelClass = cn(
  "font-medium text-foreground text-sm leading-5"
);

const signaturePadControlClass = cn(
  "relative flex min-h-[var(--height)] min-w-0 flex-col rounded-lg border border-input bg-muted",
  "data-disabled:cursor-not-allowed"
);

const signaturePadSegmentClass = cn(
  "h-full min-h-[var(--height)] w-full touch-none",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
);

const signaturePadClearTriggerClass = cn(
  "absolute top-3 right-3 inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors",
  "hover:bg-muted-foreground/10 hover:text-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "[&_svg]:size-4"
);

const signaturePadGuideClass = cn(
  "pointer-events-none absolute right-6 bottom-6 left-6 border-border border-b border-dashed"
);

interface SignaturePadRootProps
  extends React.ComponentProps<typeof ArkSignaturePad.Root> {
  className?: string;
}

const SignaturePadRoot = (props: SignaturePadRootProps) => {
  const { className, ...rest } = props;
  return (
    <ArkSignaturePad.Root
      className={cn(signaturePadRootClass, className)}
      data-slot="signature-pad"
      {...rest}
    />
  );
};

const SignaturePadLabel = (
  props: React.ComponentProps<typeof ArkSignaturePad.Label>
) => (
  <ArkSignaturePad.Label
    className={cn(signaturePadLabelClass, props.className)}
    data-slot="signature-pad-label"
    {...props}
  />
);

const SignaturePadControl = (
  props: React.ComponentProps<typeof ArkSignaturePad.Control>
) => (
  <ArkSignaturePad.Control
    className={cn(signaturePadControlClass, props.className)}
    data-slot="signature-pad-control"
    {...props}
  />
);

const SignaturePadSegment = (
  props: React.ComponentProps<typeof ArkSignaturePad.Segment>
) => (
  <ArkSignaturePad.Segment
    className={cn(signaturePadSegmentClass, props.className)}
    data-slot="signature-pad-segment"
    {...props}
  />
);

const SignaturePadClearTrigger = (
  props: React.ComponentProps<typeof ArkSignaturePad.ClearTrigger>
) => {
  const { children, ...rest } = props;
  return (
    <ArkSignaturePad.ClearTrigger
      className={cn(signaturePadClearTriggerClass, rest.className)}
      data-slot="signature-pad-clear"
      {...rest}
    >
      {children ?? <RotateCcw />}
    </ArkSignaturePad.ClearTrigger>
  );
};

const SignaturePadGuide = (
  props: React.ComponentProps<typeof ArkSignaturePad.Guide>
) => (
  <ArkSignaturePad.Guide
    className={cn(signaturePadGuideClass, props.className)}
    {...props}
  />
);

export const SignaturePad = {
  Root: SignaturePadRoot,
  Label: SignaturePadLabel,
  Control: SignaturePadControl,
  Segment: SignaturePadSegment,
  ClearTrigger: SignaturePadClearTrigger,
  Guide: SignaturePadGuide,
  Image: ArkSignaturePad.Image,
  HiddenInput: ArkSignaturePad.HiddenInput,
};
