import { Button } from "@/registry/react/components/button";
import {
  Hint,
  HintContent,
  HintTrigger,
} from "@/registry/react/components/hint";

const HintDemo = () => (
  <Hint>
    <HintTrigger asChild>
      <Button variant="outline">Hover</Button>
    </HintTrigger>
    <HintContent>This is a hint</HintContent>
  </Hint>
);

export default HintDemo;
