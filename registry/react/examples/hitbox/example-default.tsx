"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => {
  const [show, setShow] = React.useState(true);

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

      <Button
        className={cn("group/hitbox hitbox-6 w-28", { "hitbox-debug": show })}
        clickEffect={false}
        size="lg"
      >
        <span className="font-mono group-hover/hitbox:hidden">hit-area-6</span>
        <span className="not-group-hover/hitbox:hidden group-active:hidden">
          Hovered
        </span>
        <span className="not-group-active/hitbox:hidden">Pressed</span>
      </Button>
    </div>
  );
};

export default Example;
