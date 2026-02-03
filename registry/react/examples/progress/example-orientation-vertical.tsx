import { Progress } from "@/registry/react/components/progress";

const Example = () => (
  <div className="flex w-full items-center justify-center">
    <Progress className="h-64" orientation="vertical" value={60} />
  </div>
);

export default Example;
