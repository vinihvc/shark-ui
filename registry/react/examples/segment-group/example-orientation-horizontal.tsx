import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const Example = () => (
  <SegmentGroup
    className="rounded-lg"
    defaultValue="Profile"
    orientation="horizontal"
  >
    <SegmentGroupIndicator />
    {items.map((item) => (
      <SegmentGroupItem className="px-2 py-1.5" key={item} value={item}>
        <SegmentGroupItemText>{item}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
  </SegmentGroup>
);

const items = ["Profile", "Account", "Security", "Notifications"];

export default Example;
