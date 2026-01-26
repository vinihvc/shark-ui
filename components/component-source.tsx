import fs from "node:fs/promises";
import path from "node:path";
import type React from "react";
import { REGISTRY_PATH } from "@/config/constants";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";

export interface ComponentSourceProps
  extends React.ComponentProps<typeof CodeBlock> {
  /**
   * The title of the code block
   */
  title: string;
  /**
   * The file name of the code block
   */
  fileName: string;
  /**
   * The language of the code block
   */
  language: string;
  /**
   * Whether to make the code block collapsible
   *
   * @default true
   */
  isCollapsible?: boolean;
}

export const ComponentSource = async (props: ComponentSourceProps) => {
  const { language, title, fileName, isCollapsible = true, className } = props;

  if (!fileName) {
    throw new Error("fileName is required");
  }

  const file = await fs.readFile(
    path.join(process.cwd(), REGISTRY_PATH, fileName),
    "utf-8"
  );

  if (!file) {
    throw new Error(`File ${fileName} not found`);
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  if (isCollapsible) {
    return (
      <CodeCollapsibleWrapper className={className}>
        <CodeBlock code={file} lang={lang} title={title} />
      </CodeCollapsibleWrapper>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <CodeBlock code={file} lang={lang} title={title} />
    </div>
  );
};
