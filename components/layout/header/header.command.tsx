"use client";

import { ComponentIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import type { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  type CommandGroupValue,
  CommandInput,
  CommandItem,
  type CommandItemValue,
  CommandList,
  CommandPanel,
} from "@/registry/react/components/command";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/react/components/dialog";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import { slugify } from "@/utils/formatter";

interface PageItem extends CommandItemValue {
  isComponent: boolean;
  keywords?: string[];
  url: string;
}

interface PageGroup extends CommandGroupValue {
  items: PageItem[];
}

interface HeaderCommandProps
  extends React.ComponentProps<typeof CommandDialog> {
  /**
   * The tree of pages
   */
  tree: typeof source.pageTree;
}

export const HeaderCommand = (props: HeaderCommandProps) => {
  const { tree, ...rest } = props;

  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);

  const components = React.useMemo<PageGroup[]>(() => {
    const groups: PageGroup[] = [];

    for (const group of tree.children) {
      const groupName =
        typeof group.name === "string" ? group.name : String(group.name);

      if (group.type === "folder") {
        const items: PageItem[] = [];

        for (const item of group.children) {
          if (item.type === "page") {
            const isComponent = item.url.includes("/components/");
            const itemName = item.name?.toString() || "";
            const itemNameLower = itemName.toLowerCase();
            items.push({
              isComponent,
              keywords: isComponent ? ["component"] : undefined,
              label: itemName,
              url: item.url,
              value: itemName
                ? `${slugify(groupName)}/${slugify(itemNameLower)}`
                : "",
            });
          }
        }

        if (items.length > 0) {
          groups.push({
            items,
            value: slugify(groupName),
          });
        }
      }
    }

    return groups;
  }, [tree]);

  const valueToUrl = React.useMemo(() => {
    const map = new Map<string, string>();
    for (const group of components) {
      for (const item of group.items) {
        map.set(item.value, item.url);
      }
    }
    return map;
  }, [components]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" && e.metaKey) || (e.key === "k" && e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <CommandDialog
      onOpenChange={(e) => setIsOpen(e.open)}
      open={isOpen}
      trapFocus={false}
      {...rest}
    >
      <CommandDialogTrigger asChild>
        <Button
          className={cn(
            "justify-start",
            "h-8 w-full md:w-48 lg:w-40",
            "pl-3 sm:pr-12",
            "font-normal",
            "shadow-none"
          )}
          clickEffect={false}
          variant="outline"
        >
          <span className="inline-flex">Search...</span>
          <div className="absolute top-1.5 right-1.5 hidden sm:flex">
            <KbdGroup>
              <Kbd className="border">⌘</Kbd>
              <Kbd className="border">K</Kbd>
            </KbdGroup>
          </div>
        </Button>
      </CommandDialogTrigger>

      <CommandDialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>Search documentation...</DialogTitle>
          <DialogDescription>Search for a command to run...</DialogDescription>
        </DialogHeader>
        <Command
          className="rounded-md border"
          items={components}
          onValueChange={(e) => {
            const val = Array.isArray(e.value) ? e.value[0] : e.value;
            if (val) {
              const url = valueToUrl.get(val);
              if (url) {
                router.push(url.startsWith("/") ? url : `/${url}`);
              }
              setIsOpen(false);
            }
          }}
        >
          <CommandInput placeholder="Search documentation..." />
          <CommandPanel>
            <CommandEmpty />
            <CommandList>
              {(group: CommandGroupValue) => (
                <CommandGroup key={group.value}>
                  <CommandGroupLabel>{group.value}</CommandGroupLabel>
                  <CommandCollection items={group.items}>
                    {(item: CommandItemValue) => (
                      <CommandItem
                        className="border border-transparent data-highlighted:border-input"
                        item={item}
                        key={item.value}
                      >
                        <ComponentIcon aria-hidden />
                        {item.label}
                      </CommandItem>
                    )}
                  </CommandCollection>
                </CommandGroup>
              )}
            </CommandList>
          </CommandPanel>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};
