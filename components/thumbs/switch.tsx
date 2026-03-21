import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SwitchThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-6 w-10 items-center rounded-full border border-input bg-primary shadow-md/5">
      <div className="size-4.5 translate-x-full rounded-full bg-background" />
    </div>
  </ThumbCard>
);
