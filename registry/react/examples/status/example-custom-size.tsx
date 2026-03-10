import { Status } from "@/registry/react/components/status";

const Example = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Status className="size-4" variant="success" />
    <Status className="size-6" variant="info" />
    <Status className="size-8" variant="warning" />
  </div>
);

export default Example;
