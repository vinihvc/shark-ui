import { Button } from "@/registry/react/components/button";
import {
  Hint,
  HintContent,
  HintTrigger,
} from "@/registry/react/components/hint";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Hint positioning={{ placement: "left" }}>
      <HintTrigger asChild>
        <Button variant="outline">Left</Button>
      </HintTrigger>
      <HintContent>Hint on the left</HintContent>
    </Hint>
    <Hint positioning={{ placement: "top" }}>
      <HintTrigger asChild>
        <Button variant="outline">Top</Button>
      </HintTrigger>
      <HintContent>Hint above</HintContent>
    </Hint>
    <Hint positioning={{ placement: "bottom" }}>
      <HintTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </HintTrigger>
      <HintContent>Hint below</HintContent>
    </Hint>
    <Hint positioning={{ placement: "right" }}>
      <HintTrigger asChild>
        <Button variant="outline">Right</Button>
      </HintTrigger>
      <HintContent>Hint on the right</HintContent>
    </Hint>
  </div>
);

export default Example;
