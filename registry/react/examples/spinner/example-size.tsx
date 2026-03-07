import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Spinner className="size-4" />
    <Spinner className="size-6" />
    <Spinner className="size-8" />
  </div>
);

export default Example;
