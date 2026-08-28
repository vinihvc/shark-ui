import {
  SegmentGroup,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const Example = () => (
  <SegmentGroup defaultValue="Account" pill>
    {items.map((item) => (
      <SegmentGroupItem className="px-3 py-1.5 text-sm" key={item} value={item}>
        <SegmentGroupItemText>{item}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
  </SegmentGroup>
);

const items = ["Profile", "Account", "Security"];

export default Example;
