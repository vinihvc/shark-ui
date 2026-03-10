"use client";

import React from "react";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/react/components/number-input";
import { Show } from "@/registry/react/components/show";

const ShowDemo = () => {
  const [value, setValue] = React.useState(0);

  const isGreaterThan2 = value > 2;

  return (
    <div className="flex max-w-48 flex-col gap-4 text-center text-sm">
      <NumberField
        min={0}
        onValueChange={({ value }) => setValue(Number(value))}
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <Show fallback={<Fallback />} when={isGreaterThan2}>
        <Content />
      </Show>
    </div>
  );
};

const Fallback = () => (
  <p className="text-muted-foreground">Not there yet. Keep clicking...</p>
);

const Content = () => <p className="text-success">Your got it!</p>;

export default ShowDemo;
