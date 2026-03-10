import { cn } from "@/lib/utils";

export const Footer = (props: React.ComponentProps<"footer">) => {
  const { className, ...rest } = props;

  return (
    <footer
      className={cn(
        "container absolute right-0 bottom-0 left-0 mt-auto py-4",
        className
      )}
      {...rest}
    >
      <p className="text-muted-foreground text-sm">
        Built by{" "}
        <a
          className="underline underline-offset-2 hover:text-primary"
          href="https://vini.one"
          rel="noopener noreferrer"
          target="_blank"
        >
          Vinicius Vicentini
        </a>
      </p>
    </footer>
  );
};
