"use client";

import type React from "react";
import { useState } from "react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { QrCode, QrCodeFrame } from "@/registry/react/components/qr-code";

const Example = () => {
  const [value, setValue] = useState("https://www.x.com/vinihvc");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <QrCode value={value}>
        <QrCodeFrame />
      </QrCode>
      <Field className="w-full max-w-64">
        <FieldLabel>URL</FieldLabel>
        <Input onChange={handleChange} type="url" value={value} />
      </Field>
    </div>
  );
};

export default Example;
