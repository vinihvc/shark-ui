"use client";

import { ListTodoIcon } from "lucide-react";
import { useState } from "react";
import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueItemIndicator,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger,
} from "@/registry/react/components/queue";

const Example = () => {
  const [open, setOpen] = useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Queue>
        <QueueSection onOpenChange={handleOpenChange} open={open}>
          <QueueSectionTrigger>
            <QueueSectionLabel
              count={2}
              icon={<ListTodoIcon aria-hidden="true" className="size-4" />}
              label="Queued"
            />
          </QueueSectionTrigger>
          <QueueSectionContent>
            <QueueList>
              <QueueItem>
                <QueueItemIndicator />
                <QueueItemContent>Summarize the launch brief</QueueItemContent>
                <QueueItemActions>
                  <QueueItemAction aria-label="Remove">×</QueueItemAction>
                </QueueItemActions>
              </QueueItem>
              <QueueItem>
                <QueueItemIndicator />
                <QueueItemContent>Draft release notes</QueueItemContent>
              </QueueItem>
            </QueueList>
          </QueueSectionContent>
        </QueueSection>
      </Queue>
      <p className="text-muted-foreground text-sm">
        Section: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
