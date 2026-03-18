import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";

export const BlocksHero = (props: React.ComponentProps<"section">) => {
  const { className, ...rest } = props;

  return (
    <section className={className} {...rest}>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-4xl leading-snug sm:text-7xl">
          Building blocks <br /> for{" "}
          <mark className="rounded-l-lg border-primary border-r bg-primary/10 px-4 font-extrabold text-primary">
            your website
          </mark>
        </h1>

        <div className="max-w-md">
          <p className="text-muted-foreground text-xl">
            Reusable UI blocks built with Shark UI. Copy, customize, and ship
            faster with forms, heroes, footers, and more.
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild size="xl" variant="outline">
            <Link href="/docs/components">
              Browse docs
              <ArrowRightIcon aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
