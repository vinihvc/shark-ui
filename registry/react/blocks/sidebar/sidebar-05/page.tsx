import { Separator } from "@/registry/react/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export default function Sidebar05Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ms-1" />
          <Separator className="h-4" orientation="vertical" />
          <p className="font-medium text-sm">Workspace overview</p>
        </header>
        <main className="grid flex-1 gap-4 p-4 md:grid-cols-2">
          <section className="min-h-64 rounded-xl border bg-muted/35" />
          <section className="min-h-64 rounded-xl border bg-muted/35" />
          <section className="min-h-80 rounded-xl border bg-muted/35 md:col-span-2" />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
