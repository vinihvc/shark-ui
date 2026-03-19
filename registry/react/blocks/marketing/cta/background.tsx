import { Button } from "@/registry/react/components/button";

const CtaBackground = () => {
  return (
    <div className="rounded-xl border bg-primary px-6 py-16 text-center sm:px-12 sm:py-20">
      <h2 className="font-bold text-2xl tracking-tight text-primary-foreground sm:text-3xl">
        Boost your productivity today
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90 text-base">
        Start your free trial. No credit card required. Cancel anytime.
      </p>
      <Button
        className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        size="lg"
      >
        Start free trial
      </Button>
    </div>
  );
};

export default CtaBackground;
