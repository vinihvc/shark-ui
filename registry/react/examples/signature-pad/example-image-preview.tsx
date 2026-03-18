"use client";

import Image from "next/image";
import React from "react";
import { Field, FieldDescription } from "@/registry/react/components/field";
import { SignaturePad } from "@/registry/react/components/signature-pad";

const Example = () => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  return (
    <Field className="flex w-full max-w-md flex-col gap-4">
      <SignaturePad
        onDrawEnd={(details) =>
          details.getDataUrl("image/png").then((url) => setImageUrl(url))
        }
      />
      <FieldDescription>Image preview</FieldDescription>
      <div className="relative h-40 w-full rounded-lg border bg-muted">
        {imageUrl && (
          <Image
            alt="Your signature as captured from the pad above"
            className="size-full dark:invert"
            fill
            src={imageUrl}
            unoptimized
          />
        )}
      </div>
    </Field>
  );
};

export default Example;
