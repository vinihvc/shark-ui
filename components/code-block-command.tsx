"use client";

import { TerminalIcon } from "lucide-react";
import React from "react";
import { absoluteUrl } from "@/lib/url";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { type PackageManager, useConfig } from "@/store/config";
import { CopyButton } from "./copy-button";

interface CodeBlockCommandProps extends React.ComponentProps<"pre"> {
  __bun__?: string;
  __npm__?: string;
  __pnpm__?: string;
  __yarn__?: string;
}

export const CodeBlockCommand = (props: CodeBlockCommandProps) => {
  const { __npm__, __yarn__, __pnpm__, __bun__ } = props;

  const [config, setConfig] = useConfig();

  const packageManager = config.packageManager || "pnpm";

  const tabs = React.useMemo(() => {
    return {
      bun: __bun__,
      npm: __npm__,
      pnpm: __pnpm__,
      yarn: __yarn__,
    };
  }, [__npm__, __pnpm__, __yarn__, __bun__]);

  return (
    <div>
      <Tabs
        className="gap-0"
        onValueChange={({ value }) => {
          setConfig({
            ...config,
            packageManager: value as PackageManager,
          });
        }}
        value={packageManager}
      >
        <div className="flex items-center gap-2 border-border/64 border-b px-4 py-1 font-mono">
          <TerminalIcon aria-hidden className="size-4" />

          <TabsList className="bg-transparent">
            {Object.entries(tabs).map(([key]) => {
              return (
                <TabsTrigger className="rounded-lg" key={key} value={key}>
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:data-[orientation=horizontal]:mx-2 **:data-[slot=scroll-area-scrollbar]:data-[orientation=vertical]:my-2">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsContent
                className="mt-0 w-max px-4 py-3.5"
                key={key}
                value={key}
              >
                <pre>
                  <code
                    className="relative font-mono text-[.8125rem] leading-none"
                    data-language="bash"
                  >
                    {/* TODO: Remove replace when shadcn accept @shark to registry url*/}
                    {`${value?.replace("@shark", absoluteUrl("/r"))}.json`}
                  </code>
                </pre>
              </TabsContent>
            );
          })}
        </ScrollArea>
      </Tabs>

      <CopyButton
        className="absolute inset-e-1.5 top-1.5"
        value={
          tabs?.[packageManager]?.replace("@shark", absoluteUrl("/r")) ?? ""
        }
      />
    </div>
  );
};
