import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerSeparator,
} from "@/registry/react/components/timer";

const Example = () => (
  <Timer countdown startMs={5 * 60 * 1000}>
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
    <TimerControl className="flex gap-2">
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
    </TimerControl>
  </Timer>
);

export default Example;
