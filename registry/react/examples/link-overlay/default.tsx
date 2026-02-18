import { Card, CardHeader } from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const LinkOverlayDemo = () => (
  <LinkBox asChild>
    <Card className="max-w-sm">
      <LinkOverlay href="#" />
      <CardHeader
        description="Catch up on whats been cooking at Chakra UI and explore community resources."
        title="Chakra V3 Workshop"
      />
      <a
        className="relative z-10 mt-2 text-primary text-sm hover:underline"
        href="#inner"
      >
        Inner Link
      </a>
    </Card>
  </LinkBox>
);

export default LinkOverlayDemo;
