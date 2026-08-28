"use client";

import { PlayIcon, RotateCcwIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Timer,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerReset,
  TimerSeparator,
  TimerStart,
} from "@/registry/react/components/timer";

const Example = () => {
  const [ticks, setTicks] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <output className="text-center text-muted-foreground text-sm tabular-nums">
        Ticks: {ticks} {completed ? " (completed)" : ""}
      </output>
      <Card className="rounded-3xl [--space:--spacing(6)]">
        <CardContent>
          <Timer
            className="items-center gap-4"
            onComplete={() => setCompleted(true)}
            onTick={() => setTicks((t) => t + 1)}
            targetMs={5 * 1000}
          >
            <TimerArea>
              <TimerItemGroup>
                <TimerItem type="minutes" />
                <TimerItemLabel>Minutes</TimerItemLabel>
              </TimerItemGroup>
              <TimerSeparator />
              <TimerItemGroup>
                <TimerItem type="seconds" />
                <TimerItemLabel>Seconds</TimerItemLabel>
              </TimerItemGroup>
            </TimerArea>
            <TimerControl>
              <TimerStart asChild>
                <Button aria-label="Start" size="icon-sm" variant="ghost">
                  <PlayIcon />
                </Button>
              </TimerStart>
              <TimerReset asChild>
                <Button aria-label="Reset" size="icon-sm" variant="ghost">
                  <RotateCcwIcon />
                </Button>
              </TimerReset>
            </TimerControl>
          </Timer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Example;
