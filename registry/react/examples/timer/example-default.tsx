import { PauseIcon, PlayIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerSeparator,
} from "@/registry/react/components/timer";

const TimerDemo = () => (
  <Timer startMs={40 * 60 * 1000} targetMs={60 * 60 * 1000}>
    <TimerArea>
      <div className="flex flex-col items-center gap-0">
        <TimerItem type="days" />
        <span className="text-muted-foreground text-xs">days</span>
      </div>
      <TimerSeparator>:</TimerSeparator>
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
          Play
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
    </TimerControl>
  </Timer>
);

export default TimerDemo;
