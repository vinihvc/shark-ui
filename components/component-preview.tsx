import type React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { CodeBlock } from "./code-block";

export interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  /**
   * The code to display in the preview
   *
   * @default ""
   */
  code: string;
}

export const ComponentPreview = (props: ComponentPreviewProps) => {
  const { code, children, ...rest } = props;

  return (
    <div className="group flex flex-col gap-2">
      <Tabs {...rest} defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <div className="**:figure:!m-0 relative rounded-lg border **:[figure]:border-none">
          <TabsContent
            className="flex min-h-[400px] w-full items-center justify-center overflow-y-hidden p-14"
            value="preview"
          >
            {children}
          </TabsContent>

          <TabsContent className="**:[div]:max-h-[400px]" value="code">
            <CodeBlock code={code} lang="tsx" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
