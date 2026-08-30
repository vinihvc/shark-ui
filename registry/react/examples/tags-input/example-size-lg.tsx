"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Frameworks</FieldLabel>
    <TagsInput className="w-full" defaultValue={defaultValue} size="lg">
      <TagsInputContext>
        {({ value }) =>
          value.map((value, index) => (
            <TagsInputItem index={index} key={value} value={value}>
              {value}
            </TagsInputItem>
          ))
        }
      </TagsInputContext>
    </TagsInput>
  </Field>
);

const defaultValue = ["React", "Solid"];

export default Example;
