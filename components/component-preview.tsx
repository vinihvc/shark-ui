import { readFileSync } from "node:fs";
import { join } from "node:path";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import type React from "react";
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const registryPath = "registry/react/examples";

export interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  /**
   * The name of the component to display in the preview
   *
   * @default ""
   */
  componentName: string;
}

export const ComponentPreview = async (props: ComponentPreviewProps) => {
  const { componentName, ...rest } = props;

  // Dynamically import the example component
  const Example = await import(`${registryPath}/${componentName}.tsx`);

  // Read the source code from the example file
  const sourceCode = readFileSync(
    join(process.cwd(), registryPath, `${componentName}.tsx`),
    "utf-8"
  );

  if (!Example.default) {
    throw new Error(`Component ${componentName} not found`);
  }

  return (
    <div className="group not-prose flex flex-col gap-2">
      <Tabs {...rest} defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>

          <TabsIndicator />
        </TabsList>

        <div className="**:[figure]:!m-0 relative rounded-lg border **:[figure]:border-none">
          <TabsContent
            className="preview flex h-[400px] w-full items-center justify-center overflow-y-auto p-14"
            value="preview"
          >
            <Example.default />
          </TabsContent>

          <TabsContent className="**:[div]:max-h-[400px]" value="code">
            <DynamicCodeBlock code={sourceCode} lang="tsx" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
