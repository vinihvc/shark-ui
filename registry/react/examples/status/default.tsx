import { Status } from "@/registry/react/components/status";

const StatusDemo = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-wrap gap-4">
      <Status.Root colorPalette="green">
        <Status.Indicator />
        Success
      </Status.Root>
      <Status.Root colorPalette="red">
        <Status.Indicator />
        Error
      </Status.Root>
      <Status.Root colorPalette="yellow">
        <Status.Indicator />
        Warning
      </Status.Root>
      <Status.Root colorPalette="blue">
        <Status.Indicator />
        Info
      </Status.Root>
    </div>
  </div>
);

export default StatusDemo;
