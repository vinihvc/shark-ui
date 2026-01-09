import { ark } from "@ark-ui/react";
import { cn } from "@/lib/utils";

export const Card = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "[--gap:--spacing(6)]",
        "group/card",
        "py-(--gap)",
        "flex flex-col gap-(--gap)",
        "bg-card",
        "text-foreground",
        "rounded-lg border shadow-xs",
        className
      )}
      data-slot="card"
      {...rest}
    />
  );
};

interface HeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the card
   */
  title?: string;
  /**
   * The description of the card
   */
  description?: string;
}

export const CardHeader = (props: HeaderProps) => {
  const { className, title, description, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] gap-1",
        "px-(--gap)",
        "items-start",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        className
      )}
      data-slot="card-header"
      {...rest}
    >
      {!!title && <CardTitle>{title}</CardTitle>}
      {!!description && <CardDescription>{description}</CardDescription>}
      {!title && typeof children === "string" ? (
        <CardTitle>{children}</CardTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const CardTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "text-pretty font-semibold text-foreground text-lg/6 sm:text-base/6",
        className
      )}
      data-slot="card-title"
      {...rest}
    />
  );
};

export const CardDescription = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "row-start-2",
        "text-pretty text-muted-foreground text-sm",
        className
      )}
      data-slot="card-description"
      {...rest}
    />
  );
};

export const CardAction = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      data-slot="card-action"
      {...rest}
    />
  );
};

export const CardContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("px-(--gap)", className)}
      data-slot="card-content"
      {...rest}
    />
  );
};

export const CardFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex items-center gap-2",
        "px-(--gap)",
        "[.border-t]:pt-(--gap)",
        className
      )}
      data-slot="card-footer"
      {...rest}
    />
  );
};
