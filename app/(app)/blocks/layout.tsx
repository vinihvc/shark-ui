import { BlocksSidebar } from "@/components/layout/blocks-sidebar";
import { cn } from "@/lib/utils";
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { BLOCKS } from "./_data/blocks-data";

const BlocksLayout = ({ children }: LayoutProps<"/blocks">) => (
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

    <SidebarInset>{children}</SidebarInset>
  </SidebarProvider>
);

export default BlocksLayout;
