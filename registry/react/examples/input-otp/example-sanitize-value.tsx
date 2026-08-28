"use client";

import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const sanitizeValue = (value: string) => value.replaceAll("-", "");

const Example = () => (
  <InputOTP sanitizeValue={sanitizeValue}>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTP>
);

export default Example;
