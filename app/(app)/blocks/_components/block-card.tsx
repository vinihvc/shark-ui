"use client";

import { cn } from "@/lib/utils";
import { Card, CardMedia } from "@/registry/react/components/card";
import type { Block } from "../_data/blocks-data";

interface BlockCardProps {
  block: Block;
  onClick?: () => void;
}

export const BlockCard = ({ block, onClick }: BlockCardProps) => {
  return (
    <button
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-card/50 text-left",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
        "transition-colors hover:bg-card"
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key !== "Enter" && e.key !== " ") {
          return;
        }
        e.preventDefault();
        onClick?.();
      }}
      type="button"
    >
      <Card className="h-full border-0 shadow-none">
        <CardMedia className="aspect-video bg-muted p-0" variant="image">
          {/*  */}
        </CardMedia>
        <div className="flex flex-col gap-1 p-4">
          <h3 className="font-semibold text-base tracking-tight">
            {block.name}
          </h3>
          <p className="line-clamp-2 text-muted-foreground text-sm">
            {block.description}
          </p>
        </div>
      </Card>
    </button>
  );
};
