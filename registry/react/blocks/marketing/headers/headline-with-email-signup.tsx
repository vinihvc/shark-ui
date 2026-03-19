import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";

const HeadlineWithEmailSignup = () => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl border bg-card px-6 py-16 text-center sm:px-12 sm:py-24">
      <h1 className="font-bold text-3xl tracking-tight text-foreground sm:text-4xl">
        The modern way to build
      </h1>
      <p className="max-w-xl text-muted-foreground text-base">
        Header featuring SaaS tagline, subtext, email field, and CTA button.
      </p>
      <form className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
        <Input className="flex-1" placeholder="Enter your email" type="email" />
        <Button type="submit">Get started</Button>
      </form>
    </div>
  );
};

export default HeadlineWithEmailSignup;
