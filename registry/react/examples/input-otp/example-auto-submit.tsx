"use client";

import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const Example = () => (
  <form onSubmit={handleSubmit}>
    <InputOTP autoSubmit>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  </form>
);

export default Example;
