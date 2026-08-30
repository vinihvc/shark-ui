"use client";

import React from "react";
import {
  SegmentGroup,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const Example = () => {
  const [value, setValue] = React.useState("Profile");
  const [hoverValue, setHoverValue] = React.useState<string | null>(null);

  return (
    <SegmentGroup
      className="rounded-lg"
      onValueChange={(e) => setValue(e.value ?? "Profile")}
      value={hoverValue ?? value}
    >
      {pages.map((page) => (
        <SegmentGroupItem
          className="px-2 py-1.5 text-sm"
          key={page}
          onClick={() => setValue(page)}
          onMouseEnter={() => setHoverValue(page)}
          onMouseLeave={() => setHoverValue(null)}
          value={page}
        >
          <SegmentGroupItemText>{page}</SegmentGroupItemText>
        </SegmentGroupItem>
      ))}
    </SegmentGroup>
  );
};

const pages = ["Profile", "Account", "Security", "Notifications"];

export default Example;
