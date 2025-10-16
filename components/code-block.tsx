import { cn } from "fumadocs-ui/utils/cn";
import React from "react";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {}

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, ...props }, ref) => (
    <pre
      className={cn(
        "mt-3 overflow-x-auto rounded-md border bg-muted p-4 text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
CodeBlock.displayName = "CodeBlock";
