import { GlobeIcon, PaperclipIcon } from "lucide-react";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";

const Example = () => (
  <PromptInput className="max-w-lg">
    <PromptInputTextarea
      aria-label="Prompt"
      disabled
      placeholder="Ask the agent to do something…"
    />
    <PromptInputFooter>
      <PromptInputTools>
        <PromptInputButton aria-label="Attach file" disabled size="icon-xs">
          <PaperclipIcon aria-hidden="true" />
        </PromptInputButton>
        <PromptInputButton disabled size="xs" variant="outline">
          <GlobeIcon aria-hidden="true" />
          Search
        </PromptInputButton>
      </PromptInputTools>
      <PromptInputSubmit disabled />
    </PromptInputFooter>
  </PromptInput>
);

export default Example;
