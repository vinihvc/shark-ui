"use client";

import { ClientOnly } from "@/registry/react/components/client-only";

const Example = () => (
  <ClientOnly
    fallback={
      <div className="rounded-xl border border-dashed bg-muted/50 px-4 py-3 text-muted-foreground text-sm">
        Loading…
      </div>
    }
  >
    <CurrentTime />
  </ClientOnly>
);

const CurrentTime = () => {
  const now = new Date();

  return (
    <div className="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
      Current time: {now.toLocaleTimeString()}
    </div>
  );
};

export default Example;
