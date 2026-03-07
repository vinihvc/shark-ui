import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const Example = () => (
  <Resizable
    className="rounded-md border"
    defaultSize={[50, 50]}
    orientation="vertical"
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <ResizablePanel className="flex items-center justify-center" id="1">
      Top
    </ResizablePanel>

    <ResizableResizeTrigger id="1:2" />

    <ResizablePanel className="flex items-center justify-center" id="2">
      Bottom
    </ResizablePanel>
  </Resizable>
);

export default Example;
