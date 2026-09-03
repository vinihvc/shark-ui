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
  <PromptInput className="max-w-lg" status="streaming">
    <PromptInputTextarea
      aria-label="Prompt"
      defaultValue="Summarize the latest deploy."
      placeholder="Ask the agent to do something…"
    />
    <PromptInputFooter>
      <PromptInputTools>
        <PromptInputButton aria-label="Attach file" size="icon-xs">
          <PaperclipIcon aria-hidden="true" />
        </PromptInputButton>
        <PromptInputButton size="xs" variant="outline">
          <GlobeIcon aria-hidden="true" />
          Search
        </PromptInputButton>
      </PromptInputTools>
      <PromptInputSubmit />
    </PromptInputFooter>
  </PromptInput>
);

export default Example;
