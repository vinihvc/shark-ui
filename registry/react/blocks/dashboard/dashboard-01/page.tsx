import { CalendarDaysIcon, DownloadIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Separator } from "@/registry/react/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { ChannelsTable } from "./components/channels-table";
import { OverviewCards } from "./components/overview-cards";
import { VisitorsChart } from "./components/visitors-chart";
import channelData from "./data.json";

const DashboardPage = () => (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur sm:px-6">
        <SidebarTrigger />
        <Separator className="h-5" orientation="vertical" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">Overview</p>
          <p className="hidden text-muted-foreground text-xs sm:block">
            Monday, June 24
          </p>
        </div>
        <Button className="hidden sm:inline-flex" variant="outline">
          <CalendarDaysIcon aria-hidden="true" className="size-4" />
          Last 30 days
        </Button>
        <Button aria-label="Export dashboard" size="icon-md" variant="outline">
          <DownloadIcon aria-hidden="true" className="size-4" />
        </Button>
      </header>

      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
        <div>
          <h1 className="font-semibold text-2xl tracking-[-0.02em]">
            Good morning, Maya
          </h1>
          <p className="mt-1 text-muted-foreground text-sm">
            Traffic, conversion, and channel mix for the last 30 days.
          </p>
        </div>
        <OverviewCards />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(22rem,0.85fr)]">
          <VisitorsChart />
          <ChannelsTable data={channelData} />
        </div>
      </main>
    </SidebarInset>
  </SidebarProvider>
);

export default DashboardPage;
