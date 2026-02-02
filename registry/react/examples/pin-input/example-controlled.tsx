"use client";

import React from "react";
import { PinInput, PinInputSlot } from "@/registry/react/components/pin-input";

const Example = () => {
  const [value, setValue] = React.useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-muted-foreground text-sm">
        Enter the code 1234
      </p>
      <PinInput onValueChange={({ value }) => setValue(value)} value={value}>
        <PinInputSlot index={0} />
        <PinInputSlot index={1} />
        <PinInputSlot index={2} />
        <PinInputSlot index={3} />
      </PinInput>

      <p className="text-center text-muted-foreground text-sm">
        {isCorrect ? "✅" : "❌"}
      </p>
    </div>
  );
};

export default Example;
