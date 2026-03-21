const GradientTwoColumns = () => {
  return (
    <div className="overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="flex flex-col gap-8 p-8 lg:flex-row lg:gap-12 lg:p-12">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="font-bold text-2xl tracking-tight text-foreground sm:text-3xl">
            Advanced analytics
          </h2>
          <p className="text-muted-foreground text-base">
            Get detailed insights into your metrics and performance with our
            powerful analytics dashboard.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="font-bold text-2xl tracking-tight text-foreground sm:text-3xl">
            Seamless integration
          </h2>
          <p className="text-muted-foreground text-base">
            Connect with your favorite tools and automate your workflow from
            start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradientTwoColumns;
