import {
  Plan,
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@/registry/react/components/plan";
import {
  Task,
  TaskContent,
  TaskItemFile,
  TaskTrigger,
} from "@/registry/react/components/task";

const Example = () => (
  <Plan className="max-w-lg">
    <PlanHeader>
      <div className="min-w-0">
        <PlanTitle>Add email validation</PlanTitle>
        <PlanDescription>Update the helper and the form.</PlanDescription>
      </div>
      <PlanAction>
        <PlanTrigger />
      </PlanAction>
    </PlanHeader>
    <PlanContent>
      <Task status="completed">
        <TaskTrigger status="completed" title="Read current validator" />
        <TaskContent>
          <TaskItemFile>src/utils/helpers.ts</TaskItemFile>
        </TaskContent>
      </Task>
      <Task status="in-progress">
        <TaskTrigger status="in-progress" title="Patch isValidEmail" />
        <TaskContent>
          <TaskItemFile>src/utils/helpers.ts</TaskItemFile>
          <TaskItemFile>src/app.tsx</TaskItemFile>
        </TaskContent>
      </Task>
      <Task status="pending">
        <TaskTrigger status="pending" title="Run unit tests" />
      </Task>
    </PlanContent>
  </Plan>
);

export default Example;
