import {
  InputOtp,
  InputOtpSeparator,
  InputOtpSlot,
} from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOtp>
    <InputOtpSlot index={0} />
    <InputOtpSlot index={1} />
    <InputOtpSlot index={2} />
    <InputOtpSeparator />
    <InputOtpSlot index={3} />
    <InputOtpSlot index={4} />
    <InputOtpSlot index={5} />
  </InputOtp>
);

export default Example;
