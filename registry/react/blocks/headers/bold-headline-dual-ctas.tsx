import { Button } from "@/registry/react/components/button";

const BoldHeadlineDualCtas = () => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl border bg-card px-6 py-16 text-center sm:px-12 sm:py-24">
      <h1 className="font-bold text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
        Everything you need to ship
      </h1>
      <p className="max-w-xl text-muted-foreground text-base">
        Hero header with bold SaaS headline, subtext and dual CTA buttons.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg">Get started</Button>
        <Button size="lg" variant="outline">
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default BoldHeadlineDualCtas;
