import React from "react";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { Separator } from "@/registry/react/components/separator";

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);

const ScrollAreaDemo = () => (
  <ScrollArea className="h-64 w-48 rounded-md border">
    <div className="p-4">
      <h4 className="mb-4 font-medium text-sm leading-none">Tags</h4>
      {tags.map((tag) => (
        <React.Fragment key={tag}>
          <div className="text-sm">{tag}</div>
          <Separator className="my-2" />
        </React.Fragment>
      ))}
    </div>
  </ScrollArea>
);

export default ScrollAreaDemo;
