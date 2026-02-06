import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@/registry/react/components/skeleton";

const Example = () => (
  <Card className="w-full max-w-xs">
    <CardHeader className="flex flex-row items-center gap-4">
      <SkeletonCircle className="size-12" />
      <SkeletonText lines={2} />
    </CardHeader>
    <CardContent>
      <SkeletonText lines={3} />
    </CardContent>
    <CardFooter className="flex gap-2">
      <Skeleton className="h-9 flex-1" />
      <Skeleton className="h-9 flex-1" />
    </CardFooter>
  </Card>
);

export default Example;
