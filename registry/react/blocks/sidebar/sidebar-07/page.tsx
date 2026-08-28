import { Separator } from "@/registry/react/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { AppSidebar } from "./components/app-sidebar";

const overviewCards = ["usage", "members", "deployments"] as const;

export default function Sidebar07Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 px-4 transition-[height] group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 motion-reduce:transition-none">
          <SidebarTrigger className="-ms-1" />
          <Separator className="h-4" orientation="vertical" />
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <span className="hidden text-muted-foreground sm:inline">Acme</span>
            <span
              aria-hidden="true"
              className="hidden text-muted-foreground sm:inline"
            >
              /
            </span>
            <span className="truncate font-medium">Design system</span>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-3">
            {overviewCards.map((card) => (
              <div className="aspect-video rounded-xl bg-muted/45" key={card} />
            ))}
          </div>
          <div className="min-h-96 flex-1 rounded-xl bg-muted/45" />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
