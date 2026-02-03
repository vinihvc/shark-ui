import Link from "fumadocs-core/link";
import { ArrowUpRightIcon } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
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

const Example = () => (
  <Card className="w-80">
    <CardHeader
      description="We'll help you get started"
      title="Getting started"
    />

    <CardContent>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button className="w-full" variant="outline">
            View details
            <CollapsibleIndicator />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="flex flex-col gap-4 p-2">
          <p className="text-muted-foreground text-sm">
            Here you can find the documentation for all the components and how
            to use them.
          </p>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button className="w-full" size="sm" variant="outline">
                Install dependencies
                <CollapsibleIndicator />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-2 p-2">
              <p className="text-muted-foreground text-sm">
                Copy the following code:
              </p>

              <pre className="relative rounded-md bg-muted p-2 text-muted-foreground text-xs">
                <code>npm install @shark-ui</code>

                <CopyButton
                  className="top-0.5"
                  value="npm install @shark-ui/collapsible"
                />
              </pre>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button className="w-full" size="sm" variant="outline">
                Check the documentation
                <CollapsibleIndicator />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2">
              <p className="text-muted-foreground text-sm">
                You can find the documentation and examples here:{" "}
                <Badge asChild variant="info">
                  <Link
                    className="text-muted-foreground text-sm"
                    href="/docs/components"
                  >
                    Docs <ArrowUpRightIcon />
                  </Link>
                </Badge>
              </p>
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
      </Collapsible>
    </CardContent>
  </Card>
);

export default Example;
