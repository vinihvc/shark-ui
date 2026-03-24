import { BlocksSidebar } from "@/components/layout/blocks-sidebar";
import { getAllRegistryItems } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/registry/react/components/sidebar";
import { SkipNavContent } from "@/registry/react/components/skip-nav";

export const revalidate = false;
export const dynamic = "force-static";

const BlocksLayout = async ({ children }: LayoutProps<"/blocks">) => {
  const allBlocks = await getAllRegistryItems({ folderType: "blocks" });

  // Group blocks by category and count the number of blocks in each category
  const blocks = allBlocks.reduce(
    (acc, block) => {
      acc[block.category] = (acc[block.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

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
      <BlocksSidebar blocks={blocks} />

      <SkipNavContent>{children}</SkipNavContent>
    </SidebarProvider>
  );
};

export default BlocksLayout;
