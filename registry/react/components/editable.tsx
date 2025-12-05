import { Editable as ArkEditable } from "@ark-ui/react/editable";
import type React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/registry/react/components/input";

export const Editable = (
  props: React.ComponentProps<typeof ArkEditable.Root>
) => {
  const { activationMode = "dblclick", ...rest } = props;

  return <ArkEditable.Root activationMode={activationMode} {...rest} />;
};

export const EditableArea = (
  props: React.ComponentProps<typeof ArkEditable.Area>
) => <ArkEditable.Area {...props} />;

export const EditableInput = (
  props: React.ComponentProps<typeof ArkEditable.Input>
) => {
  const { children, ...rest } = props;

  return (
    <ArkEditable.Input {...rest} asChild={!children}>
      {children || <Input />}
    </ArkEditable.Input>
  );
};

export const EditablePreview = (
  props: React.ComponentProps<typeof ArkEditable.Preview>
) => {
  const { className, ...rest } = props;

  return (
    <ArkEditable.Preview
      className={cn(
        "relative",
        "text-base md:text-sm",
        "flex items-center",
        "h-9 peer-data-[size=lg]:h-10 peer-data-[size=sm]:h-8",
        className
      )}
      {...rest}
    />
  );
};
