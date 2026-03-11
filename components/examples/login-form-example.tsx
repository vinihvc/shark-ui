import { UserIcon } from "lucide-react";
import { AppleIcon } from "@/components/icons/apple";
import { GoogleIcon } from "@/components/icons/google";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Separator } from "@/registry/react/components/separator";

export const LoginFormExample = (props: React.ComponentProps<"div">) => {
  return (
    <Card {...props}>
      <CardHeader className="flex flex-col items-center gap-2 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-6" />
        </div>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Start your free 7-day trial. No credit card required.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full" tabIndex={-1}>
          Get Started
        </Button>
        <div className="relative flex items-center">
          <Separator className="flex-1" />
          <span className="bg-card px-3 text-muted-foreground text-xs">OR</span>
          <Separator className="flex-1" />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <Button className="w-full" tabIndex={-1} variant="outline">
          <GoogleIcon />
          Continue with Google
        </Button>
        <Button className="w-full" tabIndex={-1} variant="outline">
          <AppleIcon />
          Continue with Apple
        </Button>
      </CardFooter>
    </Card>
  );
};
