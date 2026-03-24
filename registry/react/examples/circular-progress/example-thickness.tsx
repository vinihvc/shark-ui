import { CircularProgress } from "@/registry/react/components/circular-progress";

const Example = () => (
  <div className="flex flex-wrap items-center gap-6">
    <CircularProgress size={24} thickness={2} value={35} />
    <CircularProgress size={66} thickness={6} value={62} />
    <CircularProgress size={100} thickness={8} value={84} />
  </div>
);

export default Example;
