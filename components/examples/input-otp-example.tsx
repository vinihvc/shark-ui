import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  InputOtp,
  InputOtpSeparator,
  InputOtpSlot,
} from "@/registry/react/components/input-otp";

export const InputOtpExample = () => {
  return (
    <Card>
      <CardHeader
        description="We've sent a code to a****@gmail.com"
        title="Verify account"
      />
      <CardContent className="flex flex-col gap-4">
        <InputOtp defaultValue={["5", "5", "1", "6"]}>
          <InputOtpSlot index={0} tabIndex={-1} />
          <InputOtpSlot index={1} tabIndex={-1} />
          <InputOtpSlot index={2} tabIndex={-1} />
          <InputOtpSeparator />
          <InputOtpSlot index={3} tabIndex={-1} />
          <InputOtpSlot index={4} tabIndex={-1} />
          <InputOtpSlot index={5} tabIndex={-1} />
        </InputOtp>
        <p className="text-muted-foreground text-sm">
          Didn&apos;t receive a code?{" "}
          <Button
            className="h-auto p-0 text-foreground underline hover:text-primary"
            tabIndex={-1}
            type="button"
            variant="link"
          >
            Resend
          </Button>
        </p>
      </CardContent>
    </Card>
  );
};
