import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => (
  <div className="text-muted-foreground text-sm">
    Use{" "}
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </KbdGroup>{" "}
    to open the command palette
  </div>
);

export default Example;
