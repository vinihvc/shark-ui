const stats = [
  { label: "Active users", value: "2,847" },
  { label: "Revenue", value: "$124k" },
  { label: "Conversion", value: "3.2%" },
];

const SplitLayoutMetrics = () => {
  return (
    <div className="flex flex-col gap-8 rounded-xl border bg-card p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-12">
      <div className="flex shrink-0 justify-center">
        <div className="h-48 w-40 rounded-lg bg-muted sm:h-64 sm:w-52" />
      </div>
      <div className="flex flex-1 flex-wrap gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-bold text-3xl tracking-tight text-foreground">
              {stat.value}
            </p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitLayoutMetrics;
