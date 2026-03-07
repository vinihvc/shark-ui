import { Skeleton, SkeletonText } from "@/registry/react/components/skeleton";

const Example = () => (
  <div className="flex w-full max-w-xs flex-col gap-5">
    <Skeleton className="h-6 w-3/4" />
    <SkeletonText lines={5} />
    <SkeletonText lines={3} />
    <SkeletonText lines={2} />
  </div>
);

export default Example;
