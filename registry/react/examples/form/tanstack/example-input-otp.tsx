"use client";

import { toast } from "@registry/react/components/toast";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const formSchema = z.object({
  backupCode: z
    .array(z.string())
    .length(6)
    .refine((digits) => digits.every((d) => d.length === 1), {
      message: "Enter all 6 digits of your backup code.",
    }),
});

const Example = () => {
  const form = useForm({
    defaultValues: { backupCode: ["", "", "", "", "", ""] },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "backup-code-submitted",
        title: "Backup code verified",
      });
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Account recovery</CardTitle>
          <CardDescription>
            Enter one of your single-use backup codes if you cannot access your
            authenticator app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldLabel>Backup code</FieldLabel>
                  <InputOTP
                    onValueChange={({ value }) => field.handleChange(value)}
                    value={field.state.value}
                  >
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTP>
                  <FieldDescription>
                    Codes can only be used once.
                  </FieldDescription>
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="backupCode"
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => form.reset()} variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
