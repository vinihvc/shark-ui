"use client";

import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const CustomIndicatorDemo = () => (
  <SegmentGroup className="rounded-lg" defaultValue="Profile">
    <SegmentGroupIndicator className="bg-primary/20 dark:bg-primary/40" />
    {items.map((item) => (
      <SegmentGroupItem
        className="px-2 py-1.5 text-sm"
        disabled={item === "Security"}
        key={item}
        value={item}
      >
        <SegmentGroupItemText>{item}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
  </SegmentGroup>
);

const items = ["Profile", "Account", "Security", "Notifications"];

export default CustomIndicatorDemo;
