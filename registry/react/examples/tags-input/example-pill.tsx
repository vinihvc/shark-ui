"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Teams</FieldLabel>
    <TagsInput className="w-full" defaultValue={defaultValue} pill>
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

const defaultValue = ["Design", "Engineering", "Marketing"];

export default Example;
