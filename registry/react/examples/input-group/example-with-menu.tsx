"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const options = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
];

const Example = () => {
  const [value, setValue] = useState("");

  return (
    <InputGroup className="max-w-64">
      <InputGroupInput
        onChange={(e) => setValue(e.target.value)}
        placeholder="Select country..."
        value={value}
      />
      <InputGroupAddon align="inline-end">
        <Menu
          onSelect={(details) =>
            setValue(
              options.find((o) => o.value === details.value)?.label ??
                details.value
            )
          }
          positioning={{ placement: "bottom-end" }}
        >
          <MenuTrigger asChild>
            <InputGroupButton
              aria-label="Open menu"
              size="icon-xs"
              variant="ghost"
            >
              <ChevronDownIcon aria-hidden />
            </InputGroupButton>
          </MenuTrigger>
          <MenuContent className="w-48">
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Example;
