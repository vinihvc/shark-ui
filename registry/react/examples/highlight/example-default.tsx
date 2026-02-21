import { Highlight } from "@/registry/react/components/highlight";

const HighlightDemo = () => (
  <p className="text-base text-foreground leading-relaxed">
    <Highlight
      query="component"
      text="Ark UI is a headless component library for building accessible web applications."
    />
  </p>
);

export default HighlightDemo;
