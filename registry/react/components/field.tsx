import { ark } from "@ark-ui/react";
import { Field as ArkField } from "@ark-ui/react/field";
import { Fieldset as ArkFieldset } from "@ark-ui/react/fieldset";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "./separator";

export const FieldSet = (
  props: React.ComponentProps<typeof ArkFieldset.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFieldset.Root
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      data-part="root"
      data-scope="field"
      {...rest}
    />
  );
};

interface FieldLegendProps
  extends React.ComponentProps<typeof ArkFieldset.Legend> {
  /**
   * The variant of the legend.
   */
  variant?: "legend" | "label";
}

export const FieldLegend = (props: FieldLegendProps) => {
  const { variant = "legend", className, ...rest } = props;

  return (
    <ArkFieldset.Legend
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      data-part="legend"
      data-scope="field"
      data-variant={variant}
      {...rest}
    />
  );
};

export const FieldGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/field-group @container/field-group",
        "flex w-full flex-col gap-7",
        "data-[data-part=checkbox-group]:gap-3",
        "*:data-[data-part=field-group]:gap-4",
        className
      )}
      data-part="group"
      data-scope="field"
      {...rest}
    />
  );
};

const fieldVariants = tv({
  base: "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  variants: {
    orientation: {
      vertical: ["flex-col *:w-full [&>.sr-only]:w-auto"],
      horizontal: [
        "flex-row items-center",
        "*:data-[part=field-label]:flex-auto",
        "has-[>[data-part=field-content]]:items-start has-[>[data-part=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
      responsive: [
        "@md/field-group:flex-row flex-col @md/field-group:items-center *:w-full @md/field-group:*:w-auto [&>.sr-only]:w-auto",
        "@md/field-group:*:data-[part=field-label]:flex-auto",
        "@md/field-group:has-[>[data-part=field-content]]:items-start @md/field-group:has-[>[data-part=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

interface FieldProps
  extends React.ComponentProps<typeof ArkField.Root>,
    VariantProps<typeof fieldVariants> {}

export const Field = (props: FieldProps) => {
  const { orientation = "vertical", className, ...rest } = props;

  return (
    <ArkField.Root
      className={cn(fieldVariants({ orientation }), className)}
      data-orientation={orientation}
      {...rest}
    />
  );
};

export const FieldContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      )}
      data-part="content"
      data-scope="field"
      {...rest}
    />
  );
};

export const FieldLabel = (
  props: React.ComponentProps<typeof ArkField.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkField.Label
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-part=field]]:w-full has-[>[data-part=field]]:flex-col has-[>[data-part=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...rest}
    />
  );
};

export const FieldTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-fit",
        "flex items-center gap-2",
        "font-medium text-sm leading-snug",
        "group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...rest}
    />
  );
};

export const FieldDescription = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn(
        "font-normal text-muted-foreground text-sm leading-normal",
        "group-has-data-[orientation=horizontal]/field:text-balance",
        "nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 last:mt-0",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...rest}
    />
  );
};

export const FieldSeparator = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative",
        "h-5",
        "-my-2 group-data-[variant=outline]/field-group:-mb-2",
        "text-sm",
        className
      )}
      data-content={!!children}
      {...rest}
    >
      <Separator className="absolute inset-0 top-1/2" />

      {!!children && (
        <span
          className={cn(
            "relative block",
            "w-fit",
            "mx-auto px-2",
            "bg-background",
            "text-muted-foreground text-sm"
          )}
        >
          {children}
        </span>
      )}
    </ark.div>
  );
};

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
      className={cn("font-normal text-destructive text-sm", className)}
      {...rest}
    />
  );
};
