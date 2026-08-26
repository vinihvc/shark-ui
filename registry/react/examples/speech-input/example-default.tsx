"use client";

import { useCallback, useState } from "react";
import { SpeechInput } from "@/registry/react/components/speech-input";

const Example = () => {
  const [transcript, setTranscript] = useState("");

  const handleTranscriptionChange = useCallback((text: string) => {
    setTranscript((current) => (current ? `${current} ${text}` : text));
  }, []);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <SpeechInput onTranscriptionChange={handleTranscriptionChange} />
      <p className="min-h-10 w-full rounded-lg border bg-muted/40 px-3 py-2 text-muted-foreground text-sm">
        {transcript || "Transcript appears here after you speak."}
      </p>
    </div>
  );
};

export default Example;
