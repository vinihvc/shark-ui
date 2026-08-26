"use client";

import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
import { toast } from "@registry/react/components/toast";
import * as v from "valibot";
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

const formSchema = v.object({
  backupCode: v.pipe(
    v.array(v.string()),
    v.minLength(6, "Enter all 6 digits of your backup code."),
    v.maxLength(6, "Enter all 6 digits of your backup code."),
    v.check(
      (digits) => digits.every((d) => d.length === 1),
      "Enter all 6 digits of your backup code."
    )
  ),
});

const emptyCode = ["", "", "", "", "", ""] as const;

const Example = () => {
  const form = useForm({
    initialInput: { backupCode: [...emptyCode] },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "backup-code-submitted",
      title: "Backup code verified",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Account recovery</CardTitle>
          <CardDescription>
            Enter one of your single-use backup codes if you cannot access your
            authenticator app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["backupCode"]}>
              {(field) => {
                const value = (field.input as string[]) ?? [...emptyCode];
                return (
                  <Field invalid={Boolean(field.errors?.length)}>
                    <FieldLabel>Backup code</FieldLabel>
                    <InputOTP
                      onValueChange={({ value }) => field.onChange(value)}
                      value={value}
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
                    <FieldError>{field.errors?.[0]}</FieldError>
                  </Field>
                );
              }}
            </FormischField>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => reset(form)} variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

export default Example;
