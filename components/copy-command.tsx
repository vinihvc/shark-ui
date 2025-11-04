"use client";

import { CheckIcon, ClipboardIcon, TerminalIcon } from "lucide-react";
import React from "react";
// import { copyToClipboardWithMeta } from "@/components/copy-button";
import { Button } from "@/registry/react/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";
import { useConfig } from "@/store/config";

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<"pre"> & {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
}) {
  const [config, setConfig] = useConfig();
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const packageManager = config.packageManager || "pnpm";
  const tabs = React.useMemo(
    () => ({
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }),
    [__npm__, __pnpm__, __yarn__, __bun__]
  );

  const copyCommand = React.useCallback(() => {
    const command = tabs[packageManager];

    if (!command) {
      return;
    }

    // copyToClipboardWithMeta(command, {
    //   name: "copy_npm_command",
    //   properties: {
    //     command,
    //     pm: packageManager,
    //   },
    // });
    setHasCopied(true);
  }, [packageManager, tabs]);

  return (
    <div className="overflow-x-auto">
      <Tabs
        className="gap-0"
        onValueChange={(value) => {
          setConfig({
            ...config,
            // biome-ignore lint/suspicious/noExplicitAny: fix later
            packageManager: value as any,
          });
        }}
        value={packageManager}
      >
        <div className="flex items-center gap-2 border-border/50 border-b px-3 py-1">
          <div className="flex size-4 items-center justify-center rounded-[1px] bg-foreground opacity-70">
            <TerminalIcon className="size-3 text-code" />
          </div>
          <TabsList className="rounded-none bg-transparent p-0">
            {Object.entries(tabs).map(([key]) => (
              <TabsTrigger
                className="h-7 border border-transparent pt-0.5 data-[state=active]:border-input data-[state=active]:bg-accent data-[state=active]:shadow-none"
                key={key}
                value={key}
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => (
            <TabsContent className="mt-0 px-4 py-3.5" key={key} value={key}>
              <pre>
                <code
                  className="relative font-mono text-sm leading-none"
                  data-language="bash"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="absolute top-2 right-2 z-10 size-7 opacity-70 hover:opacity-100 focus-visible:opacity-100"
            data-part="copy-button"
            onClick={copyCommand}
            size="icon-md"
            variant="ghost"
          >
            <span className="sr-only">Copy</span>
            {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {hasCopied ? "Copied" : "Copy to Clipboard"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
