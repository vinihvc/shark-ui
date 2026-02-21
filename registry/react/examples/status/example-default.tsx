import { Status } from "@/registry/react/components/status";

const StatusDemo = () => (
  <div className="flex gap-4">
    <Status />
    <Status variant="success" />
    <Status variant="info" />
    <Status variant="warning" />
    <Status variant="destructive" />
  </div>
);

export default StatusDemo;
