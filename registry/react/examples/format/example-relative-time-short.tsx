import { FormatRelativeTime } from "@/registry/react/components/format";

const FormatRelativeTimeShortExample = () => (
  <div className="flex flex-col gap-4">
    <div>
      <span className="text-muted-foreground text-sm">Long: </span>
      <FormatRelativeTime style="long" value={new Date("2025-05-05")} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Short: </span>
      <FormatRelativeTime style="short" value={new Date("2025-05-05")} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Narrow: </span>
      <FormatRelativeTime style="narrow" value={new Date("2025-05-05")} />
    </div>
  </div>
);

export default FormatRelativeTimeShortExample;
