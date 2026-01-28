import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const Example = () => (
  <div className="w-64">
    <Collapsible disabled>
      <CollapsibleTrigger asChild>
        <Button className="w-full" variant="outline">
          Disabled Collapsible
          <CollapsibleIndicator />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2">
        <p className="text-muted-foreground text-sm">
          This content cannot be accessed because the collapsible is disabled.
        </p>
      </CollapsibleContent>
    </Collapsible>
  </div>
);

export default Example;
