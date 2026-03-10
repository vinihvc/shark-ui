import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
} from "@/registry/react/components/card";
import { Skeleton, SkeletonText } from "@/registry/react/components/skeleton";

const Example = () => (
  <Card className="w-full max-w-xs">
    <CardMedia className="h-32" variant="image">
      <Skeleton className="aspect-video w-full" />
    </CardMedia>
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
    </CardHeader>
    <CardContent>
      <SkeletonText lines={2} />
    </CardContent>
    <CardFooter className="flex gap-2">
      <Skeleton className="h-9 flex-1" />
      <Skeleton className="h-9 flex-1" />
    </CardFooter>
  </Card>
);

export default Example;
