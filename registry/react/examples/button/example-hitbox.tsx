"use client";

import { Menu } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div className="relative flex size-full items-center justify-center">
      <div className="absolute inset-e-2 top-2">
        <Field orientation="horizontal">
          <Switch
            checked={show}
            onCheckedChange={({ checked }) => setShow(checked)}
          />
          <FieldLabel>Show hitbox</FieldLabel>
        </Field>
      </div>

      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <Button
          className={cn("hitbox-2", { "hitbox-debug": show })}
          type="button"
          variant="outline"
        >
          hitbox-6
        </Button>
        <Button
          aria-label="Menu"
          className={cn("hitbox-2", { "hitbox-debug": show })}
          size="icon-md"
          type="button"
          variant="ghost"
        >
          <Menu />
        </Button>
      </div>
    </div>
  );
};

export default Example;
