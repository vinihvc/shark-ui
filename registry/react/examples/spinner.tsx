import { Spinner } from "@/registry/react/components/spinner";

const SpinnerDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Spinner />

    <Spinner className="size-8" />

    <Spinner className="size-12" />

    <Spinner className="size-16" />

    <Spinner className="size-20" />
  </div>
);

export default SpinnerDemo;
