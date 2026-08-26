import { FormatTime } from "@/registry/react/components/format";

const Example = () => (
  <div className="flex flex-col gap-2">
    <FormatTime value={new Date("2026-08-24T14:30:00")} />
    <FormatTime
      amLabel="a.m."
      format="12h"
      pmLabel="p.m."
      value={new Date("2026-08-24T14:30:00")}
    />
  </div>
);

export default Example;
