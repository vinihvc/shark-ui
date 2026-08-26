"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRightIcon,
  BlocksIcon,
  CheckIcon,
  CircleDashed,
  CircleDotDashed,
  CornerDownLeftIcon,
  SparklesIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { DOCS_NEW_ITEMS, DOCS_UPDATED_ITEMS } from "@/config/docs-nav";
import type { NavItem } from "@/config/navigation";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import type { CommandCompositionItem } from "@/lib/command-composition-items";
import type { source } from "@/lib/fumadocs";
import { formatShadcnCommandDisplay } from "@/lib/shadcn-command";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
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
import {
  useFormatHotkey,
  useHotkey,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";
import { useConfig } from "@/store/config";

interface PageItem {
  group: string;
  installName?: string;
  isComponent: boolean;
  keywords?: string;
  label: string;
  url: string;
  value: string;
}

const GROUP_ICON_MAP: Record<string, LucideIcon> = {
  "ai elements": SparklesIcon,
  blocks: BlocksIcon,
  components: CircleDashed,
  sections: ArrowRightIcon,
  utilities: CircleDotDashed,
};

const DEFAULT_GROUP_ICON = ArrowRightIcon;

const isFormFieldFocused = () => {
  const target = document.activeElement;

  return (
    (target instanceof HTMLElement && target.isContentEditable) ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
};

interface HeaderCommandProps
  extends React.ComponentProps<typeof CommandDialog> {
  /**
   * Blocks indexed for search
   */
  compositionItems: CommandCompositionItem[];
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
  const { compositionItems, navItems, tree, ...rest } = props;

  const router = useRouter();

  const formatHotkey = useFormatHotkey();
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
            const isComponent =
              ["/components/", "/ai-elements/", "/utilities/", "/hooks/"].some(
                (path) => item.url.includes(path)
              ) ?? false;
            const itemName = item.name?.toString() || "";

            allItems.push({
              group:
                typeof group.name === "string"
                  ? group.name
                  : String(group.name),
              isComponent,
              label: itemName,
              url: item.url,
              value: item.url,
            });
          }
        }
      }
    }

    for (const item of compositionItems) {
      allItems.push(item);
    }

    return allItems;
  }, [compositionItems, navItems, tree]);

  const filterItems = React.useCallback(
    (_itemText: string, inputValue: string, item: PageItem) =>
      contains(
        [item.label, item.keywords ?? "", item.url].join(" "),
        inputValue
      ),
    [contains]
  );

  const { collection, filter } = useListCollection({
    filter: filterItems,
    groupBy: (item) => item.group,
    initialItems: groupedItems,
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
      const componentName =
        item.installName ?? item.url.split("/").at(-1)?.split("?")[0] ?? "";
      const addCmd = getAddCommand(packageManager);
      setCopyPayload(`${addCmd} @shark/${componentName}`);
    },
    [groupedItems, packageManager]
  );

  const toggleOpen = React.useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  useHotkey({
    action: toggleOpen,
    enabled: () => !isFormFieldFocused(),
    hotkey: "mod+K",
    options: { preventDefault: true },
  });

  useHotkey({
    action: toggleOpen,
    hotkey: "/",
    options: { preventDefault: true },
  });

  useHotkey({
    action: () => copyToClipboard(copyPayload),
    enabled: () => isOpen && Boolean(copyPayload),
    hotkey: "mod+C",
    options: { preventDefault: true },
  });

  return (
    <CommandDialog
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
      {...rest}
    >
      <CommandDialogTrigger asChild>
        <Button
          className={cn(
            "justify-between",
            "bg-white dark:bg-input/48",
            "h-8 w-full md:w-48 lg:w-40"
          )}
          clickEffect={false}
          variant="outline"
        >
          <span className="inline-flex">Search...</span>
          <Kbd variant="outline">{formatHotkey("mod+K")}</Kbd>
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
          placeholder="Search docs, blocks…"
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
                        {DOCS_UPDATED_ITEMS.includes(item.url) && (
                          <Badge className="ms-auto" variant="outline">
                            Updated
                          </Badge>
                        )}
                        {DOCS_NEW_ITEMS.includes(item.url) && (
                          <Badge className="ms-auto" variant="info">
                            New
                          </Badge>
                        )}
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
                  <span className="truncate font-mono">
                    {formatShadcnCommandDisplay(copyPayload)}
                  </span>
                  <Kbd variant="outline">{formatHotkey("mod+C")}</Kbd>
                </div>
              ))}
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};
