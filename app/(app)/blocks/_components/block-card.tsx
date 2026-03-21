"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Separator } from "@/registry/react/components/separator";
import type { Block } from "../_data/blocks-data";

interface BlockCardProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The block to display.
   */
  data: Block;
}

export const BlockCard = (props: BlockCardProps) => {
  const { data, className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group flex h-fit w-full flex-col self-start overflow-hidden",
        className
      )}
      {...rest}
    >
      <div className="relative z-20 flex shrink-0 items-center justify-end gap-2 border-border/50 border-b px-3 py-2">
        <div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&_svg]:h-[0.9rem] [&_svg]:w-[0.9rem]">
          {data.name}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <CopyButton />
          <Separator className="h-4" orientation="vertical" />
          <Button size="sm" variant="outline">
            View Code
          </Button>
        </div>
      </div>
      <div className="relative flex min-h-50 min-w-0 flex-1 flex-col flex-wrap items-center justify-center overflow-hidden overflow-x-auto rounded-xl bg-card **:data-[slot=preview]:w-full">
        <iframe
          className="block w-full border-none align-top opacity-100 transition-opacity duration-300"
          height={400}
          loading="lazy"
          src={data.previewUrl}
          title={data.name}
        />
      </div>
    </ark.div>
  );
};
