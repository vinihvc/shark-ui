import { SegmentGroup } from "@/registry/react/components/segment-group";

const frameworks = ["React", "Solid", "Svelte", "Vue"];

const SegmentGroupDemo = () => (
  <SegmentGroup.Root defaultValue="React">
    <SegmentGroup.Indicator />
    {frameworks.map((framework) => (
      <SegmentGroup.Item key={framework} value={framework}>
        <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    ))}
  </SegmentGroup.Root>
);

export default SegmentGroupDemo;
