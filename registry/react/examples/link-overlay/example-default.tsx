import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const LinkOverlayDemo = () => (
  <LinkBox asChild>
    <Card className="w-full max-w-xs">
      <CardMedia className="h-32 bg-muted" variant="image" />
      <CardHeader description="This sofa is perfect for modern tropical spaces, baroque inspired spaces.">
        <CardTitle asChild>
          <h2>
            <LinkOverlay href="#">Living room Sofa</LinkOverlay>
          </h2>
        </CardTitle>
      </CardHeader>
    </Card>
  </LinkBox>
);

export default LinkOverlayDemo;
