"use client";

import { Calculator, Calendar, CreditCard, Smile, User } from "lucide-react";
import { ComboboxList } from "@/registry/react/components/combobox";
import {
  Command,
  CommandContent,
  CommandControl,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from "@/registry/react/components/command";

interface CommandItemData {
  label: string;
  value: string;
  icon: React.ReactNode;
  type: string;
}

const items: CommandItemData[] = [
  {
    label: "Calendar",
    value: "calendar",
    icon: <Calendar />,
    type: "Suggestions",
  },
  {
    label: "Search Emoji",
    value: "search-emoji",
    icon: <Smile />,
    type: "Suggestions",
  },
  {
    label: "Calculator",
    value: "calculator",
    icon: <Calculator />,
    type: "Suggestions",
  },
  {
    label: "Profile",
    value: "profile",
    icon: <User />,
    type: "Settings",
  },
  {
    label: "Billing",
    value: "billing",
    icon: <CreditCard />,
    type: "Settings",
  },
];

const CommandDemo = () => {
  return (
    <div className="rounded-md border">
      <Command
        groupBy={(item) => item.type}
        items={items}
        placeholder="Type a command or search"
      >
        <CommandControl>
          <CommandInput />
        </CommandControl>

        <CommandContent>
          <CommandEmpty />
          <ComboboxList<CommandItemData>>
            {(item) => (
              <CommandItem item={item} key={item.value}>
                {item.icon}
                {item.label}
              </CommandItem>
            )}
          </ComboboxList>
        </CommandContent>
      </Command>
    </div>
  );
};

export default CommandDemo;
