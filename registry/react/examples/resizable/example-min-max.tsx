import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const Example = () => (
  <Resizable
    className="rounded-md border"
    defaultSize={[30, 70]}
    panels={[{ id: "1", minSize: 25, maxSize: 40 }, { id: "2" }]}
  >
    <ResizablePanel className="flex items-center justify-center" id="1">
      Sidebar
    </ResizablePanel>

    <ResizableResizeTrigger id="1:2" withHandle />

    <ResizablePanel className="flex items-center justify-center" id="2">
      Content
    </ResizablePanel>
  </Resizable>
);

export default Example;
