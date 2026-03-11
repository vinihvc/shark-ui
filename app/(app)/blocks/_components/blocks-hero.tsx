import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";

export const BlocksHero = (props: React.ComponentProps<"section">) => {
  const { className, ...rest } = props;

  return (
    <section className={className} {...rest}>
      <div className="flex max-w-2xl flex-col gap-4">
        <h1 className="font-extrabold text-4xl sm:text-7xl">
          Building blocks <br /> for your website
        </h1>

        <div className="max-w-xl">
          <p className="text-muted-foreground text-xl">
            Reusable UI blocks built with Shark UI. Copy, customize, and ship
            faster with forms, heroes, footers, and more.
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild size="xl">
            <Link href="/docs">Get Started</Link>
          </Button>

          <Button asChild size="xl" variant="ghost">
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
