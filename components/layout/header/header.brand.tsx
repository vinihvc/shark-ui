"use client";

import {
  Clipboard,
  ClipboardTrigger,
} from "@registry/react/components/clipboard";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@registry/react/components/context-menu";
import { DownloadTrigger } from "@registry/react/components/download-trigger";
import { DownloadIcon } from "lucide-react";
import { SharkIcon } from "@/components/icons/shark";
import { cn } from "@/lib/utils";

export const HeaderBrand = (
  props: React.ComponentProps<typeof ContextMenuTrigger>
) => {
  const { className, ...rest } = props;

  const downloadPng = async () => {
    const response = await fetch("/downloads/shark.png");

    return response.blob();
  };

  const downloadWebp = async () => {
    const response = await fetch("/downloads/shark.webp");

    return response.blob();
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={cn(
          "flex gap-2",
          "font-bold text-base",
          "rounded-md border border-transparent",
          "cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        {...rest}
      />
      <ContextMenuContent>
        <Clipboard value={sharkSvg}>
          <ContextMenuItem asChild value="copy-mark-as-svg">
            <ClipboardTrigger>
              <SharkIcon className="size-3.5" />
              Copy mark as SVG
            </ClipboardTrigger>
          </ContextMenuItem>
        </Clipboard>
        <ContextMenuSeparator />
        <ContextMenuItem asChild value="download-mark-as-png">
          <DownloadTrigger
            data={downloadPng}
            fileName="shark.png"
            mimeType="image/png"
          >
            <DownloadIcon />
            Download mark as PNG
          </DownloadTrigger>
        </ContextMenuItem>
        <ContextMenuItem asChild value="download-mark-as-webp">
          <DownloadTrigger
            data={downloadWebp}
            fileName="shark.webp"
            mimeType="image/webp"
          >
            <DownloadIcon />
            Download mark as WEBP
          </DownloadTrigger>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const sharkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 512 512">
  <path fill="#000" d="M0 0h512v512H0z"/>
  <path fill="#fff" d="M100 380c0 17.673 14.327 32 32 32h244.412c19.014 0 33.952-16.543 30.371-35.216-27.791-144.926-127.409-237.794-270.325-270.019C117.405 102.469 100 117.532 100 137.064v76.718c0 17.673 14.327 32 32 32h49.538c14.673 0 26.567 11.894 26.567 26.567s-11.894 26.568-26.567 26.568H132c-17.673 0-32 14.327-32 32z"/>
</svg>`;
