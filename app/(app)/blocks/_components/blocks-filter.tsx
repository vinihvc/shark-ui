"use client";

import { SearchIcon } from "lucide-react";
import { useBlocksSearchInput } from "@/app/(app)/blocks/_lib/blocks-url-state";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

export const BlocksFilter = () => {
  const [q, setQ] = useBlocksSearchInput();

  return (
    <InputGroup size="lg">
      <InputGroupAddon>
        <SearchIcon className="size-4 text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupInput
        onChange={(e) => {
          setQ(e.target.value === "" ? null : e.target.value);
        }}
        placeholder="Search blocks..."
        value={q}
      />
    </InputGroup>
  );
};
