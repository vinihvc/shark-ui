"use client";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

export const CardsCookie = () => (
  <Card>
    <CardHeader
      description="Manage your cookie settings here."
      title="Cookie Settings"
    />
    <CardContent className="grid gap-6">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel>Strictly Necessary</FieldLabel>
          <FieldDescription>
            These cookies are essential in order to use the website and use its
            features.
          </FieldDescription>
        </FieldContent>

        <Switch aria-label="Necessary" defaultChecked />
      </Field>

      <Field>
        <Button variant="outline">Save preferences</Button>
      </Field>
    </CardContent>
  </Card>
);
