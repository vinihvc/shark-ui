/** biome-ignore-all lint/correctness/noConstAssign: it's ok */
/** biome-ignore-all lint/style/noParameterAssign: it's ok */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import type React from "react";
import { REGISTRY_PATH } from "@/config/constants";
import { cn } from "@/lib/utils";
import { replaceContentForCopy } from "@/utils/formatter";
import { CodeBlock } from "./code-block";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";
import { CopyButton } from "./copy-button";

export interface ComponentSourceProps
  extends React.ComponentProps<typeof CodeBlock> {
  /**
   * Whether to make the code block collapsible
   *
   * @default true
   */
  isCollapsible?: boolean;
  /**
   * The language of the code block
   */
  language?: string;
  /**
   * The source code to display
   */
  src?: string;
  /**
   * The title of the code block
   */
  title?: string;
}

export const ComponentSource = (props: ComponentSourceProps) => {
  const {
    language = "tsx",
    src,
    code,
    title,
    isCollapsible = true,
    className,
  } = props;

  let codeContent: string | undefined;

  if (code) {
    codeContent = code;
  }

  if (src) {
    const sourcePath = join(
      /* turbopackIgnore: true */
      process.cwd(),
      REGISTRY_PATH,
      src
    );
    codeContent = readFileSync(
      /* turbopackIgnore: true */
      sourcePath,
      "utf-8"
    );
  }

  if (!codeContent) {
    throw new Error("Code content not found");
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  const replacedCode = replaceContentForCopy(codeContent);

  if (isCollapsible) {
    return (
      <div className="relative">
        <CodeCollapsibleWrapper className={className}>
          <CodeBlock
            code={replacedCode}
            // Copy button is not working when the collapsible is closed
            copyButton={false}
            lang={lang}
            title={title}
          />
        </CodeCollapsibleWrapper>

        {/* 
          Copy button here because of inert issue
          https://ark-ui.com/docs/components/collapsible#partial-collapse
        */}
        <CopyButton
          className="absolute inset-e-1.5 top-2"
          value={replacedCode}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <CodeBlock code={replacedCode} lang={lang} title={title} />
    </div>
  );
};
