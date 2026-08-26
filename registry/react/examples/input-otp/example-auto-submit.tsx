import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const Example = () => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <InputOTP autoSubmit>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  </form>
);

export default Example;
