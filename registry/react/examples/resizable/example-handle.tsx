import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const Example = () => (
  <Resizable
    className="h-[200px] rounded-md border"
    defaultSize={[50, 50]}
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <ResizablePanel className="flex items-center justify-center" id="1">
      Panel 1
    </ResizablePanel>

    <ResizableResizeTrigger id="1:2" withHandle />

    <ResizablePanel className="flex items-center justify-center" id="2">
      Panel 2
    </ResizablePanel>
  </Resizable>
);

export default Example;
