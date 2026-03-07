import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const ResizableDemo = () => (
  <Resizable
    className="rounded-md border"
    defaultSize={[50, 50]}
    panels={[
      { id: "1", minSize: 10 },
      { id: "2", minSize: 10 },
    ]}
  >
    <ResizablePanel className="flex h-full items-center justify-center" id="1">
      One
    </ResizablePanel>

    <ResizableResizeTrigger id="1:2" />

    <ResizablePanel id="2">
      <Resizable
        defaultSize={[50, 50]}
        orientation="vertical"
        panels={[
          { id: "3", minSize: 10 },
          { id: "4", minSize: 10 },
        ]}
      >
        <ResizablePanel className="flex items-center justify-center" id="3">
          Two
        </ResizablePanel>

        <ResizableResizeTrigger id="3:4" />

        <ResizablePanel className="flex items-center justify-center" id="4">
          Three
        </ResizablePanel>
      </Resizable>
    </ResizablePanel>
  </Resizable>
);

export default ResizableDemo;
