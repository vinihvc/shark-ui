"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";

interface CodeBlockContextValue {
  code: string;
}

const [CodeBlockProvider, useCodeBlock] = createContext<CodeBlockContextValue>({
  name: "CodeBlockContext",
  providerName: "CodeBlock",
});

interface CodeBlockProps extends React.ComponentProps<typeof ark.div> {
  code?: string;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { className, code = "", children, ...rest } = props;

  const value = React.useMemo(() => ({ code }), [code]);

  return (
    <CodeBlockProvider value={value}>
      <ark.div
        className={cn(
          "flex w-full min-w-0 flex-col overflow-hidden rounded-xl border bg-card text-card-foreground",
          className
        )}
        data-slot="code-block"
        {...rest}
      >
        {children}
      </ark.div>
    </CodeBlockProvider>
  );
};

export const CodeBlockHeader = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-w-0 items-center gap-2 border-b bg-muted/48 px-4 py-2.5 text-muted-foreground text-xs",
        "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        className
      )}
      data-slot="code-block-header"
      {...rest}
    />
  );
};

export const CodeBlockTitle = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("min-w-0 flex-1 truncate font-mono", className)}
      data-slot="code-block-title"
      {...rest}
    />
  );
};

export const CodeBlockCopy = (
  props: Omit<React.ComponentProps<typeof Clipboard>, "value" | "children">
) => {
  const { className, ...rest } = props;

  const { code } = useCodeBlock();

  return (
    <Clipboard className={cn("ms-auto", className)} value={code} {...rest}>
      <ClipboardTrigger asChild>
        <Button
          aria-label="Copy code"
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <ClipboardIndicator />
        </Button>
      </ClipboardTrigger>
    </Clipboard>
  );
};

interface CodeBlockContentProps extends React.ComponentProps<typeof ark.pre> {
  showLineNumbers?: boolean;
}

export const CodeBlockContent = (props: CodeBlockContentProps) => {
  const { showLineNumbers = false, className, children, ...rest } = props;

  const { code } = useCodeBlock();

  const text = typeof children === "string" ? children : code;

  const keyedLines: { key: string; line: string; lineNumber: number }[] = [];
  let lineNumber = 0;

  for (const line of text.split("\n")) {
    lineNumber += 1;
    keyedLines.push({
      key: `${lineNumber}:${line}`,
      line,
      lineNumber,
    });
  }

  return (
    <ark.pre
      className={cn(
        "max-h-80 min-w-0 overflow-auto p-3 font-mono text-[0.8125rem] leading-6",
        className
      )}
      data-slot="code-block-content"
      {...rest}
    >
      <code className="grid min-w-max">
        {keyedLines.map((entry) => (
          <span className="flex min-h-6" key={entry.key}>
            {showLineNumbers ? (
              <span className="w-8 shrink-0 select-none pe-4 text-end text-muted-foreground">
                {entry.lineNumber}
              </span>
            ) : null}
            <span>{entry.line || " "}</span>
          </span>
        ))}
      </code>
    </ark.pre>
  );
};
