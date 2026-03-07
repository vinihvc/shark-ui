"use client";

import React from "react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const Example = () => {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col gap-2">
      <NativeSelect
        className="w-full max-w-40"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        <NativeSelectOption value="">Select an option</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
      </NativeSelect>
      <p className="text-muted-foreground text-sm">
        Selected: {value || "—"}
      </p>
    </div>
  );
};

export default Example;
