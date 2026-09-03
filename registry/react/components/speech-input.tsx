"use client";

import { MicIcon, SquareIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Spinner } from "@/registry/react/components/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

interface SpeechRecognitionAlternativeLike {
  transcript: string;
}

interface SpeechRecognitionResultLike {
  isFinal: boolean;
  [alternativeIndex: number]: SpeechRecognitionAlternativeLike;
}

interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: {
    length: number;
    [resultIndex: number]: SpeechRecognitionResultLike;
  };
}

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onend: ((event: Event) => void) | null;
  onerror: ((event: Event) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
  stop: () => void;
}

const getSpeechRecognition = ():
  | (new () => SpeechRecognitionLike)
  | undefined => {
  if (typeof window === "undefined") {
    return;
  }
  const speechWindow = window as Window & {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
};

const getSpeechAriaLabel = (
  unavailable: boolean,
  listening: boolean
): string => {
  if (unavailable) {
    return "Speech input unavailable";
  }
  if (listening) {
    return "Stop listening";
  }
  return "Start voice input";
};

const SpeechInputIcon = ({
  listening,
  starting,
}: {
  listening: boolean;
  starting: boolean;
}) => {
  if (starting) {
    return <Spinner />;
  }
  if (listening) {
    return <SquareIcon aria-hidden="true" className="size-3 fill-current" />;
  }
  return <MicIcon aria-hidden="true" />;
};

interface SpeechInputProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "type"> {
  lang?: string;
  onListeningChange?: (listening: boolean) => void;
  onTranscriptionChange?: (text: string) => void;
}

export const SpeechInput = (props: SpeechInputProps) => {
  const {
    className,
    disabled,
    lang = "en-US",
    onListeningChange,
    onTranscriptionChange,
    size = "icon-sm",
    variant = "ghost",
    ...rest
  } = props;

  const recognitionRef = React.useRef<SpeechRecognitionLike | null>(null);
  const [supported, setSupported] = React.useState(false);
  const [listening, setListening] = React.useState(false);
  const [starting, setStarting] = React.useState(false);

  React.useEffect(() => {
    setSupported(Boolean(getSpeechRecognition()));
  }, []);

  React.useEffect(
    () => () => {
      recognitionRef.current?.stop();
      recognitionRef.current = null;
    },
    []
  );

  const setListeningState = (next: boolean) => {
    setListening(next);
    onListeningChange?.(next);
  };

  const unavailable = !supported;

  const button = (
    <Button
      aria-label={getSpeechAriaLabel(unavailable, listening)}
      aria-pressed={listening}
      className={cn(listening && "bg-accent text-accent-foreground", className)}
      data-listening={listening ? "" : undefined}
      data-slot="speech-input"
      disabled={disabled || unavailable || starting}
      onClick={() => {
        const SpeechRecognitionCtor = getSpeechRecognition();
        if (!SpeechRecognitionCtor) {
          return;
        }

        if (listening && recognitionRef.current) {
          recognitionRef.current.stop();
          return;
        }

        const recognition = new SpeechRecognitionCtor();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = lang;
        recognition.onresult = (event) => {
          let finalTranscript = "";
          for (
            let index = event.resultIndex;
            index < event.results.length;
            index += 1
          ) {
            const result = event.results[index];
            if (result?.isFinal) {
              finalTranscript += result[0]?.transcript ?? "";
            }
          }
          const trimmed = finalTranscript.trim();
          if (trimmed) {
            onTranscriptionChange?.(trimmed);
          }
        };
        recognition.onerror = () => {
          setStarting(false);
          setListeningState(false);
        };
        recognition.onend = () => {
          setStarting(false);
          setListeningState(false);
          recognitionRef.current = null;
        };

        recognitionRef.current = recognition;
        setStarting(true);
        try {
          recognition.start();
          setStarting(false);
          setListeningState(true);
        } catch {
          setStarting(false);
          setListeningState(false);
          recognitionRef.current = null;
        }
      }}
      size={size}
      variant={variant}
      {...rest}
    >
      <SpeechInputIcon listening={listening} starting={starting} />
    </Button>
  );

  if (!unavailable) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>
        Speech recognition is not available in this browser
      </TooltipContent>
    </Tooltip>
  );
};
