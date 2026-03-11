import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

export const InputGroupButtonExample = () => {
  return (
    <InputGroup className="max-w-80">
      <InputGroupInput placeholder="Your email" type="email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="xs" variant="ghost">
          Subscribe
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};
