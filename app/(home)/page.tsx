import { ArrowRight, StarIcon } from "lucide-react";
import { NavLink } from "@/components/nav-link";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";

const HomePage = () => (
  <main>
    <div
      className="-z-10 absolute inset-0 bg-repeat-x"
      style={{ backgroundImage: "url(/images/pattern.svg)" }}
    />

    <div className="-z-10 absolute inset-0 hidden h-[calc(100vh-var(--header-height))] bg-[radial-gradient(42.48%_42.48%_at_calc(50%+100vw/2)_center,theme(colors.primary),theme(colors.background))] opacity-30 blur-2xl sm:block" />

    <section className="container flex flex-col gap-4 bg-none bg-position-[calc(50%+250px)_25px] bg-no-repeat py-20 md:py-32">
      <div>
        <Badge asChild variant="secondary">
          <NavLink href="/docs">
            <StarIcon />
            Beta Version
          </NavLink>
        </Badge>
      </div>

      <h1 className="text-balance font-semibold text-4xl leading-tight sm:text-5xl md:text-6xl">
        shadcn/ui Components <br />
        Powered by{" "}
        <span className="inline-block rounded-md bg-primary px-4 py-1 text-primary-foreground leading-none">
          Ark UI
        </span>
      </h1>

      <p className="max-w-2xl text-fd-muted-foreground text-xl">
        Ark UI is a headless UI library with over 45+ components designed to
        build reusable, scalable Design Systems.
      </p>

      <div className="flex gap-4">
        <Button asChild size="lg">
          <NavLink href="/docs">Get Started</NavLink>
        </Button>

        <Button asChild size="lg" variant="outline">
          <NavLink href="/docs/components">
            View components
            <ArrowRight />
          </NavLink>
        </Button>
      </div>
    </section>
  </main>
);

export default HomePage;
