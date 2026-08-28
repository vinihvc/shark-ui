import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export default function Sidebar14Page() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center border-b px-4">
          <div>
            <p className="font-medium text-sm">Inbox</p>
            <p className="text-muted-foreground text-xs">Quarterly planning</p>
          </div>
          <SidebarTrigger className="ms-auto rotate-180 rtl:rotate-0" />
        </header>
        <main className="grid flex-1 gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <section className="min-h-[32rem] rounded-xl border bg-muted/35" />
          <aside className="hidden rounded-xl border bg-muted/35 lg:block" />
        </main>
      </SidebarInset>
      <AppSidebar />
    </SidebarProvider>
  );
}
