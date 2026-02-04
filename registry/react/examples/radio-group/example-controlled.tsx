"use client";

import React from "react";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  const [value, setValue] = React.useState<string | null>(null);

  const isCorrectOption = value === "comfortable";

  return (
    <div className="flex flex-col items-center gap-4 text-center text-sm">
      <p>Select the option comfortable</p>
      <RadioGroup onValueChange={({ value }) => setValue(value)} value={value}>
        <RadioGroupItem value="default">Default</RadioGroupItem>
        <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
        <RadioGroupItem value="compact">Compact</RadioGroupItem>
      </RadioGroup>
      <p className="text-center">{isCorrectOption ? "✅" : "❌"}</p>
    </div>
  );
};

export default Example;
