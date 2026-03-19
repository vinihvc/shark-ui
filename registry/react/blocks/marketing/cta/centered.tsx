import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";

const CtaCentered = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border bg-primary/5 px-6 py-16 text-center sm:px-12 sm:py-20">
      <h2 className="font-bold text-2xl tracking-tight text-foreground sm:text-3xl">
        Ready to dive in?
      </h2>
      <p className="max-w-xl text-muted-foreground text-base">
        Start your free trial today. No credit card required.
      </p>
      <form className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
        <Input
          className="flex-1"
          placeholder="Enter your email"
          type="email"
        />
        <Button type="submit">Get started</Button>
      </form>
    </div>
  );
};

export default CtaCentered;
