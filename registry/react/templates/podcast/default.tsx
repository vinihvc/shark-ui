"use client";

import {
  CrownIcon,
  DownloadIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent, CardMedia } from "@/registry/react/components/card";
import { Progress } from "@/registry/react/components/progress";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  Sidebar as SidebarRoot,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";

const NAV_ITEMS = [
  { label: "Home", href: "#", icon: HomeIcon },
  { label: "Search", href: "#", icon: SearchIcon },
  { label: "Your Library", href: "#", icon: LibraryIcon },
];

const FEATURED_CHARTS = [
  {
    title: "Top 50 Global",
    subtitle: "Your weekly update of the most played tracks",
  },
  {
    title: "Top 50 India",
    subtitle: "Your weekly update of the most played tracks",
  },
  {
    title: "Trending India",
    subtitle: "Your weekly update of the most played tracks",
  },
  {
    title: "Trending Global",
    subtitle: "Your weekly update of the most played tracks",
  },
  {
    title: "Mega Hits",
    subtitle: "Your weekly update of the most played tracks",
  },
  {
    title: "Happy Favorites",
    subtitle: "Your weekly update of the most played tracks",
  },
];

const TRACKS = [
  { title: "Kutti Story", artist: "Aniruth Ravichander, Thalapathy Vijay" },
  { title: "VIP Title Song", artist: "Anirudh Ravichander" },
  { title: "Dharala Prabhu Title Track", artist: "Anirudh Ravichander" },
  {
    title: "Hukum - Thalaivar Alappara",
    artist: "Anirudh Ravichander, Super Subu",
  },
  { title: "Illuminati", artist: "Sushin Shyam, Dabzee, Vinayak Sasikumar" },
  { title: "Vaathi Coming", artist: "Aniruth Ravichander, Thalapathy Vijay" },
];

const PodcastTemplate = () => {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <SidebarProvider className="flex flex-1">
        <SidebarRoot className="absolute" collapsible="offcanvas">
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-2 py-3">
              <span className="font-bold text-lg">Podcast</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton asChild isActive={label === "Home"}>
                        <Link href={href}>
                          <Icon aria-hidden className="size-5" />
                          <span>{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Create</SidebarGroupLabel>
              <SidebarGroupContent className="flex flex-col gap-2">
                <Button
                  className="w-full justify-start"
                  size="sm"
                  variant="outline"
                >
                  Create Playlist
                </Button>
                <Button
                  className="w-full justify-start"
                  size="sm"
                  variant="outline"
                >
                  Browse podcasts
                </Button>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t">
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <CrownIcon aria-hidden className="size-4" />
                    <span>Explore Premium</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <DownloadIcon aria-hidden className="size-4" />
                    <span>Install App</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarRoot>
        <SidebarInset className="flex flex-col">
          <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
          </header>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-8 p-6">
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-medium text-primary text-xs">
                    All
                  </span>
                  <span className="text-muted-foreground text-sm">Music</span>
                  <span className="text-muted-foreground text-sm">
                    Podcasts
                  </span>
                </div>
                <h2 className="mb-4 font-semibold text-xl">Featured Charts</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {FEATURED_CHARTS.map((chart) => (
                    <Card
                      className="cursor-pointer transition-colors hover:bg-muted/50"
                      key={chart.title}
                    >
                      <CardMedia variant="image">
                        <div className="aspect-square bg-muted-foreground/16" />
                      </CardMedia>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">{chart.title}</h3>
                        <p className="line-clamp-1 text-muted-foreground text-sm">
                          {chart.subtitle}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-4 font-semibold text-xl">
                  Today&apos;s biggest hits
                </h2>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {TRACKS.map((track) => (
                    <Card
                      className="min-w-40 shrink-0 cursor-pointer transition-colors hover:bg-muted/50"
                      key={`${track.title}-${track.artist}`}
                    >
                      <CardMedia variant="image">
                        <div className="aspect-square bg-muted-foreground/16" />
                      </CardMedia>
                      <CardContent className="p-3">
                        <h3 className="truncate font-medium text-sm">
                          {track.title}
                        </h3>
                        <p className="truncate text-muted-foreground text-xs">
                          {track.artist}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </ScrollArea>

          <footer className="flex shrink-0 flex-col gap-2 border-t bg-muted/30 px-4 py-3">
            <div className="flex items-center gap-4">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <Avatar size="sm">
                  <AvatarFallback>KS</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-sm">Kutti Story</p>
                  <p className="truncate text-muted-foreground text-xs">
                    Aniruth Ravichander
                  </p>
                </div>
              </div>
              <div className="min-w-0 max-w-xl flex-1">
                <Progress value={30} />
              </div>
              <span className="shrink-0 text-muted-foreground text-xs">
                0:00 / 0:00
              </span>
            </div>
          </footer>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default PodcastTemplate;
