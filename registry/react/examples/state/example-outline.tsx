import { CloudIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

const Example = () => (
  <State className="border border-dashed">
    <StateHeader>
      <StateMedia variant="icon">
        <CloudIcon aria-hidden="true" />
      </StateMedia>
      <StateTitle asChild>
        <h2>Cloud Storage Empty</h2>
      </StateTitle>
      <StateDescription>
        Upload files to your cloud storage to access them anywhere.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <Button size="sm" variant="outline">
        Upload Files
      </Button>
    </StateContent>
  </State>
);

export default Example;
