import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentProps<"div"> {
  /**
   * The spacing variable value
   */
  spacing?: number;
}

export const Card = (props: CardProps) => {
  const { spacing = 6, className, style, ...rest } = props;

  return (
    <div
      className={cn(
        "group/card",
        "py-(--card-spacing)",
        "flex flex-col gap-(--card-spacing)",
        "bg-card",
        "text-foreground",
        "rounded-lg border shadow-xs",
        "has-[table]:overflow-hidden **:[table]:overflow-hidden",
        "has-[table]:not-has-data-[part=footer]:pb-0 has-[table]:**:data-[part=footer]:border-t",
        className
      )}
      data-part="root"
      data-scope="card"
      data-spacing={spacing}
      style={
        {
          "--card-spacing": `calc(${spacing} * var(--spacing))`,
          ...style,
        } as React.CSSProperties
      }
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
        "grid auto-rows-min grid-rows-[auto_auto] gap-1",
        "px-(--card-spacing)",
        "items-start",
        "has-data-[part=card-action]:grid-cols-[1fr_auto]",
        className
      )}
      data-part="header"
      data-scope="card"
      {...rest}
    >
      {!!title && <CardTitle>{title}</CardTitle>}
      {!!description && <CardDescription>{description}</CardDescription>}
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
      className={cn(
        "text-pretty font-semibold text-foreground text-lg/6 sm:text-base/6",
        className
      )}
      data-part="title"
      data-scope="card"
      {...rest}
    />
  );
};

export const CardDescription = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "row-start-2",
        "text-pretty text-muted-foreground text-sm",
        className
      )}
      data-part="description"
      data-scope="card"
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
      data-part="action"
      data-scope="card"
      {...rest}
    />
  );
};

export const CardContent = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("px-(--card-spacing) has-[table]:border-t", className)}
      data-part="content"
      data-scope="card"
      {...rest}
    />
  );
};

export const CardFooter = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex items-center",
        "px-(--card-spacing)",
        "group-has-[table]/card:pt-(--card-spacing)",
        "[.border-t]:pt-(--card-spacing)",
        className
      )}
      data-part="footer"
      data-scope="card"
      {...rest}
    />
  );
};
