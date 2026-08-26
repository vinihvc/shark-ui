import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/react/components/input-otp";

export const InputOTPExample = () => (
  <Card>
    <CardHeader
      description="We've sent a code to a****@gmail.com"
      title="Verify account"
    />
    <CardContent className="flex flex-col items-center gap-4">
      <InputOTP defaultValue={["5", "5", "1", "6"]}>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSeparator />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTP>
      <p className="text-muted-foreground text-sm">
        Didn&apos;t receive a code?{" "}
        <Button
          className="h-auto p-0 text-foreground underline hover:text-primary"
          type="button"
          variant="link"
        >
          Resend
        </Button>
      </p>
    </CardContent>
  </Card>
);
