import { Button } from "@/registry/react/components/button";

const GradientDualCtas = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-primary/20 via-background to-primary/10 px-6 py-20 text-center sm:px-12 sm:py-28">
      <div className="relative flex flex-col items-center gap-8">
        <h1 className="font-bold text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Deploy to the cloud with confidence
        </h1>
        <p className="max-w-2xl text-muted-foreground text-base sm:text-lg">
          Get your projects to production faster with our platform. Nested
          workflows and real-time collaboration included.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg">Deploy now</Button>
          <Button size="lg" variant="outline">
            View demo
          </Button>
        </div>
        <div className="mt-4 flex gap-8">
          <div className="h-24 w-40 rounded-lg border bg-background/80 shadow-sm" />
          <div className="h-24 w-40 rounded-lg border bg-background/80 shadow-sm" />
        </div>
      </div>
    </div>
  );
};

export default GradientDualCtas;
