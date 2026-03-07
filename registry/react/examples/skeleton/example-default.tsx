import {
  SkeletonCircle,
  SkeletonText,
} from "@/registry/react/components/skeleton";

const SkeletonDemo = () => (
  <div className="flex w-full max-w-xs items-center gap-4">
    <SkeletonCircle className="size-16" />
    <SkeletonText lines={3} />
  </div>
);

export default SkeletonDemo;
