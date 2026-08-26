const Example = () => (
  <div className="mx-auto grid w-full max-w-lg gap-6 text-center text-muted-foreground text-sm sm:grid-cols-2">
    <div className="flex flex-col gap-1">
      <p className="shimmer shimmer-spread-4">Generating response…</p>
      <span className="text-xs">shimmer-spread-4</span>
    </div>
    <div className="flex flex-col gap-1">
      <p className="shimmer shimmer-spread-24">Generating response…</p>
      <span className="text-xs">shimmer-spread-24</span>
    </div>
  </div>
);

export default Example;
