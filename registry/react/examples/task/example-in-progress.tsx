import {
  Task,
  TaskItem,
  TaskItemContent,
  TaskItemDetail,
  TaskItemDetailFile,
  TaskItemTrigger,
} from "@/registry/react/components/task";

const TaskInProgressDemo = () => (
  <Task className="max-w-lg" completed={1} total={3}>
    <TaskItem defaultOpen status="completed">
      <TaskItemTrigger title="Collect approved tenant documents" />
      <TaskItemContent>
        <TaskItemDetail>
          Collected 428 documents from
          <TaskItemDetailFile>content/customers/acme</TaskItemDetailFile>
        </TaskItemDetail>
      </TaskItemContent>
    </TaskItem>
    <TaskItem status="in-progress">
      <TaskItemTrigger title="Index the tenant knowledge base" />
      <TaskItemContent>
        <TaskItemDetail>
          Creating embeddings for 312 of 428 documents.
        </TaskItemDetail>
        <TaskItemDetail>
          The next batch includes
          <TaskItemDetailFile>security/incident-response.md</TaskItemDetailFile>
        </TaskItemDetail>
      </TaskItemContent>
    </TaskItem>
    <TaskItem status="pending">
      <TaskItemTrigger title="Publish the tenant search index" />
    </TaskItem>
  </Task>
);

export default TaskInProgressDemo;
