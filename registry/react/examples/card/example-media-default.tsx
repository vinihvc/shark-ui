import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@/registry/react/components/card";

const Example = () => (
  <div className="w-full max-w-xs">
    <Card>
      <CardMedia>
        <Badge variant="secondary">New</Badge>
        <span className="text-muted-foreground text-sm">
          Updated 2 days ago
        </span>
      </CardMedia>
      <CardHeader
        description="Keep track of changes shared with your team."
        title="Project updates"
      />
      <CardContent className="text-muted-foreground text-sm">
        Three new updates are ready for review.
      </CardContent>
    </Card>
  </div>
);

export default Example;
