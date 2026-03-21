import { Button } from "@/registry/react/components/button";

const BlueGradient = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-primary/25 via-primary/10 to-background px-6 py-20 text-center sm:px-12 sm:py-28">
      <div className="relative flex flex-col items-center gap-6">
        <h1 className="font-bold text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Take control of your workflow
        </h1>
        <p className="max-w-2xl text-muted-foreground text-base sm:text-lg">
          Streamline your processes and ship faster with our all-in-one platform.
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

export default BlueGradient;
