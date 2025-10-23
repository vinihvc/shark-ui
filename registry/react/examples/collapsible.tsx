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
            <span>56,4%</span>
            <Badge variant="secondary">+14,2%</Badge>
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
        <div className="mt-(--card-spacing) grid gap-2 px-(--card-spacing)">
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2">Google</div>
            <div className="text-right text-muted-foreground">22.3%</div>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2">Facebook</div>
            <div className="text-right text-muted-foreground">18.7%</div>
          </div>

          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2">Instagram</div>
            <div className="text-right text-muted-foreground">15.4%</div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </Card>
);

export default CollapsibleDemo;
