import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const SegmentGroupDemo = () => (
  <SegmentGroup className="rounded-lg" defaultValue="Profile">
    <SegmentGroupIndicator />
    {items.map((item) => (
      <SegmentGroupItem className="px-2 py-1.5 text-sm" key={item} value={item}>
        <SegmentGroupItemText>{item}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
  </SegmentGroup>
);

const items = ["Profile", "Account", "Security", "Notifications"];

export default SegmentGroupDemo;
