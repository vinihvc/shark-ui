import {
  Task,
  TaskItem,
  TaskItemContent,
  TaskItemDetail,
  TaskItemDetailFile,
  TaskItemTrigger,
  type TaskStatus,
} from "@/registry/react/components/task";

const Example = () => (
  <Task
    className="max-w-lg"
    completed={completedTaskCount}
    total={tasks.length}
  >
    {tasks.map((task) => (
      <TaskItem key={task.title} status={task.status}>
        <TaskItemTrigger status={task.status} title={task.title} />
        <TaskItemContent>
          <TaskItemDetail>
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
              <span>{task.detail}</span>
              {task.files.map((file) => (
                <TaskItemDetailFile key={file}>{file}</TaskItemDetailFile>
              ))}
            </div>
          </TaskItemDetail>
        </TaskItemContent>
      </TaskItem>
    ))}
  </Task>
);

const tasks = [
  {
    detail: "Reviewing access from the last 24 hours in",
    files: ["logs/audit/2026-08-27.json"],
    status: "completed",
    title: "Confirm which API key was exposed",
  },
  {
    detail: "Removing access and recording the incident in",
    files: ["app/api/keys/revoke/route.ts", "lib/audit-log.ts"],
    status: "in-progress",
    title: "Revoke the compromised production key",
  },
  {
    detail: "Rolling out the replacement through",
    files: [".github/workflows/deploy.yml"],
    status: "pending",
    title: "Deploy a replacement key to production",
  },
] as const satisfies Array<{
  detail: string;
  files: string[];
  status: TaskStatus;
  title: string;
}>;

const completedTaskCount = tasks.filter(
  (task) => task.status === "completed"
).length;

export default Example;
