import { Status } from "@/registry/react/components/status";

const StatusVariantsDemo = () => (
  <div className="flex flex-wrap gap-4">
    <Status.Root colorPalette="gray">
      <Status.Indicator />
      Gray
    </Status.Root>
    <Status.Root colorPalette="red">
      <Status.Indicator />
      Red
    </Status.Root>
    <Status.Root colorPalette="orange">
      <Status.Indicator />
      Orange
    </Status.Root>
    <Status.Root colorPalette="yellow">
      <Status.Indicator />
      Yellow
    </Status.Root>
    <Status.Root colorPalette="green">
      <Status.Indicator />
      Green
    </Status.Root>
    <Status.Root colorPalette="blue">
      <Status.Indicator />
      Blue
    </Status.Root>
    <Status.Root colorPalette="purple">
      <Status.Indicator />
      Purple
    </Status.Root>
    <Status.Root colorPalette="pink">
      <Status.Indicator />
      Pink
    </Status.Root>
  </div>
);

export default StatusVariantsDemo;
