import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const Example = () => (
  <Resizable
    className="rounded-md border"
    defaultSize={[50, 50]}
    orientation="horizontal"
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <ResizablePanel className="flex items-center justify-center" id="1">
      Left
    </ResizablePanel>

    <ResizableResizeTrigger id="1:2" />

    <ResizablePanel className="flex items-center justify-center" id="2">
      Right
    </ResizablePanel>
  </Resizable>
);

export default Example;
