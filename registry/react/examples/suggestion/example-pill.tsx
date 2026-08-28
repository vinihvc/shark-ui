import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";

const Example = () => (
  <Suggestions>
    <Suggestion pill suggestion="Summarize this brief" />
    <Suggestion pill suggestion="Draft a launch checklist" />
    <Suggestion pill suggestion="Find risks in the plan" />
    <Suggestion pill={false} suggestion="Square chip" />
  </Suggestions>
);

export default Example;
