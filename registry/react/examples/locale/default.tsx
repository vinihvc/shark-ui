"use client";

import { FormatRelativeTime } from "@/registry/react/components/format";
import { LocaleProvider } from "@/registry/react/components/locale";

const LocaleDemo = () => (
  <LocaleProvider locale="ar-BH">
    <div className="flex flex-col gap-4 rounded-lg border bg-muted/30 p-4">
      <p className="font-medium text-foreground text-sm">
        Locale: ar-BH (Arabic - Bahrain)
      </p>
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground text-sm">Relative time</span>
        <FormatRelativeTime value={new Date()} />
      </div>
    </div>
  </LocaleProvider>
);

export default LocaleDemo;
