import {
  PinInput,
  PinInputSeparator,
  PinInputSlot,
} from "@/registry/react/components/pin-input";

const Example = () => (
  <PinInput>
    <PinInputSlot index={0} />
    <PinInputSlot index={1} />
    <PinInputSeparator />
    <PinInputSlot index={2} />
    <PinInputSlot index={3} />
    <PinInputSeparator />
    <PinInputSlot index={4} />
    <PinInputSlot index={5} />
  </PinInput>
);

export default Example;
