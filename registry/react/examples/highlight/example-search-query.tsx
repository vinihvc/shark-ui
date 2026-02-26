"use client";

import React from "react";
import { Highlight } from "@/registry/react/components/highlight";
import { Input } from "@/registry/react/components/input";

const searchResults = ["Spotlight bulb", "Spot cleaner", "Spot ceiling"];

const Example = () => {
  const [query, setQuery] = React.useState("spot");

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <Input
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        value={query}
      />
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">
          Search result for: {query || "(empty)"}
        </p>
        <ul className="space-y-1">
          {searchResults.map((item) => (
            <li className="text-base text-foreground" key={item}>
              {query ? (
                <Highlight ignoreCase query={query} text={item} />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Example;
