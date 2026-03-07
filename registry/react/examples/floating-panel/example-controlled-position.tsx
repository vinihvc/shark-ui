"use client";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  Settings2Icon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelHeader,
  FloatingPanelMaximize,
  FloatingPanelMinimize,
  FloatingPanelRestore,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "@/registry/react/components/floating-panel";

const Example = () => {
  const [position, setPosition] = React.useState({ x: 200, y: 200 });

  return (
    <div className="flex flex-col gap-4">
      <FloatingPanel
        onPositionChange={(details) => setPosition(details.position)}
        position={position}
      >
        <FloatingPanelTrigger asChild>
          <Button variant="outline">Open</Button>
        </FloatingPanelTrigger>
        <FloatingPanelContent>
          <FloatingPanelHeader>
            <Settings2Icon />
            <FloatingPanelTitle>Settings</FloatingPanelTitle>
            <FloatingPanelControl>
              <FloatingPanelMinimize />
              <FloatingPanelMaximize />
              <FloatingPanelRestore />
              <FloatingPanelCloseTrigger asChild>
                <Button aria-label="Close" size="icon-sm">
                  <XIcon aria-hidden />
                </Button>
              </FloatingPanelCloseTrigger>
            </FloatingPanelControl>
          </FloatingPanelHeader>
          <FloatingPanelBody className="text-center text-muted-foreground text-sm">
            <p>
              Position: ({position.x}, {position.y}).{" "}
            </p>
            <p>Use the buttons to move the panel.</p>

            <div className="flex flex-col items-center gap-1">
              <div>
                <Button
                  aria-label="Move up"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, y: prev.y - 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <ChevronUpIcon aria-hidden />
                </Button>
              </div>

              <div className="flex gap-1">
                <Button
                  aria-label="Move left"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, x: prev.x - 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <ChevronLeftIcon aria-hidden />
                </Button>
                <Button
                  aria-label="Move down"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, y: prev.y + 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <ChevronDownIcon aria-hidden />
                </Button>
                <Button
                  aria-label="Move right"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, x: prev.x + 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <ChevronRightIcon aria-hidden />
                </Button>
              </div>
            </div>
          </FloatingPanelBody>
        </FloatingPanelContent>
      </FloatingPanel>
    </div>
  );
};

export default Example;
