"use client";

import { ark } from "@ark-ui/react/factory";
import React from "react";
import { cn } from "@/lib/utils";
import {
  ScrollArea,
  useScrollArea,
} from "@/registry/react/components/scroll-area";

interface TerminalContextValue {
  autoScroll: boolean;
  output: string;
}

const TerminalContext = React.createContext<TerminalContextValue>({
  autoScroll: true,
  output: "",
});

interface TerminalProps extends React.ComponentProps<typeof ark.div> {
  /**
   * Follow new output in the viewport.
   */
  autoScroll?: boolean;
  /**
   * The output of the terminal.
   */
  output?: string;
}

export const Terminal = (props: TerminalProps) => {
  const { autoScroll = true, className, output = "", ...rest } = props;

  const value = React.useMemo(
    () => ({
      autoScroll,
      output,
    }),
    [autoScroll, output]
  );

  return (
    <TerminalContext.Provider value={value}>
      <ark.div
        className={cn(
          "w-full min-w-0",
          "flex flex-col",
          "bg-card",
          "text-card-foreground",
          "rounded-xl border",
          "overflow-hidden",
          className
        )}
        data-slot="terminal"
        {...rest}
      />
    </TerminalContext.Provider>
  );
};

const TerminalFollow = () => {
  const { autoScroll, output } = _useTerminal();
  const { scrollToEdge } = useScrollArea();

  const followOutput = React.useEffectEvent((_nextOutput: string) => {
    if (!autoScroll) {
      return;
    }

    scrollToEdge({ edge: "bottom" });
  });

  React.useLayoutEffect(() => {
    followOutput(output);
  }, [output]);

  return null;
};

export const TerminalHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0",
        "flex items-center gap-2",
        "px-4 py-2.5",
        "bg-muted/48",
        "font-mono text-muted-foreground text-xs",
        "border-b",
        "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        className
      )}
      data-slot="terminal-header"
      {...rest}
    />
  );
};

export const TerminalAction = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("ms-auto flex shrink-0 items-center gap-1", className)}
      data-slot="terminal-action"
      {...rest}
    />
  );
};

interface TerminalContentProps extends React.ComponentProps<"div"> {
  /**
   * The output of the terminal. Falls back to `output` on `Terminal`.
   */
  output?: string;
}

export const TerminalContent = (props: TerminalContentProps) => {
  const { className, output: outputProp, children, ...rest } = props;

  const { output: outputFromContext } = _useTerminal();
  const output = outputProp ?? outputFromContext;

  const tokens = parseAnsi(output);

  return (
    <div
      className={cn(
        "min-h-0 w-full min-w-0",
        "flex flex-1 flex-col",
        "overflow-hidden",
        className
      )}
      data-slot="terminal-content"
      {...rest}
    >
      <ScrollArea className="min-h-0 w-full flex-1">
        <TerminalFollow />
        <pre className="w-max min-w-full p-3 font-mono text-[0.8125rem] leading-6">
          {children ??
            tokens.map((token) => (
              <span className={token.className} key={token.start}>
                {token.text}
              </span>
            ))}
        </pre>
      </ScrollArea>
    </div>
  );
};

const ESC = String.fromCharCode(27);
const ANSI_RE = new RegExp(`${ESC}\\[([0-9;]*)m`, "g");

const ANSI_CLASS: Record<string, string> = {
  "0": "",
  "31": "text-destructive-foreground",
  "32": "text-success-foreground",
  "33": "text-warning-foreground",
  "34": "text-info-foreground",
  "36": "text-info-foreground ",
  "90": "text-muted-foreground",
};

interface AnsiToken {
  className: string;
  start: number;
  text: string;
}

export const parseAnsi = (value: string): AnsiToken[] => {
  const tokens: AnsiToken[] = [];
  let lastIndex = 0;
  let currentClass = "";

  for (const match of value.matchAll(ANSI_RE)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      tokens.push({
        className: currentClass,
        start: lastIndex,
        text: value.slice(lastIndex, index),
      });
    }
    const codes = (match[1] ?? "0").split(";");
    for (const code of codes) {
      currentClass = ANSI_CLASS[code] ?? currentClass;
      if (code === "0") {
        currentClass = "";
      }
    }
    lastIndex = index + match[0].length;
  }

  if (lastIndex < value.length) {
    tokens.push({
      className: currentClass,
      start: lastIndex,
      text: value.slice(lastIndex),
    });
  }

  return tokens;
};

/**
 * Visible terminal text with ANSI SGR codes removed. Line breaks are kept.
 */
export const toPlainOutput = (value: string): string =>
  parseAnsi(value)
    .map((token) => token.text)
    .join("");

const _useTerminal = () => React.useContext(TerminalContext);
