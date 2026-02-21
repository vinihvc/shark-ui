import { Status } from "@/registry/react/components/status";

const Example = () => (
  <div className="flex gap-4">
    <Status />
    <Status variant="info" />
    <Status variant="success" />
    <Status variant="warning" />
    <Status variant="destructive" />
  </div>
);

export default Example;
