import { SharkIcon } from "@/components/icons/shark";
import { cn } from "@/lib/utils";

export const HomeFooter = (props: React.ComponentProps<"footer">) => {
  const { className, ...rest } = props;

  return (
    <footer
      className={cn(
        "container right-0 bottom-4 left-4 mt-auto max-lg:py-4 lg:absolute",
        className
      )}
      {...rest}
    >
      <p className="text-muted-foreground text-sm max-sm:text-center">
        &copy; {new Date().getFullYear()}{" "}
        <SharkIcon className="mx-1 inline-block h-lh w-4 -translate-y-0.5" />.
        Built by{" "}
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
