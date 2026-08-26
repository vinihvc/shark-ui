"use client";

import { DateInput } from "@/registry/react/components/date-input";
import { useDateFormatter } from "@/registry/react/components/locale";

const Example = () => {
  const formatter = useDateFormatter({
    hour: "numeric",
    hourCycle: "h12",
    minute: "2-digit",
  });

  return (
    <DateInput
      className="w-full max-w-64"
      formatter={formatter}
      granularity="minute"
      hourCycle={12}
    />
  );
};

export default Example;
