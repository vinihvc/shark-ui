import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const Example = () => (
  <Resizable
    className="rounded-md border"
    defaultSize={[20, 60, 20]}
    panels={[
      { id: "1", minSize: 20 },
      { id: "2", minSize: 40 },
      { id: "3", minSize: 20 },
    ]}
  >
    <ResizablePanel className="flex items-center justify-center" id="1">
      Left
    </ResizablePanel>

    <ResizableResizeTrigger id="1:2" withHandle />

    <ResizablePanel className="flex items-center justify-center" id="2">
      Center
    </ResizablePanel>

    <ResizableResizeTrigger id="2:3" withHandle />

    <ResizablePanel className="flex items-center justify-center" id="3">
      Right
    </ResizablePanel>
  </Resizable>
);

export default Example;
