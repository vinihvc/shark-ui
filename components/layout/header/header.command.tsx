"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { AtomIcon, BookOpenIcon, CornerDownLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
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

const MAC_PLATFORM_REGEX = /Mac|iPod|iPhone|iPad/;

interface PageItem {
  group: string;
  isComponent: boolean;
  keywords?: string[];
  label: string;
  url: string;
  value: string;
}

const getPageItemsFromFolder = (
  group: (typeof source.pageTree)["children"][number]
): PageItem[] => {
  if (group.type !== "folder") {
    return [];
  }
  const groupName =
    typeof group.name === "string" ? group.name : String(group.name);
  const items: PageItem[] = [];
  for (const item of group.children) {
    if (item.type !== "page") {
      continue;
    }
    const isComponent = item.url.includes("/components/");
    const itemName = item.name?.toString() ?? "";
    items.push({
      group: groupName,
      isComponent,
      keywords: isComponent ? ["component"] : undefined,
      label: itemName,
      url: item.url,
      value: itemName ? `${groupName} ${itemName}` : "",
    });
  }
  return items;
};

const buildInitialItems = (
  tree: typeof source.pageTree,
  navItems?: { href: string; label: string }[]
): PageItem[] => {
  const items: PageItem[] = [];

  if (navItems && navItems.length > 0) {
    for (const item of navItems) {
      items.push({
        group: "Pages",
        isComponent: false,
        keywords: ["nav", "navigation", item.label.toLowerCase()],
        label: item.label,
        url: item.href,
        value: `Navigation ${item.label}`,
      });
    }
  }

  for (const group of tree.children) {
    if (group.type !== "folder") {
      continue;
    }
    const groupItems = getPageItemsFromFolder(group);
    items.push(...groupItems);
  }

  return items;
};

interface HeaderCommandProps
  extends React.ComponentProps<typeof CommandDialog> {
  /**
   * The navigation items to display in the command menu
   *
   * @default []
   */
  navItems?: { href: string; label: string }[];
  /**
   * The tree of pages to display in the command menu
   *
   * @default source.pageTree
   */
  tree: typeof source.pageTree;
}

export const HeaderCommand = (props: HeaderCommandProps) => {
  const { tree, navItems, ...rest } = props;

  const router = useRouter();
  const [config] = useConfig();
  const isMac =
    typeof navigator !== "undefined" &&
    MAC_PLATFORM_REGEX.test(navigator.platform);
  const [open, setOpen] = React.useState(false);
  const [copyPayload, setCopyPayload] = React.useState("");
  const packageManager = config.packageManager ?? "pnpm";

  const { contains } = useFilter({ sensitivity: "base" });
  const initialItems = React.useMemo(
    () => buildInitialItems(tree, navItems),
    [tree, navItems]
  );
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => (item as PageItem).group,
    initialItems,
    itemToString: (item) => {
      const pageItem = item as PageItem;
      const keywordStr = pageItem.keywords?.join(" ") ?? "";
      return `${pageItem.label} ${keywordStr}`.trim();
    },
  });

  const valueToItem = React.useMemo(() => {
    const map = new Map<string, PageItem>();
    for (const item of initialItems) {
      map.set(item.value, item);
    }
    return map;
  }, [initialItems]);

  const copyToClipboard = React.useCallback((text: string) => {
    navigator.clipboard.writeText(text).catch(() => {
      /* clipboard unavailable */
    });
  }, []);

  const handlePageHighlight = React.useCallback(
    (item: PageItem) => {
      if (item.isComponent) {
        const componentName = item.url.split("/").pop();
        const registryItem = `@shark/${componentName}`;
        let cmd: string;
        switch (packageManager) {
          case "pnpm":
            cmd = `pnpm dlx shadcn@latest add ${registryItem}`;
            break;
          case "bun":
            cmd = `bunx --bun shadcn@latest add ${registryItem}`;
            break;
          case "yarn":
            cmd = `yarn dlx shadcn@latest add ${registryItem}`;
            break;
          default:
            cmd = `npx shadcn@latest add ${registryItem}`;
        }

        setCopyPayload(cmd);
      } else {
        setCopyPayload("");
      }
    },
    [packageManager]
  );

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isEditable =
        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement;

      if (
        ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") &&
        !isEditable
      ) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "c" && (e.metaKey || e.ctrlKey) && copyPayload) {
        copyToClipboard(copyPayload);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [copyPayload, copyToClipboard]);

  return (
    <CommandDialog
      onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
      open={open}
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
          {...props}
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
      <CommandDialogContent showCloseButton={false}>
        <Command
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={(e) => {
            const val = e.value?.at(0);
            if (val) {
              const item = valueToItem.get(val);
              if (item?.url) {
                const href = item.url.startsWith("/")
                  ? item.url
                  : `/${item.url}`;
                router.push(href as Parameters<typeof router.push>[0]);
              }
              setOpen(false);
            }
          }}
          placeholder="Search documentation…"
        >
          <CommandInput />
          <CommandContent>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {collection.group().map(([groupName, groupItems]) => (
                <CommandGroup heading={groupName} key={groupName}>
                  {groupItems.map((item) => {
                    const pageItem = item as PageItem;
                    return (
                      <CommandItem
                        className="flex w-full items-center"
                        item={item}
                        key={pageItem.value}
                        onFocus={() => handlePageHighlight(pageItem)}
                      >
                        {pageItem.isComponent ? (
                          <AtomIcon
                            aria-hidden
                            className="mr-2 h-4 w-4 opacity-80"
                            strokeWidth={2}
                          />
                        ) : (
                          <BookOpenIcon
                            aria-hidden
                            className="mr-2 h-4 w-4 opacity-80"
                            strokeWidth={2}
                          />
                        )}
                        <span className="flex-1">{pageItem.label}</span>
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
                <CornerDownLeftIcon />
              </Kbd>
              <span className="whitespace-nowrap">Go to Page</span>
            </div>
            {copyPayload ? (
              <div className="flex min-w-0 items-center gap-2">
                <span className="truncate font-mono">{copyPayload}</span>
                <KbdGroup>
                  <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
                  <Kbd>C</Kbd>
                </KbdGroup>
              </div>
            ) : null}
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};
