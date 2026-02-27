"use client";

import { ArrowRightIcon } from "lucide-react";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Subscribe</FieldLabel>
    <InputGroup>
      <InputGroupInput placeholder="Your best email" type="email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Subscribe" size="icon-xs" variant="ghost">
          <ArrowRightIcon aria-hidden />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <FieldError>Please enter a valid email address.</FieldError>
  </Field>
);

export default Example;
