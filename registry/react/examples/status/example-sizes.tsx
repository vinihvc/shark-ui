import { Status } from "@/registry/react/components/status";

const StatusSizesDemo = () => (
  <div className="flex flex-col gap-4">
    <Status.Root colorPalette="blue" size="sm">
      <Status.Indicator />
      In Review
    </Status.Root>
    <Status.Root colorPalette="red" size="md">
      <Status.Indicator />
      Error
    </Status.Root>
    <Status.Root colorPalette="green" size="lg">
      <Status.Indicator />
      Approved
    </Status.Root>
  </div>
);

export default StatusSizesDemo;
