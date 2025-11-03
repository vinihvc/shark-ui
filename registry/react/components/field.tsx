import { Field as ArkField } from "@ark-ui/react/field";
import type React from "react";
import { cn } from "@/lib/utils";

export const Field = (props: React.ComponentProps<typeof ArkField.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkField.Root className={cn("flex flex-col gap-2", className)} {...rest} />
  );
};

export const FieldLabel = (
  props: React.ComponentProps<typeof ArkField.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkField.Label
      className={cn(
        "font-medium text-sm leading-none",
        "select-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        className
      )}
      {...rest}
    />
  );
};

export const FieldInput = (
  props: React.ComponentProps<typeof ArkField.Input>
) => <ArkField.Input {...props} asChild />;

export const FieldHelper = (
  props: React.ComponentProps<typeof ArkField.HelperText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkField.HelperText
      className={cn("text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
};

export const FieldError = (
  props: React.ComponentProps<typeof ArkField.ErrorText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkField.ErrorText
      className={cn("text-destructive text-sm", className)}
      {...rest}
    />
  );
};
