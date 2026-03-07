import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <InputGroup className="w-full max-w-xs">
    <InputGroupInput disabled placeholder="Processing…" type="search" />
    <InputGroupAddon align="inline-end">
      <Spinner />
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
