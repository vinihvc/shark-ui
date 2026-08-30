import {
  TaskItem,
  TaskItemContent,
  TaskItemDetail,
  TaskItemDetailFile,
  TaskItemTrigger,
} from "@/registry/react/components/task";

const Example = () => (
  <TaskItem className="max-w-lg" defaultOpen status="completed">
    <TaskItemTrigger title="Archive resolved support conversations" />
    <TaskItemContent>
      <TaskItemDetail>
        Archived 42 conversations and saved the export to
        <TaskItemDetailFile>exports/support-archive.csv</TaskItemDetailFile>
      </TaskItemDetail>
    </TaskItemContent>
  </TaskItem>
);

export default Example;
