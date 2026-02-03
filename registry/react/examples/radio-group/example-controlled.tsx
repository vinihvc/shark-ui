"use client";

import React from "react";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  const [value, setValue] = React.useState("1");

  return (
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <RadioGroup onValueChange={(e) => setValue(e.value)} value={value}>
        <RadioGroupItem value="1">Option 1</RadioGroupItem>
        <RadioGroupItem value="2">Option 2</RadioGroupItem>
        <RadioGroupItem value="3">Option 3</RadioGroupItem>
      </RadioGroup>

      <p className="text-center text-muted-foreground text-sm">
        Selected: {value}
      </p>
    </div>
  );
};

export default Example;
