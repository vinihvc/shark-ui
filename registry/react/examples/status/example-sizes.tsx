import { Status } from "@/registry/react/components/status";

const Example = () => (
  <div className="flex gap-4">
    <Status size="sm" variant="info" />
    <Status size="md" variant="warning" />
    <Status size="lg" variant="destructive" />
  </div>
);

export default Example;
