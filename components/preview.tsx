import { cn } from "fumadocs-ui/utils/cn";
import type React from "react";

export interface PreviewProps extends React.ComponentProps<"div"> {}

export const Preview = (props: PreviewProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "mt-3 rounded-md border bg-background p-6 shadow-sm",
        className
      )}
      {...rest}
    />
  );
};
