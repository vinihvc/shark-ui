"use client";

import React from "react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => {
  const [value, setValue] = React.useState(initialValue);

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>Frameworks</FieldLabel>
      <TagsInput
        className="w-full"
        onValueChange={(details) => setValue(details.value)}
        value={value}
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
};

const initialValue = ["React", "Solid"];

export default Example;
