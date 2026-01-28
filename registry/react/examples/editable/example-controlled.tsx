"use client";

import { Check, Pencil } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Editable,
  EditableArea,
  EditableInput,
  EditablePreview,
} from "@/registry/react/components/editable";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader
        description="Click the edit button to start editing"
        title="Edit user"
      >
        <CardAction>
          <Button
            onClick={() => setIsEditing((prev) => !prev)}
            variant={isEditing ? "outline" : "ghost"}
          >
            {isEditing ? (
              <>
                <Check /> Save
              </>
            ) : (
              <>
                <Pencil /> Edit
              </>
            )}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Editable
              activationMode="none"
              defaultValue="Vinicius Vicentini"
              edit={isEditing}
            >
              <EditableArea>
                <EditableInput asChild>
                  <Input />
                </EditableInput>
                <EditablePreview />
              </EditableArea>
            </Editable>
          </Field>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Editable
              activationMode="none"
              defaultValue="@vinihvc"
              edit={isEditing}
            >
              <EditableArea>
                <EditableInput asChild>
                  <Input />
                </EditableInput>
                <EditablePreview />
              </EditableArea>
            </Editable>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default Example;
