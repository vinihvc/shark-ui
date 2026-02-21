import { Highlight } from "@/registry/react/components/highlight";

const Example = () => (
  <p className="text-base text-foreground leading-relaxed">
    <Highlight
      className="rounded bg-amber-200 px-1.5 font-bold text-amber-900 dark:bg-amber-900/50 dark:text-amber-100"
      query="spotlight"
      text="With the Highlight component, you can spotlight words."
    />
  </p>
);

export default Example;
