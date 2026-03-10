"use client";

import { CopyIcon, FileCodeIcon } from "lucide-react";
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
      <InputGroupTextarea
        className="font-mono text-sm"
        placeholder="console.log('Hello, world!');"
      />
      <InputGroupAddon align="block-start">
        <FileCodeIcon className="text-muted-foreground" />
        <InputGroupText className="font-mono">script.js</InputGroupText>
        <InputGroupButton className="ml-auto" size="icon-xs">
          <CopyIcon />
          <span className="sr-only">Copy</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <FieldDescription>Header positioned above the textarea.</FieldDescription>
  </Field>
);

export default Example;
