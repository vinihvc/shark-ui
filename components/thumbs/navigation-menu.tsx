import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const NavigationMenuThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-56 flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-md bg-primary px-2.5 py-2 text-primary-foreground">
          <div className="h-1.5 w-10 rounded-full bg-primary-foreground/80" />
          <ChevronDownIcon aria-hidden="true" className="size-3" />
        </div>
        <div className="h-1.5 w-12 rounded-full bg-muted-foreground/24" />
        <div className="h-1.5 w-10 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="grid grid-cols-2 gap-3 rounded-xl border border-input bg-muted p-3 shadow-md/5">
        <div className="flex flex-col gap-2">
          <div className="size-6 rounded-md bg-muted-foreground/16" />
          <div className="h-1.5 w-14 rounded-full bg-muted-foreground/40" />
          <div className="h-1 w-full rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="size-6 rounded-md bg-muted-foreground/16" />
          <div className="h-1.5 w-12 rounded-full bg-muted-foreground/40" />
          <div className="h-1 w-full rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
