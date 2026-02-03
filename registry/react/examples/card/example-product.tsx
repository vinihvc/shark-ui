import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
} from "@/registry/react/components/card";

const Example = () => (
  <div className="w-full max-w-sm">
    <Card className="overflow-hidden">
      <CardMedia className="h-32 w-full bg-muted" variant="image">
        {/* Image hoes here */}
      </CardMedia>
      <CardHeader
        description="This sofa is perfect for modern tropical spaces, baroque inspired spaces."
        title="Living room Sofa"
      />
      <CardContent>
        <p className="font-semibold text-2xl">$450</p>
      </CardContent>

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
