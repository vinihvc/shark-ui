import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardMedia,
} from "@/registry/react/components/card";

const Example = () => (
  <div className="w-full max-w-xs">
    <Card className="overflow-hidden">
      <CardMedia className="aspect-video w-full bg-muted" variant="image">
        {/* Image hoes here */}
      </CardMedia>
      <CardHeader
        description="This sofa is perfect for modern tropical spaces, baroque inspired spaces."
        title="Living room Sofa"
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
