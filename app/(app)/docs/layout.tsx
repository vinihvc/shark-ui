import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/registry/react/components/sidebar";

export const dynamic = "force-static";
export const revalidate = false;

const DocsLayout = ({ children }: LayoutProps<"/docs">) => (
  <main>
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
      <DocsSidebar tree={source.pageTree} />

      {children}
    </SidebarProvider>
  </main>
);

export default DocsLayout;
