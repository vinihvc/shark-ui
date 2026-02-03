"use client";

import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <form className="w-full max-w-xs">
    <FieldSet aria-label="Personal information">
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input name="name" placeholder="Your name" required />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input
            name="email"
            placeholder="john@doe.com"
            required
            type="email"
          />
        </Field>
        <FieldGroup className="grid grid-cols-2">
          <Field>
            <FieldLabel>Phone</FieldLabel>
            <Input
              name="phone"
              placeholder="+55 (16) 99456-7890"
              required
              type="tel"
            />
          </Field>
          <Field>
            <FieldLabel>Country</FieldLabel>
            <Input name="country" placeholder="Brazil" required type="text" />
          </Field>
        </FieldGroup>
        <Field>
          <FieldLabel>Address</FieldLabel>
          <Input
            name="address"
            placeholder="123 Main St"
            required
            type="text"
          />
        </Field>
        <Field orientation="horizontal" reverse>
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="outline">
            Reset
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </form>
);

export default Example;
