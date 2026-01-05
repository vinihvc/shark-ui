import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
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
      <div className="flex items-center justify-between gap-2">
        <CardHeader title="Total visits">
          <div className="flex items-center gap-2">
            <span className="text-xs">56,4%</span>
            <Badge variant="success">+14,2%</Badge>
          </div>
        </CardHeader>

        <CardContent className="flex items-center gap-2">
          <CollapsibleTrigger asChild>
            <Button size="sm" variant="outline">
              Details
              <CollapsibleIndicator />
            </Button>
          </CollapsibleTrigger>
        </CardContent>
      </div>

      <CollapsibleContent className="text-sm">
        <div className="mt-(--gap) grid gap-2 px-(--gap)">
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2">Google</div>
            <div className="text-right text-muted-foreground">
              <Badge variant="success">22.3%</Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2">Facebook</div>
            <div className="text-right text-muted-foreground">
              <Badge variant="destructive">-10.1%</Badge>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2">Instagram</div>
            <div className="text-right text-muted-foreground">
              <Badge variant="info">1.4%</Badge>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </Card>
);

export default CollapsibleDemo;
