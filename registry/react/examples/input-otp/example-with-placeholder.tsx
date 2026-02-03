import { InputOtp, InputOtpSlot } from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOtp placeholder="○">
    <InputOtpSlot index={0} />
    <InputOtpSlot index={1} />
    <InputOtpSlot index={2} />
    <InputOtpSlot index={3} />
  </InputOtp>
);

export default Example;
