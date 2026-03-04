"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";

const Example = () => (
  <Field className="max-w-xs">
    <FieldLabel>Textarea</FieldLabel>
    <InputGroup>
      <InputGroupTextarea placeholder="Write a comment..." />
      <InputGroupAddon align="block-end">
        <InputGroupText>0/280</InputGroupText>
        <InputGroupButton className="ml-auto" size="xs" variant="default">
          Post
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <FieldDescription>Footer positioned below the textarea.</FieldDescription>
  </Field>
);

export default Example;
