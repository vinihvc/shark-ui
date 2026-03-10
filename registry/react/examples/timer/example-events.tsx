"use client";

import { PlayIcon, RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerSeparator,
} from "@/registry/react/components/timer";

const EventsExample = () => {
  const [ticks, setTicks] = useState(0);
  const [completed, setCompleted] = useState(false);

  return (
    <Timer
      targetMs={60 * 1000}
      onTick={() => setTicks((t) => t + 1)}
      onComplete={() => setCompleted(true)}
    >
      <TimerArea>
        <div className="flex flex-col items-center gap-0">
          <TimerItem type="minutes" />
          <span className="text-muted-foreground text-xs">minutes</span>
        </div>
        <TimerSeparator>:</TimerSeparator>
        <div className="flex flex-col items-center gap-0">
          <TimerItem type="seconds" />
          <span className="text-muted-foreground text-xs">seconds</span>
        </div>
      </TimerArea>
      <TimerControl className="flex flex-col gap-2">
        <div className="flex gap-2">
          <TimerActionTrigger action="start" asChild>
            <Button size="sm" variant="outline">
              <PlayIcon />
              Start
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="reset" asChild>
            <Button size="sm" variant="outline">
              <RotateCcwIcon />
              Reset
            </Button>
          </TimerActionTrigger>
        </div>
        <output className="text-muted-foreground text-sm">
          Ticks: {ticks}
          {completed ? " — Completed!" : ""}
        </output>
      </TimerControl>
    </Timer>
  );
};

export default EventsExample;
