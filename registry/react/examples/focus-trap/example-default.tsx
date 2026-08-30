"use client";

import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { FocusTrap } from "@/registry/react/components/focus-trap";
import { Input } from "@/registry/react/components/input";
import { Textarea } from "@/registry/react/components/textarea";

const FocusTrapDemo = () => {
  const [trapped, setTrapped] = useState(false);

  const startTrap = () => setTrapped(true);
  const endTrap = () => setTrapped(false);

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <Button onClick={startTrap} type="button" variant="outline">
        Start trap
      </Button>
      <FocusTrap
        className="w-full rounded-xl border p-4"
        disabled={!trapped}
        returnFocusOnDeactivate={false}
      >
        <FieldGroup>
          <Field>
            <FieldLabel>First name</FieldLabel>
            <Input placeholder="Alex" type="text" />
          </Field>
          <Field>
            <FieldLabel>Notes</FieldLabel>
            <Textarea placeholder="Add a note…" />
          </Field>
          <Button onClick={endTrap} type="button">
            End trap
          </Button>
        </FieldGroup>
      </FocusTrap>
      <p className="text-muted-foreground text-xs">
        Activate the trap, then use Tab and Shift+Tab to move between its
        controls.
      </p>
    </div>
  );
};

export default FocusTrapDemo;
