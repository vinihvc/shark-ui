import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/registry/react/components/frame";

const Example = () => (
  <Frame className="w-full max-w-md">
    <FrameHeader>
      <FrameTitle>Section header</FrameTitle>
      <FrameDescription>Brief description about the section</FrameDescription>
    </FrameHeader>
    <FramePanel>
      <h2 className="font-semibold text-sm">Separated panel</h2>
      <p className="text-muted-foreground text-sm">Section description</p>
    </FramePanel>
    <FramePanel>
      <h2 className="font-semibold text-sm">Separated panel</h2>
      <p className="text-muted-foreground text-sm">Section description</p>
    </FramePanel>
  </Frame>
);

export default Example;
