"use client";

import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/react/components/input-group";

const timezoneGroups = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
] as const;

interface TimezoneItem {
  label: string;
  value: string;
  group: string;
}

const items: TimezoneItem[] = timezoneGroups.flatMap((group) =>
  group.items.map((item) => ({
    label: item,
    value: item,
    group: group.value,
  }))
);

const ComboboxGroupDemo = () => {
  return (
    <Combobox
      className="w-64"
      groupBy={(item) => item.group}
      items={items}
      itemToString={(item) => item.label}
      itemToValue={(item) => item.value}
    >
      <ComboboxControl asChild>
        <InputGroup>
          <InputGroupAddon>
            <Globe className="size-4" />
          </InputGroupAddon>
          <ComboboxInput
            className={cn(
              "flex-1 rounded-none border-0 bg-transparent shadow-none",
              "focus-visible:ring-0 dark:bg-transparent"
            )}
            placeholder="Select a timezone"
          />
        </InputGroup>
      </ComboboxControl>
      <ComboboxContent className="w-60">
        <ComboboxList<TimezoneItem>>
          {(item) => (
            <ComboboxItem item={item} key={item.value}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default ComboboxGroupDemo;
