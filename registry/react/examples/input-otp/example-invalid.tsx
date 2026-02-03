"use client";

import React from "react";
import { InputOtp, InputOtpSlot } from "@/registry/react/components/input-otp";

const Example = () => {
  const [value, setValue] = React.useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <InputOtp
      invalid={!isCorrect}
      onValueChange={({ value }) => setValue(value)}
      value={value}
    >
      <InputOtpSlot index={0} />
      <InputOtpSlot index={1} />
      <InputOtpSlot index={2} />
      <InputOtpSlot index={3} />
    </InputOtp>
  );
};

export default Example;
