"use client";

import { useState } from "react";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";
import { IdeChat } from "./ide-chat";
import { IdeFileTree } from "./ide-file-tree";
import { IdeWorkspace } from "./ide-workspace";

export const AIIde = () => {
  const [path, setPath] = useState("src/utils/helpers.ts");

  return (
    <div className="h-svh min-h-0 bg-background">
      <Resizable
        className="h-full min-h-0"
        defaultSize={[18, 52, 30]}
        panels={[
          { id: "files", minSize: 14 },
          { id: "workspace", minSize: 30 },
          { id: "chat", minSize: 22 },
        ]}
      >
        <ResizablePanel className="min-h-0 border-e" id="files">
          <IdeFileTree onSelect={setPath} selectedPath={path} />
        </ResizablePanel>
        <ResizableResizeTrigger id="files:workspace" />
        <ResizablePanel className="min-h-0" id="workspace">
          <IdeWorkspace path={path} />
        </ResizablePanel>
        <ResizableResizeTrigger id="workspace:chat" />
        <ResizablePanel className="min-h-0 border-s" id="chat">
          <IdeChat />
        </ResizablePanel>
      </Resizable>
    </div>
  );
};
