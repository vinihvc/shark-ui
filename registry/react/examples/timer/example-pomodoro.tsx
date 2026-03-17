"use client";

import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerSeparator,
} from "@/registry/react/components/timer";

const PomodoroExample = () => {
  const [isWorking, setIsWorking] = React.useState(true);
  const [cycles, setCycles] = React.useState(0);

  const handleComplete = () => {
    setIsWorking(!isWorking);
    if (!isWorking) {
      setCycles((c) => c + 1);
    }
  };

  return (
    <Timer
      countdown
      onComplete={handleComplete}
      startMs={isWorking ? 25 * 60 * 1000 : 5 * 60 * 1000}
    >
      <h2 className="font-semibold text-lg">
        {isWorking ? "Work Session" : "Break Session"}
      </h2>
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
        </div>
        <output className="text-muted-foreground text-sm">
          Completed cycles: {cycles}
        </output>
      </TimerControl>
    </Timer>
  );
};

export default PomodoroExample;
