import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const CollapsibleDemo = () => (
  <Card className="w-96">
    <Collapsible>
      <CardHeader title="Total visits">
        <CardDescription>
          <div className="flex items-center gap-1">
            <Badge variant="success">22.3%</Badge>
            <Badge variant="info">10.1%</Badge>
            <Badge variant="warning">6.8%</Badge>
            <Badge variant="destructive">1.4%</Badge>
          </div>
        </CardDescription>

        <CardAction>
          <CollapsibleTrigger asChild>
            <Button clickEffect={false} size="sm" variant="outline">
              Details
              <CollapsibleIndicator />
            </Button>
          </CollapsibleTrigger>
        </CardAction>
      </CardHeader>

      <CollapsibleContent className="text-sm">
        <div className="mt-(--space) grid gap-3 px-(--space)">
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2 text-muted-foreground">Google</div>
            <div className="place-self-end">
              <Badge variant="success">22.3%</Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2 text-muted-foreground">Facebook</div>
            <div className="place-self-end">
              <Badge variant="destructive">-10.1%</Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2 text-muted-foreground">TikTok</div>
            <div className="place-self-end">
              <Badge variant="warning">6.8%</Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2 text-muted-foreground">Instagram</div>
            <div className="place-self-end">
              <Badge variant="info">1.4%</Badge>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </Card>
);

export default CollapsibleDemo;
