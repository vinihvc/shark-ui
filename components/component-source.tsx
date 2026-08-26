/** biome-ignore-all lint/correctness/noConstAssign: it's ok */
/** biome-ignore-all lint/style/noParameterAssign: it's ok */

import { readFileSync } from "node:fs";
import type React from "react";
import { resolveRegistrySourcePath } from "@/lib/registry-source-path";
import { replaceContentForCopy } from "@/utils/formatter";
import { CodeBlock } from "./code-block";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";

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
    ...rest
  } = props;

  let codeContent: string | undefined;

  if (code) {
    codeContent = code;
  }

  if (src) {
    codeContent = readFileSync(resolveRegistrySourcePath(src), "utf-8");
  }

  if (!codeContent) {
    throw new Error("Code content not found");
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  const replacedCode = replaceContentForCopy(codeContent);

  if (isCollapsible) {
    return (
      <CodeCollapsibleWrapper>
        <CodeBlock code={replacedCode} lang={lang} title={title} {...rest} />
      </CodeCollapsibleWrapper>
    );
  }

  return <CodeBlock code={replacedCode} lang={lang} title={title} {...rest} />;
};
