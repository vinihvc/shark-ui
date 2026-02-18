"use client";

import React from "react";
import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const frameworks = ["React", "Solid", "Svelte", "Vue"];

const Example = () => {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <SegmentGroup onValueChange={(e) => setValue(e.value)} value={value}>
      <SegmentGroupIndicator />
      {frameworks.map((framework) => (
        <SegmentGroupItem key={framework} value={framework}>
          <SegmentGroupItemText>{framework}</SegmentGroupItemText>
        </SegmentGroupItem>
      ))}
    </SegmentGroup>
  );
};

export default Example;
