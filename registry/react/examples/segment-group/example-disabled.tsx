"use client";

import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const Example = () => (
  <SegmentGroup defaultValue="Profile" disabled>
    <SegmentGroupIndicator />
    {items.map((item) => (
      <SegmentGroupItem key={item} value={item}>
        <SegmentGroupItemText>{item}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
  </SegmentGroup>
);

const items = ["Profile", "Account", "Security", "Notifications"];

export default Example;
