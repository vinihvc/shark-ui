import {
  Task,
  TaskItem,
  TaskItemContent,
  TaskItemDetail,
  TaskItemDetailFile,
  TaskItemTrigger,
} from "@/registry/react/components/task";

const TaskErrorDemo = () => (
  <Task className="max-w-lg" completed={1} total={3}>
    <TaskItem defaultOpen status="completed">
      <TaskItemTrigger title="Validate the settlement export" />
      <TaskItemContent>
        <TaskItemDetail>
          Confirmed the bank export contains 14,208 settlement rows.
        </TaskItemDetail>
      </TaskItemContent>
    </TaskItem>
    <TaskItem defaultOpen status="error">
      <TaskItemTrigger title="Backfill payment reconciliation records" />
      <TaskItemContent>
        <TaskItemDetail>
          Stopped at row 8,321: settlement ref_7F3A appears twice in
          <TaskItemDetailFile>
            exports/settlements-2026-08-27.csv
          </TaskItemDetailFile>
        </TaskItemDetail>
        <TaskItemDetail>
          The source export needs correction before the backfill can resume.
        </TaskItemDetail>
      </TaskItemContent>
    </TaskItem>
    <TaskItem status="pending">
      <TaskItemTrigger title="Apply the corrected reconciliation records" />
    </TaskItem>
  </Task>
);

export default TaskErrorDemo;
