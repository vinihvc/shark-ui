import { CircleAlertIcon } from "lucide-react";
import {
  TaskItem,
  TaskItemContent,
  TaskItemDetail,
  TaskItemTrigger,
} from "@/registry/react/components/task";

const Example = () => (
  <TaskItem className="max-w-md" defaultOpen status="error">
    <TaskItemTrigger title="Refresh the warehouse inventory cache">
      <CircleAlertIcon className="size-4 shrink-0 text-destructive-foreground" />
      <span className="min-w-0 flex-1 truncate font-medium">
        Refresh the warehouse inventory cache
      </span>
    </TaskItemTrigger>
    <TaskItemContent>
      <TaskItemDetail>
        Retry after the inventory provider resolves its maintenance window.
      </TaskItemDetail>
    </TaskItemContent>
  </TaskItem>
);

export default Example;
