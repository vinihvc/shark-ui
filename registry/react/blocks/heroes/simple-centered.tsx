import { Button } from "@/registry/react/components/button";

const SimpleCentered = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border bg-card px-6 py-20 text-center">
      <h1 className="font-bold text-3xl tracking-tight text-foreground sm:text-4xl">
        Data to enrich your online business
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground text-base">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button>Get started</Button>
        <Button variant="outline">Learn more</Button>
      </div>
    </div>
  );
};

export default SimpleCentered;
