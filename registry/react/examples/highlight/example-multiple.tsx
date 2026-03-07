import { Highlight } from "@/registry/react/components/highlight";

const Example = () => (
  <p className="text-base text-foreground leading-relaxed">
    <Highlight
      query={["spotlight", "emphasize", "accentuate"]}
      text="With the Highlight component, you can spotlight, emphasize and accentuate words."
    />
  </p>
);

export default Example;
