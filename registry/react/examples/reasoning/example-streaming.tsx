import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const Example = () => (
  <Reasoning className="max-w-lg" defaultOpen isStreaming>
    <ReasoningTrigger isStreaming />
    <ReasoningContent>
      Scanning helpers.ts for the current validation path...
    </ReasoningContent>
  </Reasoning>
);

export default Example;
