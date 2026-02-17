import { FormatRelativeTime } from "@/registry/react/components/format";

const FormatRelativeTimeShortExample = () => (
  <div className="flex flex-col gap-3">
    <div>
      <span className="text-muted-foreground text-sm">Long: </span>
      <FormatRelativeTime value={new Date("2025-05-05")} style="long" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Short: </span>
      <FormatRelativeTime value={new Date("2025-05-05")} style="short" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Narrow: </span>
      <FormatRelativeTime value={new Date("2025-05-05")} style="narrow" />
    </div>
  </div>
);

export default FormatRelativeTimeShortExample;
