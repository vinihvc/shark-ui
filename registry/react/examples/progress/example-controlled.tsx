"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Progress } from "@/registry/react/components/progress";

const Example = () => {
  const [value, setValue] = React.useState(50);

  return (
    <Field className="w-full max-w-64">
      <FieldLabel className="flex items-center gap-2">
        Controlled progress
        <ButtonGroup className="ml-auto">
          <Button
            clickEffect={false}
            onClick={() => setValue(Math.max(0, value - 10))}
            size="icon-sm"
            variant="outline"
          >
            <MinusIcon />
          </Button>
          <Button
            clickEffect={false}
            onClick={() => setValue(Math.min(100, value + 10))}
            size="icon-sm"
            variant="outline"
          >
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </FieldLabel>
      <Progress value={value} />
    </Field>
  );
};

export default Example;
