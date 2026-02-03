import { InputOtp, InputOtpSlot } from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOtp className="*:data-[slot=input-otp-input]:size-12 *:data-[slot=input-otp-input]:text-lg">
    <InputOtpSlot index={0} />
    <InputOtpSlot index={1} />
    <InputOtpSlot index={2} />
    <InputOtpSlot index={3} />
  </InputOtp>
);

export default Example;
