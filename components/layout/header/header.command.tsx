"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Component } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import type { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandControl,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/registry/react/components/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

interface PageItem {
  value: string;
  label: string;
  url: string;
  isComponent: boolean;
  keywords?: string[];
}

interface PageGroup {
  value: string;
  items: PageItem[];
}

interface HeaderCommandProps extends React.ComponentProps<typeof Dialog> {
  /**
   * The tree of pages
   */
  tree: typeof source.pageTree;
}

export const HeaderCommand = (props: HeaderCommandProps) => {
  const { tree, ...rest } = props;

  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);

  const { contains } = useFilter({ sensitivity: "base" });

  const components = React.useMemo<PageGroup[]>(() => {
    const groups: PageGroup[] = [];

    for (const group of tree.children) {
      if (group.type === "folder") {
        const items: PageItem[] = [];
        for (const item of group.children) {
          if (item.type === "page") {
            const isComponent = item.url.includes("/components/");
            const itemName = item.name?.toString() || "";
            items.push({
              isComponent,
              keywords: isComponent ? ["component"] : undefined,
              label: itemName,
              url: item.url,
              value: itemName ? `${group.name} ${itemName}` : "",
            });
          }
        }
        if (items.length > 0) {
          groups.push({
            items,
            value:
              typeof group.name === "string" ? group.name : String(group.name),
          });
        }
      }
    }

    return groups;
  }, [tree]);

  const { collection, filter } = useListCollection<PageItem>({
    initialItems: components.flatMap((group) => group.items),
    filter: contains,
  });

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
    <Dialog
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
      trapFocus={false}
      {...rest}
    >
      <DialogTrigger asChild>
        <Button
          className={cn(
            "justify-start",
            "h-8 w-full md:w-48 lg:w-56 xl:w-64",
            "pl-3 sm:pr-12",
            "font-normal",
            "shadow-none"
          )}
          clickEffect={false}
          variant="outline"
          {...props}
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <div className="absolute top-1.5 right-1.5 hidden sm:flex">
            <KbdGroup>
              <Kbd className="border">⌘</Kbd>
              <Kbd className="border">K</Kbd>
            </KbdGroup>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="border-none" showCloseButton={false}>
        <DialogHeader className="sr-only">
          <DialogTitle>Search documentation...</DialogTitle>
          <DialogDescription>Search for a command to run...</DialogDescription>
        </DialogHeader>

        <Command
          className="rounded-md border"
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onSelect={({ itemValue }) => {
            router.push(`/docs/components/${itemValue}`);
            setIsOpen(false);
          }}
          placeholder="Search documentation..."
        >
          <CommandControl>
            <CommandInput />
          </CommandControl>

          <CommandContent>
            <CommandEmpty />

            <CommandGroup heading="Components">
              {collection.items.map((item) => (
                <CommandItem
                  className="border border-transparent data-highlighted:border-input"
                  item={item}
                  key={item.value}
                >
                  <Component />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandContent>
        </Command>
      </DialogContent>
    </Dialog>
  );
};
