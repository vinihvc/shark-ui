"use client";

import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerRootProvider,
  TimerSeparator,
  useTimer,
} from "@/registry/react/components/timer";

const RootProviderExample = () => {
  const timer = useTimer({ targetMs: 60 * 60 * 1000 });

  return (
    <div className="flex flex-col gap-4">
      <output className="text-muted-foreground text-sm">
        timer: {JSON.stringify(timer.time)}
      </output>
      <TimerRootProvider value={timer}>
        <TimerArea>
          <div className="flex flex-col items-center gap-0">
            <TimerItem type="hours" />
            <span className="text-muted-foreground text-xs">hours</span>
          </div>
          <TimerSeparator>:</TimerSeparator>
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
        <TimerControl className="flex gap-2">
          <TimerActionTrigger action="start" asChild>
            <Button size="sm" variant="outline">
              <PlayIcon />
              Start
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="resume" asChild>
            <Button size="sm" variant="outline">
              <PlayIcon />
              Resume
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="pause" asChild>
            <Button size="sm" variant="outline">
              <PauseIcon />
              Pause
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="reset" asChild>
            <Button size="sm" variant="outline">
              <RotateCcwIcon />
              Reset
            </Button>
          </TimerActionTrigger>
        </TimerControl>
      </TimerRootProvider>
    </div>
  );
};

export default RootProviderExample;
