import { BlocksSidebar } from "@/components/layout/blocks-sidebar";
import { cn } from "@/lib/utils";
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { SkipNavContent } from "@/registry/react/components/skip-nav";
import { BlocksFilter } from "./_components/blocks-filter";
import { BLOCKS } from "./_data/blocks-data";

const BlocksLayout = ({ children }: LayoutProps<"/blocks">) => {
  return (
    <SidebarProvider
      className={cn(
        "[--sidebar-width:220px] [--top-spacing:0] lg:[--sidebar-width:240px] lg:[--top-spacing:--spacing(4)]",
        "container",
        "min-h-min",
        "flex-1 items-start",
        "px-0",
        "lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)]"
      )}
    >
      <BlocksSidebar blocks={BLOCKS} />

      <SidebarInset
        asChild
        className="flex w-full min-w-0 flex-1 flex-col bg-card/64 lg:me-4 lg:mt-2 lg:mb-8"
      >
        <div
          className={cn(
            "relative",
            "flex flex-col",
            "w-full",
            "bg-card text-card-foreground",
            "border border-input shadow-lg/5",
            "max-lg:border-none lg:rounded-2xl"
          )}
        >
          <div className="flex flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:p-8">
            <div className={cn("z-10", "sticky top-(--header-height)")}>
              <BlocksFilter />
            </div>

            <SkipNavContent>{children}</SkipNavContent>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default BlocksLayout;
