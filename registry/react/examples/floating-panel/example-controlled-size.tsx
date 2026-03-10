"use client";

import { Settings2Icon, XIcon } from "lucide-react";
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
  const [size, setSize] = React.useState({ width: 360, height: 200 });

  return (
    <FloatingPanel
      onSizeChange={(details) => setSize(details.size)}
      size={size}
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
            Size: {size.width} × {size.height}.
          </p>

          <p>Use the buttons above or drag the edges to resize.</p>

          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={() =>
                setSize((prev) => ({
                  ...prev,
                  width: prev.width - 50,
                  height: prev.height - 40,
                }))
              }
              variant="outline"
            >
              Shrink
            </Button>
            <Button
              className="flex-1"
              onClick={() =>
                setSize((prev) => ({
                  ...prev,
                  width: prev.width + 50,
                  height: prev.height + 40,
                }))
              }
              variant="outline"
            >
              Grow
            </Button>
          </div>
        </FloatingPanelBody>
      </FloatingPanelContent>
    </FloatingPanel>
  );
};

export default Example;
