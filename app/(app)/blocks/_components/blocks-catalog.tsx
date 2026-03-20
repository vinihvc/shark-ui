"use client";

import { SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/registry/react/components/sheet";
import { Spinner } from "@/registry/react/components/spinner";
import type { Block } from "../_data/blocks-data";
import { BlockCard } from "./block-card";

export interface BlocksCatalogProps {
  blocks: Block[];
}

export const BlocksCatalog = (props: BlocksCatalogProps) => {
  const { blocks } = props;

  const searchParams = useSearchParams();

  const [blockQuery, setBlockQuery] = useState("");

  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedBlockKey, setSelectedBlockKey] = useState<string | null>(null);
  const [isCodeLoading, setIsCodeLoading] = useState(false);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const codeCacheRef = useRef<Map<string, string>>(new Map());

  const blockByKey = useMemo(() => {
    const map = new Map<string, Block>();

    for (const block of blocks) {
      const key = `${block.category}/${block.subcategory}/${block.id}`;
      map.set(key, block);
    }

    return map;
  }, [blocks]);

  const selectedBlock = useMemo(() => {
    if (!selectedBlockKey) {
      return undefined;
    }

    return blockByKey.get(selectedBlockKey);
  }, [blockByKey, selectedBlockKey]);

  const validCategoryKeys = useMemo(
    () => new Set(blocks.map((block) => block.category)),
    [blocks]
  );

  const selectedCategory = useMemo(() => {
    const fromQuery = searchParams.get("category") ?? "all";

    if (fromQuery === "all") {
      return "all";
    }

    if (!validCategoryKeys.has(fromQuery)) {
      return "all";
    }

    return fromQuery;
  }, [searchParams, validCategoryKeys]);

  const filteredBlocks = useMemo(() => {
    const query = blockQuery.trim().toLowerCase();

    return blocks
      .filter((block) =>
        selectedCategory === "all" ? true : block.category === selectedCategory
      )
      .filter((block) => {
        if (!query) {
          return true;
        }

        return (
          block.name.toLowerCase().includes(query) ||
          block.description.toLowerCase().includes(query) ||
          block.subcategoryLabel.toLowerCase().includes(query)
        );
      });
  }, [blocks, blockQuery, selectedCategory]);

  const openForBlock = useCallback((block: Block) => {
    const key = `${block.category}/${block.subcategory}/${block.id}`;
    setSelectedBlockKey(key);
    setSheetOpen(true);
  }, []);

  useEffect(() => {
    if (!sheetOpen) {
      return;
    }
    if (!selectedBlockKey) {
      return;
    }

    const cached = codeCacheRef.current.get(selectedBlockKey);

    if (cached) {
      setSelectedCode(cached);
      setIsCodeLoading(false);
      return;
    }

    const controller = new AbortController();
    setIsCodeLoading(true);
    setSelectedCode(null);

    const load = async () => {
      try {
        const res = await fetch(
          `/blocks/api/block-source?key=${encodeURIComponent(selectedBlockKey)}`,
          {
            signal: controller.signal,
            headers: { accept: "application/json" },
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch code for ${selectedBlockKey}`);
        }

        const data: unknown = await res.json();
        if (
          !data ||
          typeof data !== "object" ||
          !("code" in data) ||
          typeof (data as { code?: unknown }).code !== "string"
        ) {
          throw new Error("Invalid response format");
        }

        const code = (data as { code: string }).code;
        codeCacheRef.current.set(selectedBlockKey, code);
        setSelectedCode(code);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setSelectedCode(
          `// Unable to load source for ${selectedBlockKey}\n// ${(error as Error).message}`
        );
      } finally {
        setIsCodeLoading(false);
      }
    };

    load();

    return () => controller.abort();
  }, [sheetOpen, selectedBlockKey]);

  return (
    <>
      <section className="flex-1">
        <div className="flex flex-col gap-4">
          <div className="sticky top-(--header-height) z-30 bg-card">
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput
                onChange={(e) => setBlockQuery(e.target.value)}
                placeholder="Search blocks..."
                value={blockQuery}
              />
            </InputGroup>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredBlocks.map((block) => (
              <BlockCard
                block={block}
                key={`${block.category}/${block.subcategory}/${block.id}`}
                onClick={() => openForBlock(block)}
              />
            ))}
          </div>

          {filteredBlocks.length === 0 && (
            <div className="rounded-2xl border bg-card/40 p-6 text-muted-foreground">
              No blocks match your filters.
            </div>
          )}
        </div>
      </section>

      <Sheet onOpenChange={({ open }) => setSheetOpen(open)} open={sheetOpen}>
        <SheetContent
          className="max-w-lg p-0"
          placement="right"
          showCloseButton
        >
          <SheetHeader className="px-6 pt-6">
            <SheetTitle>
              {selectedBlock ? selectedBlock.name : "Block"}
            </SheetTitle>
            <SheetDescription>
              {selectedBlock
                ? `${selectedBlock.categoryLabel} / ${selectedBlock.subcategoryLabel}`
                : "Select a block to view its source."}
            </SheetDescription>
          </SheetHeader>

          <SheetBody className="px-6 pb-6">
            {isCodeLoading && (
              <div className="flex items-center gap-3 text-muted-foreground">
                <Spinner aria-label="Loading source code" />
                Loading source...
              </div>
            )}

            {!isCodeLoading && selectedCode && (
              <figure className="relative overflow-hidden rounded-xl border bg-muted/20">
                <CopyButton value={selectedCode} />
                <ScrollArea className="h-[60vh]" scrollFade>
                  <pre className="wrap-break-word m-0 whitespace-pre px-6 pt-12 pb-6 text-[.8125rem] leading-relaxed">
                    <code>{selectedCode}</code>
                  </pre>
                </ScrollArea>
              </figure>
            )}
          </SheetBody>
        </SheetContent>
      </Sheet>
    </>
  );
};
