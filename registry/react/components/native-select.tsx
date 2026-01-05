import { ark } from "@ark-ui/react";
import { ChevronDown } from "lucide-react";
import type React from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { inputVariants } from "./input";

interface NativeSelectProps
  extends Omit<React.ComponentProps<typeof ark.select>, "size">,
    VariantProps<typeof inputVariants> {}

export const NativeSelect = (props: NativeSelectProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <div
      className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper"
    >
      <ark.select
        className={cn(
          inputVariants({ size }),
          "w-fit",
          "appearance-none px-3 py-2 pr-9 placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1 dark:bg-input/30 dark:hover:bg-input/50",
          "flex items-center justify-between gap-2",
          "*:data-placeholder-shown:text-muted-foreground",
          "data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/50",
          "[&_svg:not([class*='text-'])]:text-muted-foreground",
          className
        )}
        data-size={size}
        data-slot="native-select"
        {...rest}
      />
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 select-none text-muted-foreground opacity-50"
        data-slot="native-select-icon"
      />
    </div>
  );
};

export const NativeSelectOption = (
  props: React.ComponentProps<typeof ark.option>
) => <ark.option data-slot="native-select-option" {...props} />;

export const NativeSelectOptGroup = (
  props: React.ComponentProps<typeof ark.optgroup>
) => <ark.optgroup data-slot="native-select-optgroup" {...props} />;
