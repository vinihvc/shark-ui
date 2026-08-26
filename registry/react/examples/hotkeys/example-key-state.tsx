"use client";

import { Badge } from "@registry/react/components/badge";
import { Card, CardContent } from "@registry/react/components/card";
import { Separator } from "@registry/react/components/separator";
import {
  useIsKeyPressed,
  usePressedKeys,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const Example = () => {
  const pressedKeys = usePressedKeys();
  const isShiftPressed = useIsKeyPressed({ hotkey: "shift" });

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Hold any key to see it tracked live
        </p>
        <Separator className="my-4" />
        <div className="flex items-center justify-between gap-2">
          <p className="text-muted-foreground text-sm">Currently pressed</p>
          <div className="flex min-h-8 flex-wrap items-center gap-1">
            {pressedKeys.length === 0 ? (
              <span className="text-muted-foreground text-sm">-</span>
            ) : (
              pressedKeys.map((key) => <Kbd key={key}>{key}</Kbd>)
            )}
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between gap-2">
          <p className="text-muted-foreground text-sm">Shift</p>
          <Badge variant="secondary">
            {isShiftPressed ? "Precision mode" : "Hold for precision"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default Example;
