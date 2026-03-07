import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const LinkOverlayDemo = () => (
  <LinkBox asChild>
    <Card className="w-full max-w-xs">
      <CardMedia className="aspect-video w-full bg-muted" variant="image" />
      <CardHeader description="This sofa is perfect for modern tropical spaces, baroque inspired spaces.">
        <LinkOverlay asChild>
          <CardTitle asChild>
            <a href="#">Living room Sofa</a>
          </CardTitle>
        </LinkOverlay>
      </CardHeader>
      <CardFooter className="flex-row-reverse gap-2">
        <Button className="flex-1">Buy now</Button>
        <Button className="flex-1" variant="outline">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  </LinkBox>
);

export default LinkOverlayDemo;
