import { PinInput, PinInputSlot } from "@/registry/react/components/pin-input";

const PinInputDemo = () => (
  <PinInput invalid>
    <PinInputSlot index={0} />
    <PinInputSlot index={1} />
    <PinInputSlot index={2} />
    <PinInputSlot index={3} />
  </PinInput>
);

export default PinInputDemo;
