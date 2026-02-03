import { ark } from "@ark-ui/react";
import { cn } from "@/lib/utils";

export interface ProseProps extends React.ComponentProps<typeof ark.div> {}

export const Prose = (props: ProseProps) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("prose mx-auto max-w-[65ch]", className)}
      data-slot="prose"
      {...rest}
    />
  );
};
