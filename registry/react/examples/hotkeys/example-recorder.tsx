"use client";

import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import { useHotkeyRecorder } from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const Example = () => {
  const [binding, setBinding] = useState<string | null>(null);
  const [lastEvent, setLastEvent] = useState<string | null>(null);

  const recorder = useHotkeyRecorder({
    onCancel: () => setLastEvent("cancelled"),
    onClear: () => {
      setBinding(null);
      setLastEvent("cleared");
    },
    onRecord: (hotkey) => {
      setBinding(hotkey.display);
      setLastEvent("recorded");
    },
  });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <p className="text-muted-foreground text-sm">
        Click record, then press a shortcut. Esc cancels, Backspace clears.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          disabled={recorder.recording}
          onClick={recorder.start}
          variant="outline"
        >
          {recorder.recording ? "Listening…" : "Record shortcut"}
        </Button>
        {recorder.recording ? (
          <Kbd>{recorder.value?.display ?? "Press a key"}</Kbd>
        ) : null}
      </div>
      <p className="text-sm">
        <span className="text-muted-foreground">Bound to </span>
        {binding ? (
          <Kbd className="align-middle">{binding}</Kbd>
        ) : (
          <span className="text-foreground">nothing yet</span>
        )}
      </p>
      <p className="text-muted-foreground text-sm">
        Last event: {lastEvent ?? "none"}
      </p>
    </div>
  );
};

export default Example;
