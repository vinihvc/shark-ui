import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";

const HomePage = () => (
  <>
    <div
      className="-z-10 absolute inset-0 min-h-screen bg-repeat-x"
      style={{ backgroundImage: "url(https://ark-ui.com/images/pattern.svg)" }}
    />

    <div className="-z-10 absolute inset-0 hidden h-[830px] bg-[radial-gradient(42.48%_42.48%_at_calc(50%+100vw/2)_center,#EB5E41_0,rgba(235,94,65,0)_100%)] blur-2xl sm:block" />

    <section
      className="container flex flex-col gap-4 bg-none bg-position-[calc(50%+250px)_25px] bg-no-repeat py-20 md:py-32"
      style={{
        backgroundImage: "url(https://ark-ui.com/images/hero_dark.svg)",
      }}
    >
      <div>
        <Badge asChild className="text-ark" variant="secondary">
          <Link href="/docs">
            <StarIcon />
            Now in Beta
          </Link>
        </Badge>
      </div>

      <h1 className="text-balance font-semibold text-4xl leading-tight sm:text-5xl md:text-6xl">
        shadcn/ui Components <br />
        Powered by{" "}
        <span className="inline-block rounded-md bg-ark px-4 py-1 text-primary-foreground leading-none">
          Ark UI
        </span>
      </h1>

      <p className="max-w-2xl text-fd-muted-foreground text-xl">
        Ark UI is a headless UI library with over 45+ components designed to
        build reusable, scalable Design Systems.
      </p>

      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/docs">Get Started</Link>
        </Button>

        <Button asChild size="lg" variant="outline">
          <Link href="https://github.com/vinihvc/shark-ui">GitHub</Link>
        </Button>
      </div>
    </section>
  </>
);

export default HomePage;
