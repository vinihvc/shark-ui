"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => {
  const [terms, setTerms] = React.useState(false);
  const [errors, setErrors] = React.useState<{ terms?: string }>({});

  const onSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!terms) {
      setErrors({ terms: "You must accept the terms" });
    }
  };

  return (
    <Card asChild>
      <form className="w-full max-w-xs" onSubmit={onSubmit}>
        <CardHeader title="Terms and conditions">
          <CardDescription className="text-pretty">
            Please read the terms and conditions carefully.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field invalid={!!errors.terms} orientation="horizontal">
              <Switch
                checked={terms}
                name="terms"
                onCheckedChange={({ checked }) => setTerms(checked)}
              />
              <FieldContent>
                <FieldLabel>I agree to the terms</FieldLabel>
                {errors.terms && <FieldError>{errors.terms}</FieldError>}
              </FieldContent>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal" reverse>
            <Button type="submit">Submit</Button>
            <Button
              onClick={() => {
                setTerms(false);
                setErrors({});
              }}
              type="reset"
              variant="outline"
            >
              Reset
            </Button>
          </Field>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
