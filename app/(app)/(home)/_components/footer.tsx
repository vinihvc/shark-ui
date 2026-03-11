import { cn } from "@/lib/utils";

export const Footer = (props: React.ComponentProps<"footer">) => {
  const { className, ...rest } = props;

  return (
    <footer
      className={cn(
        "container absolute right-0 bottom-0 left-0 my-8 mt-auto",
        className
      )}
      {...rest}
    >
      <p className="text-muted-foreground text-sm max-sm:text-center">
        &copy; {new Date().getFullYear()} Built by{" "}
        <a
          className="underline-offset-2 outline-none hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
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
