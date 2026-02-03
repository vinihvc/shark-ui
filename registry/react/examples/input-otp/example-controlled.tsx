"use client";

import React from "react";
import { InputOtp, InputOtpSlot } from "@/registry/react/components/input-otp";

const Example = () => {
  const [value, setValue] = React.useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-muted-foreground text-sm">
        Enter the code 1234
      </p>
      <InputOtp onValueChange={({ value }) => setValue(value)} value={value}>
        <InputOtpSlot index={0} />
        <InputOtpSlot index={1} />
        <InputOtpSlot index={2} />
        <InputOtpSlot index={3} />
      </InputOtp>

      <p className="text-center text-muted-foreground text-sm">
        {isCorrect ? "✅" : "❌"}
      </p>
    </div>
  );
};

export default Example;
