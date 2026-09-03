import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

const StateDemo = () => (
  <State>
    <StateHeader>
      <StateMedia variant="icon">
        <FolderCodeIcon aria-hidden="true" />
      </StateMedia>
      <StateTitle asChild>
        <h2>No Projects Yet</h2>
      </StateTitle>
      <StateDescription>
        You haven&apos;t created any projects yet. Get started by creating your
        first project.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <div className="flex gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </div>
    </StateContent>
    <Button asChild className="text-muted-foreground" size="sm" variant="link">
      <a aria-label="Learn more about creating projects" href="#">
        Learn More <ArrowUpRightIcon aria-hidden="true" />
      </a>
    </Button>
  </State>
);

export default StateDemo;
