"use client";

import { useListCollection } from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import { Calculator, Calendar, CreditCard, Smile, User } from "lucide-react";
import {
  Command,
  CommandContent,
  CommandControl,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../components/command";

const CommandDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: [
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
        disabled: true,
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
    ],
    filter: contains,
    groupBy: (item) => item.type,
  });

  const handleInputChange = (details: { inputValue: string }) => {
    filter(details.inputValue);
  };

  return (
    <Command
      collection={collection}
      onInputValueChange={handleInputChange}
      placeholder="Type a command or search"
    >
      <CommandControl>
        <CommandInput />
      </CommandControl>

      <CommandContent>
        <CommandEmpty />

        {collection.group().map(([type, group]) => (
          <CommandGroup heading={type} key={type}>
            {group.map((item) => (
              <CommandItem item={item} key={item.value}>
                {item.icon}
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandContent>
    </Command>
  );
};

export default CommandDemo;
