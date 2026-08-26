import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOTP sanitizeValue={(value) => value.replaceAll("-", "")}>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTP>
);

export default Example;
