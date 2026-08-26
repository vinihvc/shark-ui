import { ListTodoIcon } from "lucide-react";
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

const Example = () => (
  <Queue className="w-full max-w-md">
    <QueueSection defaultOpen>
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
);

export default Example;
