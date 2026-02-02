import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-muted-foreground text-sm">Single keys:</p>
        <div className="flex gap-2">
          <Kbd>K</Kbd>
          <Kbd>⌘</Kbd>
          <Kbd>⌃</Kbd>
          <Kbd>⇧</Kbd>
        </div>
      </div>
      <div>
        <p className="mb-2 text-muted-foreground text-sm">Key combinations:</p>
        <div className="flex gap-2">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>Alt</Kbd>
            <Kbd>Delete</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  );
};

export default Example;
