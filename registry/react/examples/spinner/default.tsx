import { Spinner } from "@/registry/react/components/spinner";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../../components/item";

const SpinnerDemo = () => (
  <div className="flex w-full max-w-xs flex-col gap-4">
    <Item className="border- rounded-full" variant="muted">
      <ItemMedia>
        <Spinner />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="line-clamp-1">Generating image...</ItemTitle>
      </ItemContent>
      <ItemContent className="flex-none justify-end">
        <span className="text-sm tabular-nums">78%</span>
      </ItemContent>
    </Item>
  </div>
);

export default SpinnerDemo;
