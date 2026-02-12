import { BlockThumbCard } from "./block-card";

export const SplitterThumb = () => (
  <BlockThumbCard subtitle="Component" title="Splitter">
    <div className="flex h-full">
      <div className="flex-1" />
      <div className="w-2 shrink-0" />
      <div className="flex-1" />
    </div>
  </BlockThumbCard>
);
