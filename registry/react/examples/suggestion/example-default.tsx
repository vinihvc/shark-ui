import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";

const Example = () => (
  <Suggestions>
    <Suggestion suggestion="Summarize this brief" />
    <Suggestion suggestion="Draft a launch checklist" />
    <Suggestion suggestion="Find risks in the plan" />
  </Suggestions>
);

export default Example;
