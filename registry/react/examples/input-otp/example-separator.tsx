import {
  InputOtp,
  InputOtpSeparator,
  InputOtpSlot,
} from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOtp>
    <InputOtpSlot index={0} />
    <InputOtpSlot index={1} />
    <InputOtpSeparator />
    <InputOtpSlot index={2} />
    <InputOtpSlot index={3} />
    <InputOtpSeparator />
    <InputOtpSlot index={4} />
    <InputOtpSlot index={5} />
  </InputOtp>
);

export default Example;
