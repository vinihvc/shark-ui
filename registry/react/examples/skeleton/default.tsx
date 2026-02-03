import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@/registry/react/components/skeleton";

const SkeletonDemo = () => (
  <div className="flex w-full items-center gap-5">
    <SkeletonCircle className="size-16" />
    <SkeletonText lines={3} />
    <Skeleton className="h-16 w-full" />
  </div>
);

export default SkeletonDemo;
