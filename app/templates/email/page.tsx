"use client";

import {
  InboxIcon,
  FileEditIcon,
  SendIcon,
  AlertCircleIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";
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

const FOLDERS = [
  { label: "Inbox", href: "#", icon: InboxIcon },
  { label: "Drafts", href: "#", icon: FileEditIcon },
  { label: "Sent", href: "#", icon: SendIcon },
  { label: "Junk", href: "#", icon: AlertCircleIcon },
  { label: "Trash", href: "#", icon: Trash2Icon },
];

const EMAILS = [
  {
    id: "1",
    sender: "William Smith",
    time: "09:34 AM",
    subject: "Meeting Tomorrow",
    preview:
      "Hi team, just a reminder about our meeting tomorrow at 10 AM. Please come prepared with your project updates.",
    body: "Hi team,\n\nJust a reminder about our meeting tomorrow at 10 AM. Please come prepared with your project updates.\n\nLooking forward to it.\n\nWilliam",
  },
  {
    id: "2",
    sender: "Alice Smith",
    time: "Yesterday",
    subject: "Re: Project Update",
    preview:
      "Thanks for the update. The progress looks great so far. Let's schedule a call to discuss the next steps.",
    body: "Thanks for the update. The progress looks great so far. Let's schedule a call to discuss the next steps.\n\nBest,\nAlice",
  },
  {
    id: "3",
    sender: "Bob Johnson",
    time: "2 days ago",
    subject: "Weekend Plans",
    preview:
      "Hey everyone! I'm thinking of organizing a team outing this weekend. Would you be interested in a hiking trip or a beach day?",
    body: "Hey everyone!\n\nI'm thinking of organizing a team outing this weekend. Would you be interested in a hiking trip or a beach day?\n\nLet me know!\nBob",
  },
  {
    id: "4",
    sender: "Emily Davis",
    time: "2 days ago",
    subject: "Re: Question about Budget",
    preview:
      "I've reviewed the budget numbers you sent over. Can we set up a quick call to discuss some potential adjustments?",
    body: "I've reviewed the budget numbers you sent over. Can we set up a quick call to discuss some potential adjustments?\n\nThanks,\nEmily",
  },
  {
    id: "5",
    sender: "Michael Wilson",
    time: "1 week ago",
    subject: "Important Announcement",
    preview:
      "Please join us for an all-hands meeting this Friday at 3 PM. We have some exciting news to share about the company's future.",
    body: "Please join us for an all-hands meeting this Friday at 3 PM. We have some exciting news to share about the company's future.\n\nSee you there!\nMichael",
  },
];

const EmailTemplatePage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(EMAILS[0].id);
  const selectedEmail = EMAILS.find((e) => e.id === selectedId);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <SidebarProvider className="h-full">
        <SidebarRoot className="absolute" collapsible="offcanvas">
          <SidebarHeader className="border-b">
            <div className="flex flex-col gap-0 px-2 py-3">
              <span className="font-semibold">Acme Inc</span>
              <span className="text-muted-foreground text-xs">Enterprise</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Mail</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {FOLDERS.map(({ label, href, icon: Icon }) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton asChild isActive={label === "Inbox"}>
                        <Link href={href}>
                          <Icon aria-hidden className="size-4" />
                          <span>{label}</span>
                        </Link>
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
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col gap-0 overflow-hidden">
                <span className="truncate font-medium text-sm">Acme User</span>
                <span className="truncate text-muted-foreground text-xs">
                  shadcnm@example.com
                </span>
              </div>
            </div>
          </SidebarFooter>
        </SidebarRoot>
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="font-medium text-sm">Inbox</h1>
            <span className="text-muted-foreground text-sm">Unreads</span>
          </header>
          <Resizable
            className="min-h-0 flex-1"
            defaultSize={[35, 65]}
            panels={[
              { id: "list", minSize: 20 },
              { id: "content", minSize: 30 },
            ]}
          >
            <ResizablePanel
              className="flex flex-col overflow-hidden"
              id="list"
            >
              <ScrollArea className="flex-1">
                <div className="flex flex-col">
                  {EMAILS.map((email) => (
                    <button
                      key={email.id}
                      className="flex flex-col gap-1 border-b px-4 py-3 text-left transition-colors hover:bg-muted/50 data-[selected=true]:bg-muted"
                      data-selected={selectedId === email.id}
                      type="button"
                      onClick={() => setSelectedId(email.id)}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate font-medium text-sm">
                          {email.sender}
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          {email.time}
                        </span>
                      </div>
                      <span className="truncate font-medium text-sm">
                        {email.subject}
                      </span>
                      <p className="line-clamp-1 text-muted-foreground text-xs">
                        {email.preview}
                      </p>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </ResizablePanel>
            <ResizableResizeTrigger id="list:content" withHandle />
            <ResizablePanel
              className="flex flex-col overflow-hidden bg-muted/30"
              id="content"
            >
              {selectedEmail ? (
                <ScrollArea className="flex-1">
                  <div className="flex flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-semibold text-lg">
                          {selectedEmail.subject}
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span>{selectedEmail.sender}</span>
                          <span>·</span>
                          <span>{selectedEmail.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="whitespace-pre-wrap text-sm">
                      {selectedEmail.body}
                    </div>
                  </div>
                </ScrollArea>
              ) : (
                <div className="flex flex-1 items-center justify-center text-muted-foreground text-sm">
                  Select an email to read
                </div>
              )}
            </ResizablePanel>
          </Resizable>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default EmailTemplatePage;
