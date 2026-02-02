import { ExternalLink } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <Item asChild variant="muted">
      <a href="/docs">
        <ItemContent>
          <ItemTitle>Visit our documentation</ItemTitle>
          <ItemDescription>
            Learn how to get started with our components.
          </ItemDescription>
        </ItemContent>
      </a>
    </Item>
    <Item asChild variant="outline">
      <a
        href="https://vini.one/twitter"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ItemContent>
          <ItemTitle>External resource</ItemTitle>
          <ItemDescription>
            Opens in a new tab with security attributes.
          </ItemDescription>
        </ItemContent>
        <ExternalLink />
      </a>
    </Item>
  </div>
);

export default Example;
