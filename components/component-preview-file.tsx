/** biome-ignore-all lint/correctness/noConstAssign: it's ok */
/** biome-ignore-all lint/style/noParameterAssign: it's ok */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { CodeBlock } from "./code-block";

const registryPath = "registry/react/examples";

export interface ComponentPreviewFileProps extends React.ComponentProps<"div"> {
  /**
   * The name of the component to display in the preview
   *
   * @default ""
   */
  componentName: string;
  /**
   *
   */
  fileName?: string;
}

export const ComponentPreviewFile = async (
  props: ComponentPreviewFileProps
) => {
  const { componentName, fileName = "default", className, ...rest } = props;

  // Dynamically import the example component
  const Example = await import(
    `${registryPath}/${componentName}/${fileName}.tsx`
  );

  // Read the source code from the example file
  const sourceCode = readFileSync(
    join(process.cwd(), registryPath, componentName, `${fileName}.tsx`),
    "utf-8"
  );

  const replacedCode = replaceContent(sourceCode);

  if (!Example.default) {
    throw new Error(`Component ${componentName} not found`);
  }

  return (
    <Tabs
      {...rest}
      className={cn("group mt-4 mb-12 flex flex-col gap-2", className)}
      defaultValue="preview"
    >
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      <div className="**:figure:!m-0 relative mt-4 rounded-lg border **:[figure]:border-none">
        <TabsContent
          className="flex min-h-[350px] w-full items-center justify-center overflow-y-hidden px-20 py-14"
          value="preview"
        >
          <Example.default />
        </TabsContent>

        <TabsContent
          className="min-h-[350px] **:[figure]:min-h-[350px]"
          value="code"
        >
          <CodeBlock code={replacedCode} lang="tsx" />
        </TabsContent>
      </div>
    </Tabs>
  );
};

const replaceContent = (code: string) => {
  code = code.replaceAll("@/registry/react/components", "@/components/ui");
  code = code.replaceAll(/const (\w+) =/g, "export const $1 =");
  code = code.replaceAll(/export default (\w+);/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");

  return code;
};
