"use client";

import {
  BookIcon,
  LayoutGridIcon,
  MessageSquareIcon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { Card, CardHeader } from "@/registry/react/components/card";
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
} from "@/registry/react/components/sidebar";
import { Textarea } from "@/registry/react/components/textarea";

const AI_TEMPLATE_SIDEBAR = [
  { label: "Projects", icon: LayoutGridIcon, href: "#" },
  { label: "Library", icon: BookIcon, href: "#" },
];

const PINNED = ["Research & Analysis", "Web Search", "Knowledge Base"];

const RECENTS = [
  "User research analysis",
  "Competitive analysis",
  "Meeting notes",
  "Market trends analysis",
  "Usability testing results",
  "Feature prioritization",
  "User feedback",
];

const AITemplatePage = () => (
  <SidebarProvider className="min-h-svh">
    <SidebarRoot
      className="sticky top-0 z-30 hidden h-svh flex-col lg:flex"
      collapsible="none"
    >
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <MessageSquareIcon aria-hidden className="size-4" />
          </div>
          <span className="font-semibold">New chat</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {AI_TEMPLATE_SIDEBAR.map(({ label, icon: Icon, href }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton asChild>
                    <Link href={href}>
                      <Icon aria-hidden className="size-4" />
                      {label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Pinned</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {PINNED.map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton asChild>
                    <Link href="#">{item}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Recents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {RECENTS.slice(0, 3).map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton asChild>
                    <Link href="#">{item}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Yesterday</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {RECENTS.slice(3, 6).map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton asChild>
                    <Link href="#">{item}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar size="sm">
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col gap-0 overflow-hidden">
            <span className="truncate font-medium text-sm">James Brown</span>
            <span className="truncate text-muted-foreground text-xs">Pro</span>
          </div>
        </div>
      </SidebarFooter>
    </SidebarRoot>
    <SidebarInset>
      <div className="flex h-svh flex-col">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="font-semibold text-2xl">Hello James</h1>
            <p className="text-lg text-muted-foreground">
              What can I help you with today?
            </p>
          </div>
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
              <span className="font-medium text-sm">
                Access premium models and features
              </span>
              <Button size="sm" variant="outline">
                Upgrade
              </Button>
            </CardHeader>
          </Card>
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Textarea
                className="min-h-24 resize-none pr-12"
                placeholder="How can I help you today?"
                rows={3}
              />
              <Button
                className="absolute top-2 right-2"
                size="icon-sm"
                type="submit"
                variant="ghost"
              >
                <SparklesIcon aria-hidden className="size-4" />
              </Button>
            </div>
            <p className="mt-2 text-center text-muted-foreground text-xs">
              GPT-4 · AI can make mistakes — please double-check
            </p>
          </div>
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
);

export default AITemplatePage;
