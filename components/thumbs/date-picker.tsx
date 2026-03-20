import { CalendarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DatePickerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full max-w-48 flex-col gap-2">
      <div className="flex h-8 items-center rounded-lg border border-input bg-muted px-3 shadow-md/5">
        <div className="flex w-full items-center gap-3">
          <CalendarIcon className="size-3 shrink-0 opacity-48" />
          <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
      <div className="relative flex flex-col gap-2 rounded-lg border border-input border-dashed bg-muted/64 p-3 shadow-md/5">
        <div className="grid grid-cols-5 place-content-center gap-1.5">
          {Array.from({ length: 5 }, (_, i) => `day-${i}`).map((key) => (
            <div
              className="h-1.5 rounded-lg bg-muted-foreground/16"
              key={key}
            />
          ))}
        </div>
        <div className="grid grid-cols-5 justify-items-center gap-1.5">
          {Array.from({ length: 5 }, (_, i) => `cell-${i}`).map((key) => (
            <div className="relative flex flex-col items-center" key={key}>
              <div className="flex size-6 items-center justify-center rounded-lg bg-muted-foreground/8" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-10 size-full rounded-b-lg bg-linear-to-b from-transparent via-transparent to-muted" />
      </div>
    </div>
  </ThumbCard>
);
