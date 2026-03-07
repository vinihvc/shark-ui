"use client";

import type React from "react";
import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const data = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  support: "support@company.com",
  website: "https://example.com",
};

const Example = () => (
  <JsonTreeView
    data={data}
    defaultExpandedDepth={1}
    renderValue={renderValue}
  />
);

const renderValue: React.ComponentProps<typeof JsonTreeView>["renderValue"] = (
  node
) => {
  const value = node?.properties?.value ?? node?.value;
  const str = typeof value === "string" ? value : String(value ?? "");
  if (EMAIL_REGEX.test(str)) {
    return (
      <a
        className="text-primary underline hover:no-underline"
        href={`mailto:${str}`}
      >
        {str}
      </a>
    );
  }
  return undefined;
};

export default Example;
