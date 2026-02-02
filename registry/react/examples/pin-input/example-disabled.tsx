import { PinInput, PinInputSlot } from "@/registry/react/components/pin-input";

const Example = () => (
  <PinInput disabled>
    <PinInputSlot index={0} />
    <PinInputSlot index={1} />
    <PinInputSlot index={2} />
    <PinInputSlot index={3} />
  </PinInput>
);

export default Example;
