import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Task Manager Template",
  description:
    "Task manager with task creation, editing, and deletion. Includes task completion tracking and progress tracking.",
  url: "/templates/task-manager",
});

const TaskManagerTemplateLayout = (
  props: LayoutProps<"/templates/task-manager">
) => {
  const { children } = props;

  return children;
};

export default TaskManagerTemplateLayout;
