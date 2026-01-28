import { GoogleIcon } from "@/components/icons/google";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Field, FieldLabel, FieldSet } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  return (
    <div className="w-full max-w-sm">
      <Card className="w-full [--space:--spacing(6)] md:[--space:--spacing(8)] lg:[--space:--spacing(10)]">
        <CardHeader
          description="Enter your email and check your inbox"
          title="Login to your account"
        >
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <FieldSet>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input placeholder="john.doe@example.com" />
            </Field>
          </FieldSet>
        </CardContent>

        <CardFooter className="flex-col">
          <Button className="w-full">Login</Button>

          <Button className="w-full" variant="outline">
            <GoogleIcon />
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Example;
