import { ListTodoIcon } from "lucide-react";
import {
  Queue,
  QueueItem,
  QueueItemContent,
  QueueItemIndicator,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger,
} from "@/registry/react/components/queue";

const Example = () => (
  <Queue className="w-full max-w-md">
    <QueueSection defaultOpen>
      <QueueSectionTrigger>
        <QueueSectionLabel
          count={2}
          icon={<ListTodoIcon aria-hidden="true" className="size-4" />}
          label="Completed"
        />
      </QueueSectionTrigger>
      <QueueSectionContent>
        <QueueList>
          <QueueItem>
            <QueueItemIndicator completed />
            <QueueItemContent completed>
              Summarize the launch brief
            </QueueItemContent>
          </QueueItem>
          <QueueItem>
            <QueueItemIndicator completed />
            <QueueItemContent completed>Draft release notes</QueueItemContent>
          </QueueItem>
        </QueueList>
      </QueueSectionContent>
    </QueueSection>
  </Queue>
);

export default Example;
