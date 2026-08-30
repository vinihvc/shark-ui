"use client";

import { useRef, useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { FocusTrap } from "@/registry/react/components/focus-trap";
import { Input } from "@/registry/react/components/input";

const FocusTrapDemo = () => {
  const [trapped, setTrapped] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getReturnFocus = (): HTMLButtonElement | false =>
    buttonRef.current ?? false;
  const startTrap = () => setTrapped(true);
  const endTrap = () => setTrapped(false);

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <Button
        onClick={startTrap}
        ref={buttonRef}
        type="button"
        variant="outline"
      >
        Start trap
      </Button>
      {!!trapped && (
        <FocusTrap
          className="w-full rounded-xl border p-4"
          disabled={!trapped}
          setReturnFocus={getReturnFocus}
        >
          <FieldGroup>
            <Field>
              <FieldLabel>First name</FieldLabel>
              <Input placeholder="Alex" type="text" />
            </Field>
            <Field>
              <FieldLabel>Last name (autofocused)</FieldLabel>
              {/* Autofocus is intentional and only runs after activating the trap. */}
              <Input autoFocus placeholder="Morgan" type="text" />
            </Field>
            <Button onClick={endTrap} type="button">
              End trap
            </Button>
          </FieldGroup>
        </FocusTrap>
      )}
      <p className="text-muted-foreground text-xs">
        Activate the trap, then use Tab and Shift+Tab to move between its
        controls.
      </p>
    </div>
  );
};

export default FocusTrapDemo;
