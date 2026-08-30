"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Min 3 chars, alphanumeric + hyphen</FieldLabel>
    <TagsInput
      className="w-full"
      validate={({ value, inputValue }) => {
        const next = inputValue.trim();
        return (
          Boolean(next) &&
          !value.includes(next) &&
          next.length >= 3 &&
          validTagPattern.test(next)
        );
      }}
    >
      <TagsInputContext>
        {({ value }) =>
          value.map((tag, index) => (
            <TagsInputItem index={index} key={tag} value={tag}>
              {tag}
            </TagsInputItem>
          ))
        }
      </TagsInputContext>
    </TagsInput>
  </Field>
);

const validTagPattern = /^[a-zA-Z0-9-]+$/;

export default Example;
