"use client";

import { useState } from "react";
import { SegmentGroup } from "@/registry/react/components/segment-group";

const frameworks = ["React", "Solid", "Svelte", "Vue"];

const SegmentGroupControlledDemo = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <SegmentGroup.Root onValueChange={(e) => setValue(e.value)} value={value}>
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item key={framework} value={framework}>
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
};

export default SegmentGroupControlledDemo;
