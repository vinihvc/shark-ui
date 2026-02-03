import { ark } from "@ark-ui/react";
import { Field as ArkField } from "@ark-ui/react/field";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const nativeSelectVariants = tv({
  base: [
    "appearance-none",
    "w-full min-w-0",
    "py-1 pr-8 pl-2.5",
    "select-none text-sm",
    "bg-transparent dark:bg-input/30",
    "rounded-md border border-input",
    "transition-colors",
    "outline-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
    "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/20",
  ],
  variants: {
    size: {
      sm: ["h-7"],
      md: ["h-8"],
      lg: ["h-9"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface NativeSelectProps
  extends Omit<React.ComponentProps<typeof ArkField.Select>, "size">,
    VariantProps<typeof nativeSelectVariants> {}

export const NativeSelect = (props: NativeSelectProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/native-select relative w-fit has-[select:disabled]:opacity-50",
        className
      )}
      data-slot="native-select-wrapper"
    >
      <ArkField.Select
        className={cn(nativeSelectVariants({ size }))}
        data-slot="native-select"
        {...rest}
      />
      <ChevronDown
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 right-2.5 -translate-y-1/2",
          "size-4",
          "select-none text-muted-foreground",
          "pointer-events-none"
        )}
        data-slot="native-select-icon"
      />
    </ark.div>
  );
};

export const NativeSelectOption = (
  props: React.ComponentProps<typeof ark.option>
) => {
  return <ark.option data-slot="native-select-option" {...props} />;
};

export const NativeSelectOptGroup = (
  props: React.ComponentProps<typeof ark.optgroup>
) => {
  return <ark.optgroup data-slot="native-select-optgroup" {...props} />;
};
