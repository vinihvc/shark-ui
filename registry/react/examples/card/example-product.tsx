import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardMedia,
} from "@/registry/react/components/card";

const Example = () => (
  <div className="w-full max-w-xs">
    <Card>
      <CardMedia className="h-32 bg-muted" variant="image">
        <img
          alt="Green mesh gradient"
          height={128}
          src="/images/gradients/green-dark.svg"
          width={500}
        />
      </CardMedia>
      <CardHeader
        description="A limited abstract print with a deep teal wash on sage."
        title="Studio print"
      />

      <CardFooter className="flex-row-reverse gap-2">
        <Button className="flex-1">Buy now</Button>
        <Button className="flex-1" variant="outline">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default Example;
