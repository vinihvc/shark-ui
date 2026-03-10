import { Status } from "@/registry/react/components/status";

const Example = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Status className="bg-amber-500" variant="default" />
    <Status className="bg-teal-500" variant="default" />
    <Status className="bg-purple-500" variant="default" />
  </div>
);

export default Example;
