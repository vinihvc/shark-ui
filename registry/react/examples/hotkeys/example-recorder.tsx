"use client";

import { Button } from "@registry/react/components/button";
import { Card, CardContent } from "@registry/react/components/card";
import { Separator } from "@registry/react/components/separator";
import React from "react";
import { useHotkeyRecorder } from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const Example = () => {
  const [binding, setBinding] = React.useState<string | null>(null);

  const recorder = useHotkeyRecorder({
    onClear: () => setBinding(null),
    onRecord: (hotkey) => setBinding(hotkey.display),
  });

  const shortcut = recorder.recording
    ? (recorder.value?.display ?? "…")
    : binding;

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <p className="text-muted-foreground text-sm">
          {recorder.recording
            ? "Press a shortcut · Esc cancels"
            : "Record a keyboard shortcut"}
        </p>

        <Separator className="my-4" />

        <div className="flex items-center justify-between gap-3">
          <Button
            disabled={recorder.recording}
            onClick={recorder.start}
            size="sm"
            variant="outline"
          >
            {recorder.recording ? "Listening…" : "Record"}
          </Button>
          {shortcut ? (
            <Kbd>{shortcut}</Kbd>
          ) : (
            <span className="text-muted-foreground text-sm">None</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Example;
