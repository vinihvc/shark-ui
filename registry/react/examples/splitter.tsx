import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/registry/react/components/splitter";

const SplitterDemo = () => (
  <Splitter
    className="rounded-md border"
    defaultSize={[50, 50]}
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <SplitterPanel className="flex items-center justify-center" id="1">
      Panel 1
    </SplitterPanel>

    <SplitterResizeTrigger id="1:2" />

    <SplitterPanel id="2">
      <Splitter
        defaultSize={[50, 50]}
        orientation="vertical"
        panels={[{ id: "3" }, { id: "4" }]}
      >
        <SplitterPanel className="flex items-center justify-center" id="3">
          Panel 2
        </SplitterPanel>

        <SplitterResizeTrigger id="3:4" />

        <SplitterPanel className="flex items-center justify-center" id="4">
          Panel 3
        </SplitterPanel>
      </Splitter>
    </SplitterPanel>
  </Splitter>
);

export default SplitterDemo;
