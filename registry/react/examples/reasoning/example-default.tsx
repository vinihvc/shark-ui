import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const Example = () => (
  <Reasoning className="max-w-lg" duration={8}>
    <ReasoningTrigger duration={8} />
    <ReasoningContent>
      The form already validates empty fields. I should add a format check next
      to `validateForm` and keep the regex in a helper so the UI can reuse it.
    </ReasoningContent>
  </Reasoning>
);

export default Example;
