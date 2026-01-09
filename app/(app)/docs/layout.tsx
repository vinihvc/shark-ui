import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { source } from "@/lib/fumadocs";

const DocsLayout = ({ children }: LayoutProps<"/docs">) => (
  <>
    <SidebarProvider className="container min-h-min flex-1 items-start 3xl:fixed:px-3 px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
      <DocsSidebar tree={source.pageTree} />

      {children}
    </SidebarProvider>
  </>
);

export default DocsLayout;
