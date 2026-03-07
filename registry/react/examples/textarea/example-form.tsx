"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => {
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (message.trim().length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }
    setError(null);
  };

  return (
    <Card asChild>
      <form className="w-full max-w-xs" onSubmit={onSubmit}>
        <CardContent>
          <Field invalid={!!error}>
            <FieldLabel>Message</FieldLabel>
            <Textarea
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
                setError(null);
              }}
              placeholder="Type your message here"
              value={message}
            />
            {error && <FieldError>{error}</FieldError>}
          </Field>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal" reverse>
            <Button type="submit">Submit</Button>
            <Button
              onClick={() => {
                setMessage("");
                setError(null);
              }}
              variant="outline"
            >
              Clear
            </Button>
          </Field>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
