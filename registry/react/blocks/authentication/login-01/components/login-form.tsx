"use client";

import { KeyRoundIcon } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

export const LoginForm = () => {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => event.preventDefault(),
    []
  );

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl tracking-[-0.02em]">
          Welcome back
        </CardTitle>
        <CardDescription>Enter your work email to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel>Email address</FieldLabel>
              <Input
                autoComplete="email"
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </Field>
            <Field>
              <div className="flex items-center justify-between gap-4">
                <FieldLabel>Password</FieldLabel>
                <a
                  className="text-sm underline-offset-4 hover:underline"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                autoComplete="current-password"
                name="password"
                required
                type="password"
              />
            </Field>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
            <FieldSeparator>or continue with</FieldSeparator>
            <Button className="w-full" type="button" variant="outline">
              <KeyRoundIcon aria-hidden="true" className="size-4" />
              Single sign-on
            </Button>
            <FieldDescription className="text-center">
              New to Northstar?{" "}
              <a className="font-medium text-foreground" href="#">
                Create an account
              </a>
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
