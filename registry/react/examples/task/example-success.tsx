import {
  Task,
  TaskItem,
  TaskItemContent,
  TaskItemDetail,
  TaskItemDetailFile,
  TaskItemTrigger,
} from "@/registry/react/components/task";

const TaskSuccessDemo = () => (
  <Task className="max-w-lg" completed={3} total={3}>
    <TaskItem defaultOpen status="completed">
      <TaskItemTrigger title="Export active accounts" />
      <TaskItemContent>
        <TaskItemDetail>
          Exported 1,842 active accounts from
          <TaskItemDetailFile>identity/active-accounts.csv</TaskItemDetailFile>
        </TaskItemDetail>
      </TaskItemContent>
    </TaskItem>
    <TaskItem defaultOpen status="completed">
      <TaskItemTrigger title="Flag inactive privileged accounts" />
      <TaskItemContent>
        <TaskItemDetail>
          Found 12 accounts that require review in
          <TaskItemDetailFile>reviews/privileged-access.md</TaskItemDetailFile>
        </TaskItemDetail>
      </TaskItemContent>
    </TaskItem>
    <TaskItem defaultOpen status="completed">
      <TaskItemTrigger title="Publish the quarterly access review" />
      <TaskItemContent>
        <TaskItemDetail>
          Shared the review package with Security Operations.
        </TaskItemDetail>
      </TaskItemContent>
    </TaskItem>
  </Task>
);

export default TaskSuccessDemo;
