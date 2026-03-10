"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { cn } from "@/lib/utils";

const UPPERCASE_REGEX = /[A-Z]/;
const LOWERCASE_REGEX = /[a-z]/;
const NUMBER_REGEX = /\d/;
const NON_ALPHANUMERIC_REGEX = /[^a-zA-Z0-9]/;

type PasswordStrengthLevel = "weak" | "moderate" | "strong";

function getPasswordStrength(password: string): PasswordStrengthLevel {
  if (!password) {
    return "weak";
  }

  const hasUppercase = UPPERCASE_REGEX.test(password);
  const hasLowercase = LOWERCASE_REGEX.test(password);
  const hasNumber = NUMBER_REGEX.test(password);
  const hasSpecialChar = NON_ALPHANUMERIC_REGEX.test(password);
  const hasMinLength = password.length >= 8;

  const criteriaMet = [
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
    hasMinLength,
  ].filter(Boolean).length;

  if (criteriaMet <= 2) {
    return "weak";
  }
  if (criteriaMet <= 4) {
    return "moderate";
  }
  return "strong";
}

interface PasswordStrengthProps {
  password: string;
}

const STRENGTH_STYLES = {
  weak: "bg-red-500 text-white dark:bg-red-600 dark:text-white",
  moderate:
    "bg-orange-500 text-white dark:bg-orange-600 dark:text-white",
  strong: "bg-green-500 text-white dark:bg-green-600 dark:text-white",
} as const;

const STRENGTH_LABELS = {
  weak: "Weak Password",
  moderate: "Moderate Password",
  strong: "Strong Password",
} as const;

function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = getPasswordStrength(password);

  return (
    <div
      className={cn(
        "flex h-12 w-full items-center justify-center rounded-lg font-medium text-sm transition-colors",
        STRENGTH_STYLES[strength]
      )}
      data-testid="passwordStrengthDiv"
      role="status"
      aria-live="polite"
    >
      {STRENGTH_LABELS[strength]}
    </div>
  );
}

interface PasswordCheckerProps {
  password: string;
  onPasswordChange: (value: string) => void;
}

function PasswordChecker({ password, onPasswordChange }: PasswordCheckerProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    onPasswordChange("");
  };

  const handleToggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>Enter Your Password</FieldLabel>
      <InputGroup className="w-full">
        <InputGroupInput
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="•••"
          autoComplete="current-password"
          aria-label="Password"
          data-testid="passwordInput"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={handleToggleVisibility}
          >
            {showPassword ? (
              <EyeOffIcon aria-hidden />
            ) : (
              <EyeIcon aria-hidden />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <div className="mt-3 flex gap-2" data-testid="buttonDiv">
        <Button
          type="button"
          variant="default"
          size="sm"
          onClick={handleToggleVisibility}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </Button>
        <Button
          type="button"
          variant="default"
          size="sm"
          onClick={handleClear}
          disabled={!password}
        >
          Clear Password
        </Button>
      </div>
    </Field>
  );
}

const Example = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <PasswordChecker password={password} onPasswordChange={setPassword} />
      <PasswordStrength password={password} />
    </div>
  );
};

export default Example;
