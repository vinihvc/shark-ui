"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

const ESC = String.fromCharCode(27);
const ANSI_RE = new RegExp(`${ESC}\\[([0-9;]*)m`, "g");

const ANSI_CLASS: Record<string, string> = {
  "0": "",
  "31": "text-destructive-foreground",
  "32": "text-success-foreground",
  "33": "text-warning-foreground",
  "34": "text-info-foreground",
  "36": "text-info-foreground",
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

interface TerminalProps extends React.ComponentProps<typeof ark.div> {
  isStreaming?: boolean;
}

export const Terminal = (props: TerminalProps) => {
  const { className, isStreaming = false, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex w-full min-w-0 flex-col overflow-hidden rounded-xl border bg-card text-card-foreground",
        className
      )}
      data-slot="terminal"
      data-streaming={isStreaming ? "" : undefined}
      {...rest}
    />
  );
};

export const TerminalHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-w-0 items-center gap-2 border-b bg-muted/48 px-3 py-2 font-mono text-muted-foreground text-xs",
        className
      )}
      data-slot="terminal-header"
      {...rest}
    />
  );
};

interface TerminalContentProps extends React.ComponentProps<"pre"> {
  output?: string;
}

export const TerminalContent = (props: TerminalContentProps) => {
  const { className, output = "", children, ...rest } = props;
  const tokens = parseAnsi(output);

  return (
    <pre
      className={cn(
        "max-h-64 min-w-0 overflow-auto p-3 font-mono text-[0.8125rem] leading-6",
        className
      )}
      data-slot="terminal-content"
      {...rest}
    >
      {children ??
        tokens.map((token) => (
          <span className={token.className} key={token.start}>
            {token.text}
          </span>
        ))}
    </pre>
  );
};
