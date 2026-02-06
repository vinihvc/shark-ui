import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  SkeletonCircle,
  SkeletonText,
} from "@/registry/react/components/skeleton";

const Example = () => (
  <Card className="w-full max-w-xs">
    <CardContent>
      <SkeletonText lines={4} />
    </CardContent>
    <CardFooter className="flex items-center gap-4">
      <SkeletonCircle className="size-12" />
      <SkeletonText lines={2} />
    </CardFooter>
  </Card>
);

export default Example;
