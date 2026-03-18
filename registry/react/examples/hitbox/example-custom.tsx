"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="relative flex size-full items-center justify-center">
      <div className="absolute top-2 right-2">
        <Field orientation="horizontal">
          <Switch
            checked={show}
            onCheckedChange={({ checked }) => setShow(checked)}
          />
          <FieldLabel>Show hitbox</FieldLabel>
        </Field>
      </div>

      <div className="flex flex-wrap gap-8">
        <Button
          className={cn("hitbox-[21px]", { "hitbox-debug": show })}
          clickEffect={false}
          size="sm"
        >
          Custom
        </Button>
        <Button
          className={cn("hitbox-r-[21px]", { "hitbox-debug": show })}
          clickEffect={false}
          size="sm"
        >
          Left only, custom
        </Button>
      </div>
    </div>
  );
};

export default Example;
