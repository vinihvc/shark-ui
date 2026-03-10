"use client";

import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
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
  icon: React.ReactNode;
  label: string;
  type: string;
  value: string;
}

const items: CommandItemData[] = [
  {
    label: "Calendar",
    value: "calendar",
    icon: <CalendarIcon />,
    type: "Suggestions",
  },
  {
    label: "Search Emoji",
    value: "search-emoji",
    icon: <SmileIcon />,
    type: "Suggestions",
  },
  {
    label: "Calculator",
    value: "calculator",
    icon: <CalculatorIcon />,
    type: "Suggestions",
  },
  {
    label: "Profile",
    value: "profile",
    icon: <UserIcon />,
    type: "Settings",
  },
  {
    label: "Billing",
    value: "billing",
    icon: <CreditCardIcon />,
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
