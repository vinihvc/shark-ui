"use client";

import React from "react";
import { NumberField } from "@/registry/react/components/number-input";

const Example = () => {
  const [value, setValue] = React.useState("1");

  const isNumberFive = value === "3";

  return (
    <div className="flex w-full max-w-40 flex-col gap-2 text-center text-sm">
      <p>Select the number 3</p>
      <NumberField
        onValueChange={({ value }) => setValue(value)}
        value={value}
      />
      <p className="text-center">{isNumberFive ? "✅" : "❌"}</p>
    </div>
  );
};

export default Example;
