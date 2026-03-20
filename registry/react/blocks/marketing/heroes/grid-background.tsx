import { Button } from "@/registry/react/components/button";

const GridBackground = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-card">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-48"
      />
      <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-12 sm:py-28">
        <h1 className="font-bold text-3xl text-foreground tracking-tight sm:text-4xl md:text-5xl">
          New ways to build
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Grid background hero with headline and simple subtext.
        </p>
        <Button size="lg">Get started</Button>
      </div>
    </div>
  );
};

export default GridBackground;
