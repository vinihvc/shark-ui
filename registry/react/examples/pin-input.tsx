import {
  PinInput,
  PinInputSeparator,
  PinInputSlot,
} from "@/registry/react/components/pin-input";

const PinInputDemo = () => (
  <PinInput>
    <PinInputSlot index={0} />
    <PinInputSlot index={1} />
    <PinInputSlot index={2} />
    <PinInputSeparator />
    <PinInputSlot index={3} />
    <PinInputSlot index={4} />
    <PinInputSlot index={5} />
  </PinInput>
);

export default PinInputDemo;
