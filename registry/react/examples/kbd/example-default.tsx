import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <Kbd>K</Kbd>
        <Kbd>⌘</Kbd>
        <Kbd>⌃</Kbd>
        <Kbd>⇧</Kbd>
      </div>
      <div className="flex gap-2">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
};

export default Example;
