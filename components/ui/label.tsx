import { cn } from "fumadocs-ui/utils/cn";
import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      className={cn(
        "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };
