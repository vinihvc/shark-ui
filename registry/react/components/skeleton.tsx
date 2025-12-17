import { ark } from "@ark-ui/react";
import { cn } from "@/lib/utils";

export const Skeleton = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("animate-pulse rounded-md bg-accent", className)}
      data-part="skeleton"
      data-scope="skeleton"
      {...rest}
    />
  );
};

export const SkeletonCircle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "size-10 shrink-0 animate-pulse rounded-full bg-accent",
        className
      )}
      data-part="skeleton-circle"
      data-scope="skeleton"
      {...rest}
    />
  );
};

interface SkeletonTextProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The number of lines of the skeleton text.
   *
   * @default 1
   */
  lines?: number;
}

export const SkeletonText = (props: SkeletonTextProps) => {
  const { className, lines = 1, ...rest } = props;

  return (
    <ark.div
      className={cn("flex w-full animate-pulse flex-col gap-2", className)}
      data-part="skeleton-text"
      data-scope="skeleton"
      {...rest}
    >
      {Array.from({ length: lines }).map((_, index) => {
        const key = `skeleton-text-${index}`;

        return (
          <div
            className="h-4 w-full rounded-md bg-accent last:w-3/4"
            key={key}
          />
        );
      })}
    </ark.div>
  );
};
