"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/react/components/command";

const CommandExample = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
    groupBy: (item) => item.group,
  });

  return (
    <Command
      className="w-full max-w-md"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <CommandInput />
      <CommandContent>
        <CommandEmpty />
        <CommandList>
          {collection.group().map(([group, items]) => (
            <CommandGroup heading={group} key={group}>
              {items.map((item) => (
                <CommandItem item={item} key={item.value}>
                  {item.label}
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
              <CommandSeparator />
            </CommandGroup>
          ))}
        </CommandList>
      </CommandContent>
    </Command>
  );
};

const initialItems = [
  { label: "Linear", shortcut: "⌘L", value: "linear", group: "Suggestions" },
  { label: "Figma", shortcut: "⌘F", value: "figma", group: "Suggestions" },
  { label: "Slack", shortcut: "⌘S", value: "slack", group: "Suggestions" },
  { label: "YouTube", shortcut: "⌘Y", value: "youtube", group: "Suggestions" },
  { label: "Raycast", shortcut: "⌘R", value: "raycast", group: "Suggestions" },
  { label: "Settings", shortcut: "⌘,", value: "settings", group: "Settings" },
  { label: "Help", shortcut: "⌘?", value: "help", group: "Settings" },
  { label: "About", shortcut: "⌘I", value: "about", group: "Settings" },
  { label: "Feedback", shortcut: "⌘F", value: "feedback", group: "Settings" },
  { label: "Support", shortcut: "⌘S", value: "support", group: "Settings" },
  { label: "Updates", shortcut: "⌘U", value: "updates", group: "Settings" },
  { label: "Logout", shortcut: "⌘L", value: "logout", group: "Settings" },
  { label: "Sign out", shortcut: "⌘O", value: "sign out", group: "Settings" },
  { label: "Sign in", shortcut: "⌘I", value: "sign in", group: "Settings" },
];

export default CommandExample;
