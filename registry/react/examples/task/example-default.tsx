import {
  Task,
  TaskContent,
  TaskItemFile,
  TaskList,
  TaskTrigger,
} from "@/registry/react/components/task";

const Example = () => (
  <TaskList className="max-w-lg">
    <Task status="completed">
      <TaskTrigger status="completed" title="Search for validation patterns" />
      <TaskContent>
        <TaskItemFile>src/utils/helpers.ts</TaskItemFile>
      </TaskContent>
    </Task>
    <Task status="in-progress">
      <TaskTrigger status="in-progress" title="Update the form error copy" />
      <TaskContent>
        <TaskItemFile>src/app.tsx</TaskItemFile>
      </TaskContent>
    </Task>
  </TaskList>
);

export default Example;
