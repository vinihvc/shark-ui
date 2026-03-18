"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRightIcon,
  CheckIcon,
  CircleDashed,
  CircleDotDashed,
  CornerDownLeftIcon,
} from "lucide-react";

import { useRouter } from "next/navigation";
import React from "react";
import type { NavItem } from "@/config/navigation";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useIsMac } from "@/hooks/use-is-mac";
import type { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/react/components/command";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import { useConfig } from "@/store/config";

interface PageItem {
  group: string;
  isComponent: boolean;
  label: string;
  url: string;
  value: string;
}

const GROUP_ICON_MAP: Record<string, LucideIcon> = {
  sections: ArrowRightIcon,
  components: CircleDashed,
  utilities: CircleDotDashed,
};

const DEFAULT_GROUP_ICON = ArrowRightIcon;

interface HeaderCommandProps
  extends React.ComponentProps<typeof CommandDialog> {
  /**
   * The navigation items to display in the command menu
   */
  navItems: NavItem[];
  /**
   * The tree of pages to display in the command menu
   *
   * @default source.pageTree
   */
  tree: typeof source.pageTree;
}

const getAddCommand = (packageManager: string) => {
  switch (packageManager) {
    case "pnpm":
      return "pnpm dlx shadcn@latest add";
    case "bun":
      return "bunx --bun shadcn@latest add";
    case "yarn":
      return "yarn dlx shadcn@latest add";
    default:
      return "npx shadcn@latest add";
  }
};

export const HeaderCommand = (props: HeaderCommandProps) => {
  const { navItems, tree, ...rest } = props;

  const router = useRouter();
  const isMac = useIsMac();
  const [{ packageManager }] = useConfig();
  const { copyToClipboard, isCopied } = useCopyToClipboard({ timeout: 400 });

  const [isOpen, setIsOpen] = React.useState(false);
  const [copyPayload, setCopyPayload] = React.useState("");

  const { contains } = useFilter({ sensitivity: "base" });

  React.useEffect(() => {
    if (!isOpen) {
      setCopyPayload("");
    }
  }, [isOpen]);

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: it's a simple grouping of items
  const groupedItems = React.useMemo<PageItem[]>(() => {
    const allItems: PageItem[] = [];

    for (const navItem of navItems) {
      allItems.push({
        group: "Sections",
        isComponent: false,
        label: navItem.label,
        url: navItem.href,
        value: navItem.href,
      });
    }

    for (const group of tree.children) {
      if (group.type === "folder") {
        for (const item of group.children) {
          if (item.type === "page") {
            const isComponent = item.url.includes("/components/");
            const itemName = item.name?.toString() || "";

            allItems.push({
              isComponent,
              label: itemName,
              url: item.url,
              value: item.url,
              group:
                typeof group.name === "string"
                  ? group.name
                  : String(group.name),
            });
          }
        }
      }
    }

    return allItems;
  }, [navItems, tree]);

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: groupedItems,
    groupBy: (item) => item.group,
  });

  const handleHighlightChange = React.useCallback(
    (details: { highlightedValue: string | null }) => {
      if (!details.highlightedValue) {
        setCopyPayload("");
        return;
      }
      const item = groupedItems.find((i) => i.url === details.highlightedValue);
      if (!item?.isComponent) {
        setCopyPayload("");
        return;
      }
      const componentName = item.url.split("/").at(-1) ?? "";
      const addCmd = getAddCommand(packageManager);
      setCopyPayload(`${addCmd} @shark/${componentName}`);
    },
    [groupedItems, packageManager]
  );

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setIsOpen((open) => !open);
      }

      if (e.key === "c" && (e.metaKey || e.ctrlKey) && isOpen && copyPayload) {
        e.preventDefault();
        copyToClipboard(copyPayload);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [copyPayload, copyToClipboard, isOpen]);

  return (
    <CommandDialog
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
      {...rest}
    >
      <CommandDialogTrigger asChild>
        <Button
          className={cn(
            "justify-start",
            "h-8 w-full shadow-none md:w-48 lg:w-40"
          )}
          clickEffect={false}
          variant="outline"
        >
          <span className="inline-flex">Search...</span>
          <div className="absolute top-1.5 right-1.5 hidden sm:flex">
            <KbdGroup>
              <Kbd variant="outline">⌘</Kbd>
              <Kbd variant="outline">K</Kbd>
            </KbdGroup>
          </div>
        </Button>
      </CommandDialogTrigger>
      <CommandDialogContent>
        <Command
          collection={collection}
          onHighlightChange={handleHighlightChange}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={(e) => {
            router.push(e.items[0].url);
            requestAnimationFrame(() => {
              setIsOpen(false);
            });
          }}
          placeholder="Search documentation…"
        >
          <CommandInput />
          <CommandContent>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {collection.group().map(([group, items]) => (
                <CommandGroup heading={group} key={group}>
                  {items.map((item) => {
                    const ItemIcon =
                      GROUP_ICON_MAP[item.group.toLowerCase()] ??
                      DEFAULT_GROUP_ICON;
                    return (
                      <CommandItem item={item} key={item.value}>
                        <ItemIcon />
                        {item.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandContent>
          <CommandFooter>
            <div className="flex items-center gap-2">
              <Kbd variant="outline">
                <CornerDownLeftIcon className="size-3" />
              </Kbd>
              <span className="whitespace-nowrap">Go to Page</span>
            </div>
            {copyPayload &&
              (isCopied ? (
                <div className="flex items-center gap-2">
                  <CheckIcon className="size-3" />
                  <span className="whitespace-nowrap">Copied to clipboard</span>
                </div>
              ) : (
                <div className="flex min-w-0 items-center gap-2">
                  <span className="truncate font-mono">{copyPayload}</span>
                  <KbdGroup>
                    <Kbd variant="outline">{isMac ? "⌘" : "Ctrl"}</Kbd>
                    <Kbd variant="outline">C</Kbd>
                  </KbdGroup>
                </div>
              ))}
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};
