import { Separator } from "@/registry/react/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { AppSidebar } from "./components/app-sidebar";

const summaryCards = ["activity", "coverage", "usage"] as const;

export default function Sidebar01Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ms-1" />
          <Separator className="h-4" orientation="vertical" />
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <span className="hidden text-muted-foreground sm:inline">
              Documentation
            </span>
            <span
              aria-hidden="true"
              className="hidden text-muted-foreground sm:inline"
            >
              /
            </span>
            <span className="truncate font-medium">Getting started</span>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {summaryCards.map((card) => (
              <div
                className="aspect-video rounded-xl border bg-muted/35"
                key={card}
              />
            ))}
          </div>
          <div className="min-h-96 flex-1 rounded-xl border bg-muted/35" />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
