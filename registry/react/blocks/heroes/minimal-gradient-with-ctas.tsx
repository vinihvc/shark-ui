import { Button } from "@/registry/react/components/button";

const MinimalGradientWithCtas = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-primary/10 via-background to-primary/5 px-6 py-16 text-center sm:px-12 sm:py-24">
      <div className="relative flex flex-col items-center gap-6">
        <h1 className="font-bold text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Build something amazing
        </h1>
        <p className="max-w-2xl text-muted-foreground text-base sm:text-lg">
          Get started with our platform and ship your next project faster than
          ever. Everything you need in one place.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MinimalGradientWithCtas;
