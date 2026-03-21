import { Button } from "@/registry/react/components/button";

const TwoColumnBlock = () => {
  return (
    <div className="flex flex-col gap-8 rounded-xl border bg-card p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-12">
      <div className="flex-1">
        <h2 className="font-bold text-2xl tracking-tight text-foreground sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-4 text-muted-foreground text-base">
          Have questions? We&apos;d love to hear from you. Send us a message and
          we&apos;ll respond as soon as possible.
        </p>
        <Button className="mt-6">Contact us</Button>
      </div>
      <div className="h-48 flex-1 rounded-lg bg-muted" />
    </div>
  );
};

export default TwoColumnBlock;
