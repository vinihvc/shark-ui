"use client";

import { FilesIcon } from "lucide-react";
import React from "react";
import { CopyButton } from "@/components/copy-button";
import type {
  CompositionFileTreeNode,
  PublishedCompositionFile,
} from "@/lib/registry";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/react/components/sheet";
import { getIconForLanguageExtension } from "@/utils/file-extension";
import { CompositionFileTree } from "./composition-file-tree";

interface CompositionCodeViewerProps {
  files: PublishedCompositionFile[];
  label: string;
  tree: CompositionFileTreeNode[];
}

const getLanguageFromPath = (path: string) => path.split(".").pop() ?? "tsx";

export const CompositionCodeViewer = ({
  files,
  label,
  tree,
}: CompositionCodeViewerProps) => {
  const [activePath, setActivePath] = React.useState(
    files[0]?.displayPath ?? ""
  );
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const activeFile =
    files.find((file) => file.displayPath === activePath) ?? files[0];
  const activeLanguage = React.useMemo(
    () => getLanguageFromPath(activeFile?.displayPath ?? "tsx"),
    [activeFile?.displayPath]
  );
  const handleSheetOpenChange = React.useCallback(
    ({ open }: { open: boolean }) => setSheetOpen(open),
    []
  );

  if (!activeFile) {
    return null;
  }

  const selectFile = (path: string) => {
    setActivePath(path);
    setSheetOpen(false);
  };

  return (
    <div
      className="grid min-h-[32rem] overflow-hidden bg-background text-foreground lg:grid-cols-[13.75rem_minmax(0,1fr)]"
      data-slot="composition-code-viewer"
    >
      <aside className="hidden min-h-0 border-border border-e lg:flex lg:flex-col">
        <div className="shrink-0 px-4 py-3">
          <p className="font-medium text-sm">Files</p>
        </div>
        <ScrollArea className="min-h-0 flex-1">
          <div className="px-2 pb-3">
            <CompositionFileTree
              activePath={activeFile.displayPath}
              label={label}
              onSelect={selectFile}
              tree={tree}
            />
          </div>
        </ScrollArea>
      </aside>

      <div className="flex min-h-[32rem] min-w-0 flex-col">
        <header className="flex h-10 shrink-0 items-center gap-2 border-border border-b px-3">
          <Sheet onOpenChange={handleSheetOpenChange} open={sheetOpen}>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon-sm" variant="ghost">
                <FilesIcon aria-hidden="true" className="size-4" />
                <span className="sr-only">Browse files</span>
              </Button>
            </SheetTrigger>
            <SheetContent placement="left">
              <SheetHeader>
                <SheetTitle>{label} files</SheetTitle>
                <SheetDescription>
                  Choose a file to inspect and copy.
                </SheetDescription>
              </SheetHeader>
              <SheetBody className="px-2">
                <CompositionFileTree
                  activePath={activeFile.displayPath}
                  label={label}
                  onSelect={selectFile}
                  tree={tree}
                />
              </SheetBody>
            </SheetContent>
          </Sheet>
          <span className="text-muted-foreground [&_svg]:size-3.5">
            {getIconForLanguageExtension(activeLanguage)}
          </span>
          <span className="min-w-0 flex-1 truncate font-mono text-muted-foreground text-xs">
            {activeFile.displayPath}
          </span>
          <CopyButton className="size-7" value={activeFile.content} />
        </header>

        <ScrollArea className="min-h-0 flex-1">
          <figure data-rehype-pretty-code-figure="" data-slot="code-block">
            <div
              // biome-ignore lint/security/noDangerouslySetInnerHtml: content is highlighted from repository source at build time
              dangerouslySetInnerHTML={{
                __html: activeFile.highlightedContent,
              }}
            />
          </figure>
        </ScrollArea>
      </div>
    </div>
  );
};
