import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const frameworks = ["React", "Solid", "Svelte", "Vue"];

const SegmentGroupDemo = () => (
  <SegmentGroup defaultValue="React">
    <SegmentGroupIndicator />
    {frameworks.map((framework) => (
      <SegmentGroupItem key={framework} value={framework}>
        <SegmentGroupItemText>{framework}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
  </SegmentGroup>
);

export default SegmentGroupDemo;
