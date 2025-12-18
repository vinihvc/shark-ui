"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Component } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import type { source } from "@/lib/source";
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
import { slugify } from "@/utils/formatter";

type CommandMenuItem = {
  label: string;
  value: string;
};

interface CommandMenuProps extends React.ComponentProps<typeof Dialog> {
  /**
   * The tree of pages
   */
  tree: typeof source.pageTree;
}

export const CommandMenu = (props: CommandMenuProps) => {
  const { tree, ...rest } = props;

  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);

  const { contains } = useFilter({ sensitivity: "base" });

  const components = tree.children
    .filter((group) => group.type === "folder")[0]
    .children.map((item) => ({
      label: item.name as string,
      value: slugify(item.name as string),
    }));

  const { collection, filter } = useListCollection<CommandMenuItem>({
    initialItems: components,
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
            "relative",
            "border",
            "justify-start",
            "h-8 w-full md:w-48 lg:w-56 xl:w-64",
            "pl-3 sm:pr-12",
            "font-normal",
            "shadow-none"
          )}
          variant="secondary"
          {...props}
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <div className="absolute top-1.5 right-1.5 hidden sm:flex">
            <KbdGroup spacing={0.5}>
              <Kbd className="border">⌘</Kbd>
              <Kbd className="border">K</Kbd>
            </KbdGroup>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent
        className="rounded-xl bg-clip-padding shadow-2xl"
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search documentation...</DialogTitle>
          <DialogDescription>Search for a command to run...</DialogDescription>
        </DialogHeader>

        <Command
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
