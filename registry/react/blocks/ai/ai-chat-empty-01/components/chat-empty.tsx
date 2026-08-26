"use client";

import { BotIcon } from "lucide-react";
import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";

interface ChatEmptyProps {
  onSuggestion?: (text: string) => void;
  userName?: string;
}

export const ChatEmpty = ({
  onSuggestion,
  userName = "James",
}: ChatEmptyProps) => (
  <div className="flex min-h-svh flex-col items-center justify-center px-6 py-16 text-center">
    <span className="mb-5 grid size-8 place-items-center text-muted-foreground">
      <BotIcon aria-hidden="true" className="size-8" />
    </span>
    <h2 className="font-medium text-lg">Hello {userName}</h2>
    <p className="mt-1 text-muted-foreground text-sm">
      What can I help you with today?
    </p>
    <Suggestions className="mt-6 max-w-lg">
      <Suggestion
        onClick={onSuggestion}
        suggestion="Turn this launch brief into a plan"
      />
      <Suggestion
        onClick={onSuggestion}
        suggestion="Summarize research themes"
      />
      <Suggestion
        onClick={onSuggestion}
        suggestion="Draft a release checklist"
      />
    </Suggestions>
  </div>
);
