"use client";

import React from "react";
import { Textarea } from "@/registry/react/components/textarea";
import { Field, FieldDescription } from "../../components/field";

const Example = () => {
  const [message, setMessage] = React.useState("");

  return (
    <Field className="flex w-full max-w-xs flex-col gap-3">
      <Textarea
        onChange={({ target }) => setMessage(target.value)}
        placeholder="Type your message here"
        value={message}
      />
      <FieldDescription className="text-right">
        Character count: {message.length}
      </FieldDescription>
    </Field>
  );
};

export default Example;
