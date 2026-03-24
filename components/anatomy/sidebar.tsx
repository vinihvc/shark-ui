import {
  AnatomyCard,
  type AnatomyCardProps,
} from "@/components/anatomy/anatomy-card";
import {
  Hint,
  HintContent,
  HintTrigger,
} from "@/registry/react/components/hint";

export const SidebarAnatomy = (props: AnatomyCardProps) => (
  <AnatomyCard {...props}>
    <Hint
      className="relative flex size-full min-h-0 whitespace-normal"
      open
      positioning={{ placement: "right" }}
    >
      <HintTrigger asChild>
        <div className="flex h-full min-h-0 w-full flex-col gap-3 rounded-xl border border-black p-6 dark:border-white">
          <Hint open positioning={{ placement: "top" }}>
            <HintTrigger asChild>
              <div className="h-10 shrink-0 rounded-xl border border-info bg-info/5" />
            </HintTrigger>
            <HintContent>{"<SidebarHeader />"}</HintContent>
          </Hint>
          <Hint open positioning={{ placement: "left" }}>
            <HintTrigger asChild>
              <div className="flex min-h-0 flex-1 flex-col gap-3 rounded-xl border border-success bg-success/5 p-4">
                <Hint open positioning={{ placement: "top" }}>
                  <HintTrigger asChild>
                    <div className="h-12 shrink-0 rounded-xl border border-warning border-dotted bg-warning/5" />
                  </HintTrigger>
                  <HintContent>{"<SidebarGroup />"}</HintContent>
                </Hint>
                <Hint open positioning={{ placement: "bottom" }}>
                  <HintTrigger asChild>
                    <div className="h-12 shrink-0 rounded-xl border border-warning border-dotted bg-warning/5" />
                  </HintTrigger>
                  <HintContent>{"<SidebarGroup />"}</HintContent>
                </Hint>
                <div aria-hidden className="h-16 shrink-0" />
              </div>
            </HintTrigger>
            <HintContent>{"<SidebarContent />"}</HintContent>
          </Hint>
          <Hint open positioning={{ placement: "bottom" }}>
            <HintTrigger asChild>
              <div className="h-10 shrink-0 rounded-xl border border-destructive bg-destructive/5" />
            </HintTrigger>
            <HintContent>{"<SidebarFooter />"}</HintContent>
          </Hint>
        </div>
      </HintTrigger>
      <HintContent>{"<Sidebar />"}</HintContent>
    </Hint>
  </AnatomyCard>
);
