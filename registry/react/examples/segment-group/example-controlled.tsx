"use client";

import React from "react";
import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const Example = () => {
  const [value, setValue] = React.useState<string | null>("Profile");

  return (
    <SegmentGroup
      className="rounded-lg"
      onValueChange={(e) => setValue(e.value)}
      value={value}
    >
      <SegmentGroupIndicator />
      {items.map((item) => (
        <SegmentGroupItem
          className="px-2 py-1.5 text-sm"
          key={item}
          value={item}
        >
          <SegmentGroupItemText>{item}</SegmentGroupItemText>
        </SegmentGroupItem>
      ))}
    </SegmentGroup>
  );
};

const items = ["Profile", "Account", "Security", "Notifications"];

export default Example;
