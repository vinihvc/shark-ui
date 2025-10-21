import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const Card = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "group/card [--card-spacing:--spacing(6)]",
        "py-(--card-spacing)",
        "flex flex-col gap-(--card-spacing)",
        "bg-background",
        "text-foreground",
        "rounded-lg border shadow-xs",
        "has-[table]:overflow-hidden **:[table]:overflow-hidden",
        "has-[table]:not-has-data-[slot=card-footer]:pb-0 has-[table]:**:data-[slot=card-footer]:border-t",
        "**:data-[slot=table-header]:bg-muted/50",
        className
      )}
      data-slot="card"
      {...rest}
    />
  );
};

interface HeaderProps extends React.ComponentProps<"div"> {
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
    <div
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        className
      )}
      data-slot="card-header"
      {...rest}
    >
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}
      {!title && typeof children === "string" ? (
        <CardTitle>{children}</CardTitle>
      ) : (
        children
      )}
    </div>
  );
};

export const CardTitle = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <div
      className={twMerge(
        "text-pretty font-semibold text-foreground text-lg/6 sm:text-base/6",
        className
      )}
      data-slot="card-title"
      {...rest}
    />
  );
};

export const CardDescription = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "row-start-2 text-pretty text-muted-foreground text-sm",
        className
      )}
      data-slot="card-description"
      {...rest}
    />
  );
};

export const CardAction = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      data-slot="card-action"
      {...rest}
    />
  );
};

export const CardContent = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn("px-(--card-spacing) has-[table]:border-t", className)}
      data-slot="card-content"
      {...rest}
    />
  );
};

export const CardFooter = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "flex items-center px-(--card-spacing) group-has-[table]/card:pt-(--card-spacing) [.border-t]:pt-6",
        className
      )}
      data-slot="card-footer"
      {...rest}
    />
  );
};
